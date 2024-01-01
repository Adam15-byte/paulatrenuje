import PrimaryButton from '@/components/PrimaryButton';

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
      <PrimaryButton
        text="Powrót do strony głównej"
        type="button"
        additionalStyle="w-full md:max-w-[500px]"
        href="/"
      />
    </div>
  );
}
