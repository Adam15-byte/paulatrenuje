'use client';

import { generateTransactionId } from '@/app/api/actions';
import DefaultButton from '@/components/reusable-components/DefaultButton';
import CheckoutSummary from '@/components/sections/shopping-bag/CheckoutSummary';
import { ErrorText, Input } from '@/components/ui/input';
import { Label, LabelInputContainer } from '@/components/ui/label';
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
} from '@ingameltd/node-przelewy24';
import { Checkbox } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import countries, { registerLocale } from 'i18n-iso-countries';
import { Loader2, MailIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>({
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

  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    const sessionId = await generateTransactionId();
    //register transaction in p24
    const order: Order = {
      sessionId: sessionId,
      amount: valueAfterDiscount * 100,
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
      regulationAccept: formData.przelewy24Rules,
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
      <form id="purchase-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 mt-8 md:mt-2 gap-x-4">
          <LabelInputContainer>
            <Label htmlFor="firstName">Imię</Label>
            <Input
              id="firstName"
              placeholder="Anna"
              type="text"
              aria-invalid={!!errors.firstName}
              {...register('firstName', { required: true })}
            />
            {errors.firstName && errors.firstName.type === 'required' && (
              <ErrorText>To pole jest wymagane</ErrorText>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastName">Nazwisko</Label>
            <Input
              id="lastName"
              placeholder="Przykładna"
              type="text"
              aria-invalid={!!errors.lastName}
              {...register('lastName', { required: true })}
            />
            {errors.lastName && errors.lastName.type === 'required' && (
              <ErrorText>To pole jest wymagane</ErrorText>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="country">Państwo</Label>
            <Select
              defaultValue="PL"
              aria-invalid={!!errors.country}
              {...register('country', { required: true })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Wybierz Państwo" />
              </SelectTrigger>
              <SelectContent>
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
              </SelectContent>
            </Select>
            {errors.country && errors.country.type === 'required' && (
              <ErrorText>To pole jest wymagane</ErrorText>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="street">Ulica</Label>
            <Input
              id="street"
              placeholder="Piłsudskiego"
              type="text"
              aria-invalid={!!errors.street}
              {...register('street', { required: true })}
            />
            {errors.street && errors.street.type === 'required' && (
              <ErrorText>To pole jest wymagane</ErrorText>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="city">Miasto</Label>
            <Input
              id="city"
              placeholder="Warszawa"
              type="text"
              aria-invalid={!!errors.street}
              {...register('city', { required: true })}
            />
            {errors.city && errors.city.type === 'required' && (
              <ErrorText>To pole jest wymagane</ErrorText>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="postCode">Kod pocztowy</Label>
            <Input
              id="postCode"
              placeholder="00-000"
              type="text"
              aria-invalid={!!errors.postCode}
              {...register('postCode', {
                required: true,
                pattern: {
                  value: /^\d{2}-\d{3}$/,
                  message: 'Nieprawidłowy format kodu pocztowego',
                },
              })}
            />
            {errors.postCode && errors.postCode.type === 'required' && (
              <ErrorText>To pole jest wymagane</ErrorText>
            )}
            {errors.postCode && errors.postCode.type === 'pattern' && (
              <ErrorText>{errors.postCode.message}</ErrorText>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="phoneNumber">Numer telefonu</Label>
            <Input
              id="phoneNumber"
              placeholder="123456789"
              type="text"
              aria-invalid={!!errors.phoneNumber}
              {...register('phoneNumber', {
                required: true,
                pattern: {
                  value: /^\d{9,11}$/,
                  message: 'Nieprawidłowy format numeru telefonu',
                },
              })}
            />
            {errors.phoneNumber && errors.phoneNumber.type === 'required' && (
              <ErrorText>To pole jest wymagane</ErrorText>
            )}
            {errors.phoneNumber && errors.phoneNumber.type === 'pattern' && (
              <ErrorText>{errors.phoneNumber.message}</ErrorText>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="emailAddress">Email</Label>
            <Input
              id="emailAddress"
              placeholder="123456789"
              type="text"
              aria-invalid={!!errors.emailAddress}
              {...register('emailAddress', { required: true })}
            />
            {errors.emailAddress && errors.emailAddress.type === 'required' && (
              <ErrorText>To pole jest wymagane</ErrorText>
            )}
          </LabelInputContainer>
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
                    : 'border-lightgray shadow-md bg-white',
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
            <DefaultButton
              variant="outline"
              onClick={() => {
                setIsAllMethodsShown((prevState) => !prevState);
              }}
              className="max-w-[250px] px-8"
            >
              {isAllMethodsShown ? 'Pokaż mniej' : 'Pokaż wszystkie'}
            </DefaultButton>
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
            id={'internalRules'}
            isRequired
            aria-invalid={!!errors.internalRules}
            {...register('internalRules', { required: true })}
            className={
              errors.internalRules ? 'text-red border-red' : 'text-black'
            }
          >
            Przeczytałem/am i akceptuję{' '}
            <Link className="text-orange" href="/regulamin">
              regulamin
            </Link>
            {!!errors.internalRules && (
              <span className="text-xs text-red"> * To pole jest wymagane</span>
            )}
          </Checkbox>
          <Checkbox
            id={'przelewy24Rules'}
            isRequired
            aria-invalid={!!errors.przelewy24Rules}
            {...register('przelewy24Rules', { required: true })}
            className={
              errors.przelewy24Rules ? 'text-red border-red' : 'text-black'
            }
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
            {!!errors.przelewy24Rules && (
              <span className="text-xs text-red"> * To pole jest wymagane</span>
            )}
          </Checkbox>
        </div>
      </form>

      <div className="flex w-full justify-center">
        <DefaultButton
          variant="default"
          type="submit"
          form="purchase-form"
          className="w-full md:max-w-[500[px]"
          // disabled={isSubmitting || !valueAfterDiscount}
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? 'Przekierowywanie' : 'Przejdź do płatności'}
        </DefaultButton>
      </div>
    </section>
  );
};

export default Page;
