import { useState } from "react";
import { Binary, GraduationCap } from "lucide-react";

import Calculator from "./components/Calculator";
import SequenceDisplay from "./components/SequenceDisplay";
import LearningSection from "./components/LearningSection";
import Spiral from "./components/Spiral";

import type { FibonacciResult } from "./utils/fibonacci";

function App() {
  const [result, setResult] = useState<FibonacciResult>({
    number: 13n,
    sequence: [0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n],
    recursiveCalls: 41,
  });
  const [selectedNumber, setSelectedNumber] = useState(7);

  function handleCalculate(newResult: FibonacciResult, n: number) {
    setResult(newResult);
    setSelectedNumber(n);
  }

  const seq = result.sequence;
  const ratio =
    selectedNumber >= 2
      ? (Number(seq[selectedNumber]) / Number(seq[selectedNumber - 1])).toFixed(5)
      : null;

  return (
    <div className="min-h-screen bg-[#f2f5f4] text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-teal-950/90 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#home" className="flex items-center gap-3">
            <span className="rounded-xl bg-amber-400 p-2 text-teal-950">
              <Binary size={20} />
            </span>
            <span>
              <span className="font-display block font-bold leading-tight">Fibonacci Lab</span>
              <span className="block text-xs text-teal-200">by Darantan & Rentuaya</span>
            </span>
          </a>

          <div className="hidden gap-1 text-sm font-medium md:flex">
            {[
              ["#calculator", "Calculator"],
              ["#sequence", "Sequence"],
              ["#learning", "Learn"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-3 py-2 text-teal-100 transition hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <header id="home" className="bg-teal-950 px-5 pb-16 pt-12 text-white md:pb-24 md:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div id="calculator" className="scroll-mt-24">
            <h2 className="font-display max-w-xl text-4xl font-extrabold leading-[1.05] md:text-6xl">
              See how each Fibonacci number is built.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-teal-100">
              Pick a number and watch the sequence grow into a spiral. Made for
              learning recursion in discrete mathematics.
            </p>

            <div className="mt-8 max-w-xl">
              <Calculator onCalculate={handleCalculate} />
            </div>
          </div>

          <div>
            <Spiral n={selectedNumber} />
            <p className="mt-4 text-center text-teal-200">
              F({selectedNumber}) ={" "}
              <span className="font-display break-all text-3xl font-extrabold tabular-nums text-amber-400">
                {result.number.toString()}
              </span>
            </p>
            {selectedNumber > 12 && (
              <p className="mt-1 text-center text-xs text-teal-300">
                The spiral shows the first 12 squares.
              </p>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-8 px-5 py-12">
        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-500">Recursive function calls</p>
            <p className="font-display mt-2 text-4xl font-extrabold tabular-nums text-teal-950">
              {result.recursiveCalls}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Calls made during the calculation, including cached lookups.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-500">
              F({selectedNumber}) ÷ F({selectedNumber - 1})
            </p>
            <p className="font-display mt-2 text-4xl font-extrabold tabular-nums text-teal-950">
              {ratio ?? "—"}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              {ratio
                ? "As n grows, this ratio approaches 1.61803, the golden ratio."
                : "Choose n of 2 or more to see the ratio."}
            </p>
          </div>
        </section>

        <section id="sequence" className="scroll-mt-24">
          <SequenceDisplay sequence={seq} selectedNumber={selectedNumber} />
        </section>

        <section id="learning" className="scroll-mt-24">
          <LearningSection n={selectedNumber} result={result.number} />
        </section>

        <footer className="border-t border-slate-300 py-8 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-600">
            <GraduationCap size={20} />
            <p className="text-sm font-medium">Fibonacci Lab | Learning Evidence 2</p>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            By Darantan, Lloyd & Rentuaya, Mikealla BSIT3A
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
