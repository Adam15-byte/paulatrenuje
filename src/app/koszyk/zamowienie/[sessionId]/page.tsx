import DefaultButton from '@/components/reusable-components/DefaultButton';

export default function FinishedPage({
  params,
}: {
  params: { sessionId: string };
}) {
  const { sessionId } = params;

  return (
    <div className="flex flex-col gap-8 p-4">
      <h1 className="text-2xl font-bold">Dziękuję za twoje zamówienie</h1>
      <p>
        Po zaksięgowaniu płatności na maila otrzymasz wiadomość z potwierdzeniem
        oraz linkami do pobrania zamówionego produktu.
      </p>
      <DefaultButton
        variant={'default'}
        href="/"
        type="button"
        className="w-full md:max-w-[500px]"
      >
        Powrót do strony głównej
      </DefaultButton>
    </div>
  );
}
