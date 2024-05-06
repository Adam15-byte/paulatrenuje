'use client';

import PrimaryButton from '@/components/PrimaryButton';
import { Download, Sheet } from 'lucide-react';
import { FC } from 'react';

const ProgressDownload: FC = () => {
  return (
    <div className="w-full max-w-lg flex flex-col items-center mx-auto gap-2">
      <h1 className="text-lg font-semibold">Fit At Gym Progress Sheet.xlsx</h1>
      <PrimaryButton
        text={'OTWORZ GOOGLE DOC'}
        leftIcon={<Sheet />}
        href={
          'https://docs.google.com/spreadsheets/d/12rY2OcLqmF5EM0zz3aw6SKnk7gybyYAQVtdp8hpoR38/edit#gid=0'
        }
      />
      <PrimaryButton
        text={'POBIERZ'}
        leftIcon={<Download />}
        href={
          'https://paulatrenuje.s3.amazonaws.com/Plan+treningowy.+Sledzenie+progresu.xlsx'
        }
      />
    </div>
  );
};

export default ProgressDownload;
