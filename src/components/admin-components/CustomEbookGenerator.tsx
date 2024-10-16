'use client';

import { IPdfWatermarkValidator } from '@/lib/validators/PDFWatermarkValidator';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input, Select, SelectItem } from '@nextui-org/react';
import { ebooksConfig } from '@/configs/ebooksConfig';
import DefaultButton from '../reusable-components/DefaultButton';

const CustomEbookGenerator = () => {
  const { register, handleSubmit } = useForm<IPdfWatermarkValidator>({
    defaultValues: {
      userEmail: '',
      productId: '',
    },
  });
  const onSubmit: SubmitHandler<IPdfWatermarkValidator> = async (formData) => {
    window.open(
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/email-send/pdf-waterproof/${formData.userEmail}/${formData.productId}`,
      '_blank'
    );
  };
  return (
    <form
      id="generate-ebook-form"
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-4"
    >
      <Input
        {...register('userEmail')}
        label="Tekst do dodania"
        placeholder="Tekst do dodania"
        labelPlacement={'outside'}
        variant="bordered"
        isRequired
      />
      <Select
        {...register('productId')}
        label="Rodzaj"
        variant="bordered"
        labelPlacement={'outside'}
        defaultSelectedKeys={[]}
        className="mt-4 md:mt-0"
        isRequired
      >
        {ebooksConfig
          .map((ebook) => ebook.id)
          .map((item, index) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
      </Select>
      <DefaultButton
        type="submit"
        variant="default"
        form="generate-ebook-form"
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

export default CustomEbookGenerator;
