interface SequenceDisplayProps {
  sequence: bigint[];
  selectedNumber: number;
}

export default function SequenceDisplay({
  sequence,
  selectedNumber,
}: SequenceDisplayProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">
        Fibonacci Sequence
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        All calculated values from F(0) to F({selectedNumber}).
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {sequence.map((value, index) => (
          <div
            key={index}
            className={`rounded-xl border p-3 ${
              index === selectedNumber
                ? "border-blue-500 bg-blue-50"
                : "border-slate-200 bg-slate-50"
            }`}
          >
            <p className="text-xs font-medium text-slate-500">
              F({index})
            </p>

            <p className="mt-1 break-all text-lg font-bold text-slate-800">
              {value.toString()}
            </p>

            {index === selectedNumber && (
              <span className="mt-2 inline-block rounded-md bg-blue-600 px-2 py-1 text-xs text-white">
                Selected
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}