'use client';

import { generateTransactionId } from '@/app/api/actions';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import CheckoutSummary from '@/components/sections/shopping-bag/CheckoutSummary';
import { useShoppingBag } from '@/context/ShoppingBagContext';
import { cn } from '@/lib/utils';
import {
  IPaymentMethod,
  IPaymentMethodsReponse,
} from '@/lib/validators/paymentMethodsValidator';
import { ITransactionValidator } from '@/lib/validators/transactionsValidators';
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
import axios from 'axios';
import countries, { registerLocale } from 'i18n-iso-countries';
import { MailIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
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

const prioretyPaymentMethods = [154, 177, 270, 274, 275, 276, 45, 280];

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

  // Fetch payment methods
  const { bagWorthValue, shoppingBag, valueAfterDiscount } = useShoppingBag();
  const roundedValue = Number(valueAfterDiscount.toFixed(0));
  const isMobile = false;
  const [isAllMethodsShown, setIsAllMethodsShown] = useState<boolean>(false);
  const { data, isLoading } = useQuery({
    queryKey: ['paymentMethods'],
    queryFn: async () => {
      const result = await axios.get(
        `/api/fetch-payment-methods/${roundedValue}`
      );
      return result.data as IPaymentMethodsReponse;
    },
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
  const { register, handleSubmit, formState } = useForm<IFormInput>({
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
  const { isSubmitting } = formState;
  const [rules, setRules] = useState<boolean>(false);
  const [p24Rules, setP24Rules] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    const sessionId = await generateTransactionId();
    //register transaction in p24
    const order: Order = {
      sessionId: sessionId,
      amount: 1 * 100,
      currency: Currency.PLN,
      description: `Zamówienie ${formData.emailAddress}`,
      email: formData.emailAddress,
      country: Country.Poland,
      language: formData.country as Language,
      urlReturn: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/koszyk/zamowienie/${sessionId}`,
      urlStatus: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/transaction-status`,
      timeLimit: 15,
      encoding: Encoding.UTF8,
      method: selectedPaymentMethod,
      regulationAccept: p24Rules,
      waitForResult: true,
    };
    const result = await axios.post(
      '/api/transactions/register-transaction-p24',
      order
    );
    // create transaction in database
    const transactionBody: ITransactionValidator = {
      id: sessionId,
      userEmail: formData.emailAddress,
      firstName: formData.firstName,
      lastName: formData.lastName,
      productIds: shoppingBag.map((item) => item.id),
      moneyCharged: bagWorthValue,
      isPaid: false,
      isEmailSent: false,
      createdAt: new Date().toISOString(),
    };
    await axios.post('/api/transactions/create', transactionBody);
    router.push(result.data.link);
  };

  const mutatePaymentName = (name: string) => {
    if (name === 'BLIK - PSP') return 'BLIK';
    if (name.includes('(Usługa ITP)')) return name.replace('(Usługa ITP)', '');
    return name;
  };
  return (
    <section className="flex mt-16 z-20 lg:mt-28 lg:min-h-0 w-full px-5 flex-col gap-4 lg:gap-12 lg:justify-between">
      <div className="flex gap-2">
        <div className="w-1 bg-orange h-[100]" />
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wider">
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
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wider">
                Metoda Płatności
              </h2>
            </div>
          </div>
          <div className="inline-grid grid-cols-3 md:grid-cols-8 gap-4 mt-4">
            {(isLoading || !paymentMethods.length) &&
              new Array(8)
                .fill(0)
                .map((item, index) => (
                  <Skeleton
                    key={index}
                    width={'90%'}
                    height={80}
                    baseColor="#c7c7c7"
                    highlightColor="#d1d1d1"
                  />
                ))}
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
                <p className="text-xs mt-auto text-center">
                  {mutatePaymentName(item.name)}
                </p>
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
          <CheckoutSummary />
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
          text={isSubmitting ? 'Przekierowywanie' : 'Przejdź do płatności'}
          type="submit"
          form="hook-form"
          additionalStyle="w-full md:max-w-[500px]"
          isLoading={isSubmitting}
          disabled={isSubmitting || !valueAfterDiscount}
          onClick={() => {
            handleSubmit(onSubmit);
          }}
        />
      </div>
    </section>
  );
};

export default Page;
