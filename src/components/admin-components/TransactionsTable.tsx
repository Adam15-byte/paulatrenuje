import { TransactionsArrayValidator } from '@/lib/validators/transactionsValidators';
import {
  Button,
  Chip,
  Input,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useCallback, useState, useMemo } from 'react';
import { transactionsColumns } from './columns';
import { SearchIcon } from 'lucide-react';
import { IEmailValidator } from '@/lib/validators/emailValidator';
import { toast } from 'react-hot-toast';
import { queryClient } from '@/context/Providers';
import SendEmailButton from './SendEmailButton';
import dayjs from 'dayjs';

const TransactionsTable = () => {
  const [filterValue, setFilterValue] = useState<string>('');
  const onClear = useCallback(() => {
    setFilterValue('');
  }, []);
  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
    } else {
      setFilterValue('');
    }
  }, []);

  const fetchTransactions = async () => {
    const result = await axios.get('/api/transactions/getAll');
    const validatedData = TransactionsArrayValidator.parse(result.data);
    return validatedData;
  };
  // refetch every 1 minute
  const { data, isLoading } = useQuery({
    queryKey: ['transactions'],
    queryFn: async () => {
      const data = await fetchTransactions();
      // filter test transactions and then sort by createdAT
      return data
        .filter(
          (item) => item.userEmail.toLowerCase() !== 'adamjankowski5@gmail.com'
        )
        .sort((a, b) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        });
    },
    refetchInterval: 60000,
  });

  const filteredData = useMemo(() => {
    if (filterValue === '') {
      return data;
    }
    if (data?.length) {
      return data.filter((item) => {
        return (
          item.firstName.includes(filterValue) ||
          item.lastName.includes(filterValue) ||
          item.userEmail.includes(filterValue) ||
          item.productIds.join(', ').includes(filterValue)
        );
      });
    }
    return [];
  }, [data, filterValue]);
  const renderCell = useCallback(
    (item: Record<string | number, any>, columnKey: string | number) => {
      const cellValue = item[columnKey];
      let isLoading = false;
      const onEmailClick = async () => {
        isLoading = true;
        const dataFormatted: IEmailValidator = {
          firstName: item.firstName,
          userEmail: item.userEmail,
          productIds: item.productIds,
        };
        try {
          await axios.post('/api/email-send/user-confirmation', dataFormatted);
          await axios.post('/api/transactions/change/email-sent', {
            id: item.id,
          });
          queryClient.invalidateQueries({ queryKey: ['transactions'] });
          isLoading = false;
          toast.success('Email wysłany');
        } catch (e) {
          toast.error('Nie udało się wysłać emaila');
          isLoading = false;
        }
      };
      switch (columnKey) {
        case 'createdAt':
          return dayjs(cellValue).format('DD.MM');
        case 'productIds':
          return cellValue.join(', ');
        case 'moneyCharged':
          return `${cellValue} zł`;
        case 'isPaid':
          return cellValue ? (
            <Chip color="success">Tak</Chip>
          ) : (
            <Chip color="secondary">Nie</Chip>
          );
        case 'isEmailSent':
          return cellValue ? (
            <Chip color="success">Tak</Chip>
          ) : (
            <Chip color="secondary">Nie</Chip>
          );
        case 'actions':
          return <SendEmailButton onEmailClick={onEmailClick} />;
        default:
          return cellValue;
      }
    },
    []
  );
  return (
    <div className="flex flex-col gap-8">
      <Input
        isClearable
        className="w-full"
        placeholder="Search ..."
        startContent={<SearchIcon />}
        value={filterValue}
        onClear={() => onClear()}
        onValueChange={onSearchChange}
      />
      <Table aria-label="Example empty table">
        <TableHeader columns={transactionsColumns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={filteredData ?? []}
          emptyContent={
            isLoading ? (
              <Spinner size="lg" />
            ) : (
              <p>Brak wierszy do wyświetlenia</p>
            )
          }
        >
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  {renderCell(item, columnKey as string | number)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionsTable;
