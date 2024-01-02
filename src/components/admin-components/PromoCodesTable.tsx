'use client';

import { PromoArrayValidator } from '@/lib/validators/promoCodeValidator';
import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Button,
} from '@nextui-org/react';
import { PrismaClient } from '@prisma/client';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Trash2 } from 'lucide-react';
import { useCallback } from 'react';
import AddPromoCode from './AddPromoCode';
import { queryClient } from '@/context/Providers';
import { promoCodesColumns } from './columns';
const prisma = new PrismaClient();

const PromoCodesTable = () => {
  const fetchPromoCodes = async () => {
    const result = await axios.get('/api/promo-codes/getAll');
    const validatedData = PromoArrayValidator.parse(result.data);
    return validatedData;
  };
  const { data, isLoading } = useQuery({
    queryKey: ['promoCodes'],
    queryFn: () => fetchPromoCodes(),
  });

  const deletePromoCode = async (promoName: string) => {
    const params = { name: promoName };
    const result = await axios.post('/api/promo-codes/delete', params);
    return result;
  };
  const mutation = useMutation({
    mutationFn: (promoName: string) => deletePromoCode(promoName),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['promoCodes'] });
    },
  });

  const renderCell = useCallback(
    (item: Record<string | number, any>, columnKey: string | number) => {
      const cellValue = item[columnKey];
      switch (columnKey) {
        case 'actions':
          return (
            <Button
              size="sm"
              radius="sm"
              color="primary"
              startContent={<Trash2 size={16} strokeWidth={2} />}
              onClick={() => mutation.mutate(item.name)}
            >
              Usuń
            </Button>
          );
        default:
          return cellValue;
      }
    },
    [mutation]
  );
  return (
    <div className="flex flex-col gap-8">
      <Table aria-label="Example empty table">
        <TableHeader columns={promoCodesColumns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={data ?? []}
          emptyContent={
            isLoading ? (
              <Spinner size="lg" />
            ) : (
              <p>Brak wierszy do wyświetlenia</p>
            )
          }
        >
          {(item) => (
            <TableRow key={item.name}>
              {(columnKey) => (
                <TableCell>
                  {renderCell(item, columnKey as string | number)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <AddPromoCode />
    </div>
  );
};

export default PromoCodesTable;
