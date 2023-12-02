'use client';

import { generateTransactionId } from '@/app/api/actions';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import { useShoppingBag } from '@/context/ShoppingBagContext';
import { cn } from '@/lib/utils';
import {
  Country,
  Currency,
  Encoding,
  Language,
  Order,
  P24,
} from '@ingameltd/node-przelewy24';
import { Checkbox, Input, Select, SelectItem } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import countries, { registerLocale } from 'i18n-iso-countries';
import { MailIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IPaymentMethod, fetchPaymentMethods } from './fetchPaymentMethods';
import useWindowDimensions from '@/hooks/useWindowDimension';
import { useRouter } from 'next/navigation';
registerLocale(require('i18n-iso-countries/langs/pl.json'));

const unavailableImages = [
  'https://static.przelewy24.pl/payment-form-logo/svg/82',
  'https://static.przelewy24.pl/payment-form-logo/svg/110',
  'https://static.przelewy24.pl/payment-form-logo/svg/135',
  'https://static.przelewy24.pl/payment-form-logo/svg/105',
  'https://static.przelewy24.pl/payment-form-logo/svg/97',
  'https://static.przelewy24.pl/payment-form-logo/svg/160',
  'https://static.przelewy24.pl/payment-form-logo/svg/153',
];

const prioretyPaymentMethods = [154, 20, 177, 270, 26, 31, 176, 112];

interface IFormInput {
  firstName: string;
  lastName: string;
  country: string;
  street: string;
  city: string;
  postCode: string;
  phoneNumber: string;
  emailAddress: string;
  internalRules: boolean;
  przelewy24Rules: boolean;
}

