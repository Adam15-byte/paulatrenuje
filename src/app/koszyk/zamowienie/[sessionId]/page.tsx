export default function FinishedPage({
  params,
}: {
  params: { sessionId: string };
}) {
  const { sessionId } = params;

  return (
    <div className="flex flex-col gap-8 overflow-hidden">
      Zakończono. Id sesji: {sessionId}
    </div>
  );
}
