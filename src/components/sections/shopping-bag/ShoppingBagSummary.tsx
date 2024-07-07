'use client';

import DefaultButton from '@/components/reusable-components/DefaultButton';
import { useShoppingBag } from '@/context/ShoppingBagContext';
import { PromoCodeValidator } from '@/lib/validators/promoCodeValidator';
import { Input } from '@nextui-org/react';
import axios from 'axios';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  name: string;
}

const ShoppingBagSummary = () => {
  const {
    shoppingBag,
    bagWorthValue,
    discountBasedOnNumberOfProducts,
    discountedValue,
    valueAfterDiscount,
    appliedPromoCode,
    setAppliedPromoCode,
  } = useShoppingBag();
  const [isPromoFormOpen, setIsPromoFormOpen] = useState<boolean>(false);
  const [promoCode, setPromoCode] = useState<string>('');
  const [errorText, setErrorText] = useState<string>('');
  const handleOpenPromoForm = () => {
    setIsPromoFormOpen(true);
  };
  const { register, handleSubmit, formState } = useForm<IFormInput>({
    defaultValues: {
      name: '',
    },
  });
  const { isSubmitting } = formState;

  const onSubmit = async () => {
    try {
      const { data } = await axios.get('/api/promo-codes/find/' + promoCode);
      const codeValidated = PromoCodeValidator.parse(data);
      setAppliedPromoCode(codeValidated);
    } catch (e) {
      setErrorText('Nie znaleziono kodu');
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {!appliedPromoCode && !!shoppingBag.length && !isPromoFormOpen && (
        <DefaultButton variant={'outline'} onClick={handleOpenPromoForm}>
          Mam kod rabatowy
        </DefaultButton>
      )}
      {!appliedPromoCode && !!shoppingBag.length && isPromoFormOpen && (
        <form id="code-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-end w-full gap-4">
            <Input
              {...register('name')}
              label="Kod promocyjny"
              labelPlacement={'outside'}
              variant="bordered"
              value={promoCode}
              onValueChange={setPromoCode}
              isInvalid={!!errorText}
              errorMessage={errorText}
            />
            <DefaultButton
              variant={'outline'}
              type="submit"
              form="code-form"
              onClick={() => {
                handleSubmit(onSubmit);
              }}
              disabled={isSubmitting}
              className="w-full mt-auto"
            >
              {isSubmitting ? 'Dodawanie' : 'Dodaj kod'}
            </DefaultButton>
          </div>
        </form>
      )}
      {!!appliedPromoCode && (
        <p className="text-green">Dodano kod {appliedPromoCode.name}</p>
      )}
      <p> Suma przed rabatami: {bagWorthValue} zł</p>
      {discountBasedOnNumberOfProducts ? (
        <p className="font-semibold text-orange">
          {shoppingBag.length} produkty w koszyku: -
          {discountBasedOnNumberOfProducts * 100}% na wszystkie produkty.{' '}
        </p>
      ) : null}
      <p className="font-semibold text-orange">
        {' '}
        Rabat: {discountedValue.toFixed(1)} zł
      </p>
      <p className="text-gray"> Koszt dostawy: 0 zł</p>
      <p className="font-bold"> Łącznie: {valueAfterDiscount} zł</p>
      {bagWorthValue ? (
        <DefaultButton
          variant={'default'}
          href="/koszyk/zamowienie"
          disabled={!shoppingBag.length}
          className="w-full"
        >
          Zamawiam
        </DefaultButton>
      ) : null}
    </div>
  );
};

export default ShoppingBagSummary;
