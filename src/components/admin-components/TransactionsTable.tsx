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
  const { data, isLoading } = useQuery({
    queryKey: ['transactions'],
    queryFn: () => fetchTransactions(),
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
      const onEmailClick = async () => {
        const dataFormatted: IEmailValidator = {
          firstName: item.firstName,
          userEmail: item.userEmail,
          productIds: item.productIds,
          moneyCharged: item.moneyCharged,
        };
        await axios.post('/api/email-send/user-confirmation', dataFormatted);
      };
      switch (columnKey) {
        case 'productIds':
          return cellValue.join(', ');
        case 'moneyCharged':
          return `${cellValue} zł`;
        case 'isPaid':
          return cellValue ? (
            <Chip color="success">Tak</Chip>
          ) : (
            <Chip color="danger">Nie</Chip>
          );
        case 'isEmailSent':
          return cellValue ? (
            <Chip color="success">Tak</Chip>
          ) : (
            <Chip color="danger">Nie</Chip>
          );
        case 'actions':
          return (
            <Button
              size="sm"
              radius="sm"
              color="primary"
              onClick={onEmailClick}
            >
              Wyślij email
            </Button>
          );
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
