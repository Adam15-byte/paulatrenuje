'use client';

import { IPdfWatermarkValidator } from '@/lib/validators/PDFWatermarkValidator';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import PrimaryButton from '../PrimaryButton';
import { Input, Select, SelectItem } from '@nextui-org/react';
import axios from 'axios';
import { ebooksConfig } from '@/configs/ebooksConfig';

const CustomEbookGenerator = () => {
  const { register, handleSubmit } = useForm<IPdfWatermarkValidator>({
    defaultValues: {
      userEmail: '',
      productId: '',
    },
  });
  const onSubmit: SubmitHandler<IPdfWatermarkValidator> = async (formData) => {
    window.open(
      `http://localhost:3000/api/email-send/pdf-waterproof/${formData.userEmail}/${formData.productId}`,
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
      <PrimaryButton
        text="Dodaj kod"
        type="submit"
        form="generate-ebook-form"
        additionalStyle="w-full mt-auto"
        onClick={() => {
          handleSubmit(onSubmit);
        }}
      />
    </form>
  );
};

export default CustomEbookGenerator;
