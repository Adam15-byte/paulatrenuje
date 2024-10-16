'use client';

import { IPromoCodeValidator } from '@/lib/validators/promoCodeValidator';
import axios from 'axios';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input, Select, SelectItem } from '@nextui-org/react';
import { queryClient } from '@/context/Providers';
import toast from 'react-hot-toast';
import DefaultButton from '../reusable-components/DefaultButton';

const AddPromoCode = () => {
  const { register, handleSubmit } = useForm<IPromoCodeValidator>({
    defaultValues: {
      name: '',
      value: 0,
      promoType: '',
      usedNumber: 0,
    },
  });
  const promoTypesAvailable = ['%', 'PLN'];
  const onSubmit: SubmitHandler<IPromoCodeValidator> = async (formData) => {
    const dataFormatted: IPromoCodeValidator = {
      ...formData,
      value: Number(formData.value),
    };
    const { data } = await axios.post('/api/promo-codes/create', dataFormatted);
    toast.success('Kod promocyjny dodany');
    queryClient.invalidateQueries({ queryKey: ['promoCodes'] });
    return data;
  };
  return (
    <form
      id="add-promo-form"
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-4"
    >
      <Input
        {...register('name')}
        label="Nazwa"
        placeholder="Nazwa"
        labelPlacement={'outside'}
        variant="bordered"
        isRequired
      />
      <Input
        type="number"
        {...register('value')}
        label="Wartość"
        placeholder="Wartość"
        labelPlacement={'outside'}
        variant="bordered"
        isRequired
      />
      <Select
        {...register('promoType')}
        label="Rodzaj"
        variant="bordered"
        labelPlacement={'outside'}
        defaultSelectedKeys={[]}
        className="mt-4 md:mt-0"
        isRequired
      >
        {promoTypesAvailable.map((item, index) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </Select>
      <DefaultButton
        variant="outline"
        type="submit"
        form="add-promo-form"
        className="w-full mt-auto"
        onClick={() => {
          handleSubmit(onSubmit);
        }}
      >
        Dodaj kod
      </DefaultButton>
    </form>
  );
};

export default AddPromoCode;