const Page: FC = () => {
  const router = useRouter();
  const p24 = new P24(
    Number(process.env.NEXT_PUBLIC_PRZELEWY24_MERCHANT_ID),
    Number(process.env.NEXT_PUBLIC_PRZELEWY24_POS_ID),
    process.env.NEXT_PUBLIC_PRZELEWY24_APIKEY ?? '',
    process.env.NEXT_PUBLIC_PRZELEWY24_CRC ?? '',
    {
      sandbox: true,
    }
  );
  const { width: screenWidth } = useWindowDimensions();

  // Fetch payment methods
  const { bagWorthValue } = useShoppingBag();
  const roundedValue = Number(bagWorthValue.toFixed(0));
  const isMobile = screenWidth < 700;
  const [isAllMethodsShown, setIsAllMethodsShown] = useState<boolean>(false);
  const paymentMethodsURL = `https://sandbox.przelewy24.pl/api/v1/payment/methods/pl?amount=${roundedValue}&currency=PLN`;
  const { data, isLoading } = useQuery({
    queryKey: ['paymentMethods'],
    queryFn: () => fetchPaymentMethods(paymentMethodsURL),
  });
  const paymentMethods: IPaymentMethod[] = useMemo(
    () =>
      data
        ? data.data
            .filter((method) => method.status)
            .filter((method) => !unavailableImages.includes(method.imgUrl))
            .filter((method) => {
              if (isMobile) {
                return method.mobile;
              }
              return true;
            })
            .filter((method) => {
              if (!isAllMethodsShown) {
                return prioretyPaymentMethods.includes(method.id);
              }
              return true;
            })
        : [],
    [data, isMobile, isAllMethodsShown]
  );
  console.log('paymentMethods:', paymentMethods);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<number>(0);
  const initialMount = useRef<boolean>(true);
  useEffect(() => {
    if (paymentMethods.length && initialMount.current) {
      initialMount.current = false;
      setSelectedPaymentMethod(paymentMethods[0].id);
    }
  }, [paymentMethods]);

  // Get and handle country codes
  const countriesCodes = countries.getNames('pl', { select: 'official' });

  // Form handling
  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      firstName: '',
      lastName: '',
      country: 'PL',
      street: '',
      city: '',
      postCode: '',
      phoneNumber: '',
      emailAddress: '',
      internalRules: false,
      przelewy24Rules: false,
    },
  });
  const [rules, setRules] = useState<boolean>(false);
  const [p24Rules, setP24Rules] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const sessionId = await generateTransactionId(data.emailAddress);
    const order: Order = {
      sessionId: sessionId,
      amount: bagWorthValue * 100,
      currency: Currency.PLN,
      description: 'Zamówienie ebooków',
      email: data.emailAddress,
      country: Country.Poland,
      language: data.country as Language,
      urlReturn: `http://localhost:3000/koszyk/zamowienie/${sessionId}`,
      urlStatus: 'http://localhost:3000/api/transactionStatus',
      timeLimit: 15,
      encoding: Encoding.UTF8,
      method: selectedPaymentMethod,
      regulationAccept: p24Rules,
      waitForResult: true,
    };
    const result = await p24.createTransaction(order);
    router.push(result.link);
  };
  return (
    <section className="flex mt-16 z-20 lg:mt-28 lg:min-h-0 w-full px-5 flex-col gap-4 lg:gap-12 lg:justify-between">
      <div className="flex gap-2">
        <div className="w-1 bg-orange h-[100]" />
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-wider">
            Dane rozliczeniowe
          </h2>
        </div>
      </div>
      <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 mt-8 md:mt-2 gap-x-4">
          <Input
            {...register('firstName')}
            label="Imię"
            placeholder="Imię"
            labelPlacement="outside"
            variant="bordered"
            isRequired
          />
          <Input
            {...register('lastName')}
            label="Nazwisko"
            placeholder="Nazwisko"
            labelPlacement={'outside'}
            variant="bordered"
            isRequired
          />
          <Select
            {...register('country')}
            label="Państwo"
            variant="bordered"
            labelPlacement={'outside'}
            defaultSelectedKeys={['PL']}
            className="mt-4 md:mt-0"
            isRequired
          >
            {Object.entries(countriesCodes)
              .sort((a, b) => {
                // a[1] and b[1] are the values of the country names
                if (a[1].toLowerCase() < b[1].toLowerCase()) return -1;
                if (a[1].toLowerCase() > b[1].toLowerCase()) return 1;
                return 0;
              })
              .map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value}
                </SelectItem>
              ))}
          </Select>
          <Input
            {...register('street')}
            label="Ulica"
            placeholder="Ulica"
            labelPlacement={'outside'}
            variant="bordered"
            isRequired
          />
          <Input
            {...register('city')}
            label="Miasto"
            placeholder="Miasto"
            labelPlacement={'outside'}
            variant="bordered"
            isRequired
          />
          <Input
            {...register('postCode')}
            label="Kod pocztowy"
            placeholder="Kod pocztowy"
            labelPlacement={'outside'}
            variant="bordered"
            isRequired
          />
          <Input
            {...register('phoneNumber')}
            label="Numer telefonu"
            placeholder="Numer telefonu"
            labelPlacement={'outside'}
            variant="bordered"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">+48</span>
              </div>
            }
            isRequired
          />
          <Input
            {...register('emailAddress')}
            label="Email"
            placeholder="Email"
            type="email"
            labelPlacement={'outside'}
            variant="bordered"
            startContent={
              <MailIcon
                size={20}
                strokeWidth={2.5}
                className="text-default-400"
              />
            }
            isRequired
          />
        </div>
        <div className="flex flex-col gap-4 mt-4 md:mt-16">
          <div className="flex gap-2 mt-10 md:mt-4">
            <div className="w-1 bg-orange h-[100]" />
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-wider">
                Metoda Płatności
              </h2>
            </div>
          </div>
          <div className="inline-grid grid-cols-3 md:grid-cols-8 gap-4 mt-4">
            {paymentMethods.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedPaymentMethod(item.id);
                }}
                className={cn(
                  selectedPaymentMethod === item.id
                    ? 'border-orange shadow-lg selected-payment-item'
                    : 'border-gray shadow-md bg-white',
                  'p-4 border relative cursor-pointer rounded-lg flex flex-col items-center'
                )}
              >
                <Image
                  src={isMobile ? item.mobileImgUrl : item.imgUrl}
                  height={70}
                  width={70}
                  alt={`${item.name} payment icon`}
                  className="mb-1 object-contain h-20"
                />
                <p className="text-xs mt-auto text-center">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="flex w-full justify-center">
            <SecondaryButton
              text={isAllMethodsShown ? 'Pokaż mniej' : 'Pokaż wszystkie'}
              onClick={() => {
                setIsAllMethodsShown((prevState) => !prevState);
              }}
              additionalStyle="max-w-[250px] px-8"
            />
          </div>

          <p>
            Twoje dane osobowe zostaną użyte do obsługi twojego zamówienia,
            przygotowania usługi elektronicznej i dla innych celów o których
            mówi nasza{' '}
            <Link className="text-orange" href="/polityka-prywatnosci">
              polityka prywatności
            </Link>
            .
          </p>
          <Checkbox
            isRequired
            color="warning"
            isSelected={rules}
            onValueChange={setRules}
          >
            Przeczytałem/am i akceptuję{' '}
            <Link className="text-orange" href="/regulamin">
              regulamin
            </Link>
          </Checkbox>
          <Checkbox
            isRequired
            color="warning"
            isSelected={p24Rules}
            onValueChange={setP24Rules}
          >
            Oświadczam, że zapoznałem się z{' '}
            <Link
              className="text-orange"
              href="https://www.przelewy24.pl/regulamin"
            >
              regulaminem
            </Link>{' '}
            i{' '}
            <Link
              className="text-orange"
              href="https://www.przelewy24.pl/obowiazek-informacyjny-rodo-platnicy"
            >
              obowiązkiem informacyjnym
            </Link>{' '}
            serwisu Przelewy24
          </Checkbox>
        </div>
      </form>
      <div className="flex w-full justify-center">
        <PrimaryButton
          text="Przejdź do płatności"
          type="submit"
          form="hook-form"
          additionalStyle="w-full md:max-w-[500px]"
          onClick={() => {
            handleSubmit(onSubmit);
          }}
        />
      </div>
    </section>
  );
};

export default Page;
