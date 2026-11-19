import { BookOpen, Code, Lightbulb } from "lucide-react";

interface LearningSectionProps {
  n: number;
  result: bigint;
}

export default function LearningSection({ n, result }: LearningSectionProps) {
  const lines: [string, string][] = [
    ["0", "IF n = 0, RETURN 0"],
    ["0", "IF n = 1, RETURN 1"],
    ["0", "OTHERWISE:"],
    ["1", "CALCULATE F(n - 1)"],
    ["1", "CALCULATE F(n - 2)"],
    ["1", "ADD BOTH RESULTS"],
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-3xl bg-teal-950 p-6 text-teal-50 sm:p-8">
        <div className="flex items-center gap-3">
          <Code className="text-amber-400" size={22} />
          <h2 className="font-display text-xl font-bold">The steps in plain notation</h2>
        </div>

        <div className="mt-5 overflow-x-auto rounded-2xl bg-black/25 p-5 font-mono text-sm leading-8">
          <p className="text-amber-300">INPUT n = {n}</p>
          {lines.map(([indent, text], i) => (
            <p key={i} className={indent === "1" ? "pl-6 text-teal-100" : "text-teal-100"}>
              {text}
            </p>
          ))}
          <p className="mt-3 border-t border-white/15 pt-3 text-emerald-300">
            OUTPUT F({n}) = {result.toString()}
          </p>
        </div>
      </section>

      <div className="space-y-6">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <BookOpen className="text-teal-700" size={22} />
            <h2 className="font-display text-xl font-bold text-teal-950">How recursion works</h2>
          </div>

          <p className="mt-3 max-w-prose leading-7 text-slate-600">
            A recursive function calls itself to solve a smaller version of the
            same problem. For Fibonacci, each number is built from the two
            numbers before it.
          </p>

          <dl className="mt-5 space-y-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <dt className="font-semibold text-teal-900">Base case</dt>
              <dd className="mt-1 text-sm text-slate-600">
                F(0) = 0 and F(1) = 1. These values stop the calls.
              </dd>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <dt className="font-semibold text-teal-900">Recursive case</dt>
              <dd className="mt-1 text-sm text-slate-600">
                F(n) = F(n − 1) + F(n − 2). Each call asks for two smaller
                values until it reaches a base case.
              </dd>
            </div>
          </dl>
        </section>

        <section className="flex gap-3 rounded-3xl bg-amber-100 p-6 text-amber-950">
          <Lightbulb className="mt-0.5 shrink-0 text-amber-700" size={22} />
          <p>
            <span className="font-bold">Remember: </span>
            every Fibonacci number is the sum of the two before it, except the
            two starting values.
          </p>
        </section>
      </div>
    </div>
  );
}
