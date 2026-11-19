interface SequenceDisplayProps {
  sequence: bigint[];
  selectedNumber: number;
}

export default function SequenceDisplay({
  sequence,
  selectedNumber,
}: SequenceDisplayProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <h2 className="font-display text-2xl font-bold text-teal-950">
        The sequence up to F({selectedNumber})
      </h2>
      <p className="mt-1 text-sm text-slate-500">
        Each value is the sum of the two before it.
      </p>

      <ol className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {sequence.map((value, index) => {
          const selected = index === selectedNumber;
          return (
            <li
              key={index}
              aria-current={selected ? "true" : undefined}
              className={`rounded-2xl p-3.5 ${
                selected
                  ? "bg-teal-950 text-white"
                  : "bg-slate-50 text-slate-800"
              }`}
            >
              <p className={`text-xs font-medium ${selected ? "text-amber-300" : "text-slate-500"}`}>
                F({index}){selected && " · your result"}
              </p>
              <p className="font-display mt-1 break-all text-xl font-bold tabular-nums">
                {value.toString()}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
