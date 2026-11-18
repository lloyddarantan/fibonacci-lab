import { BookOpen, Code, Lightbulb } from "lucide-react";

interface LearningSectionProps {
  n: number;
  result: bigint;
}

export default function LearningSection({
  n,
  result,
}: LearningSectionProps) {
  return (
    <div className="space-y-6">
      {/* Simplified notation */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-3">
          <Code className="text-blue-600" size={24} />

          <div>
            <h2 className="text-xl font-bold">
              Simplified Programming Notation
            </h2>

            <p className="text-sm text-slate-500">
              Understand the program using simple instructions.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl bg-slate-950 p-5 font-mono text-sm leading-8 text-slate-200">
          <p className="text-blue-400">
            INPUT n = {n}
          </p>

          <p className="text-purple-400">
            PROCESS:
          </p>

          <p>IF n = 0, RETURN 0</p>

          <p>IF n = 1, RETURN 1</p>

          <p>
            OTHERWISE:
          </p>

          <p className="pl-4">
            CALCULATE F(n - 1)
          </p>

          <p className="pl-4">
            CALCULATE F(n - 2)
          </p>

          <p className="pl-4">
            ADD BOTH RESULTS
          </p>

          <p className="mt-3 border-t border-slate-700 pt-3 text-green-400">
            OUTPUT F({n}) = {result.toString()}
          </p>
        </div>
      </section>

      {/* Recursion explanation */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <BookOpen className="text-blue-600" size={24} />

          <h2 className="text-xl font-bold">
            How Recursion Works
          </h2>
        </div>

        <p className="leading-7 text-slate-600">
          Recursion is a programming technique where a function
          calls itself to solve a smaller version of the same
          problem. In the Fibonacci sequence, each number is
          calculated by adding the two previous numbers.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-bold text-blue-800">
              Base Case
            </p>

            <p className="mt-2 text-sm text-slate-600">
              F(0) = 0 and F(1) = 1. These are the starting
              values that stop the recursive calls.
            </p>
          </div>

          <div className="rounded-xl bg-purple-50 p-4">
            <p className="font-bold text-purple-800">
              Recursive Case
            </p>

            <p className="mt-2 text-sm text-slate-600">
              F(n) = F(n - 1) + F(n - 2). The function
              calculates smaller Fibonacci numbers until
              it reaches a base case.
            </p>
          </div>
        </div>
      </section>

      {/* Important formula */}

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <div className="flex items-center gap-3">
          <Lightbulb className="text-amber-600" size={24} />

          <h2 className="text-lg font-bold text-amber-900">
            Remember
          </h2>
        </div>

        <p className="mt-3 text-amber-900">
          Every Fibonacci number is the sum of the two
          numbers immediately before it, except for the
          first two starting values.
        </p>
      </section>
    </div>
  );
}