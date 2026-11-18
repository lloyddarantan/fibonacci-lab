import { useState } from "react";

import {
  Binary,
  GraduationCap,
} from "lucide-react";

import Calculator from "./components/Calculator";
import SequenceDisplay from "./components/SequenceDisplay";
import LearningSection from "./components/LearningSection";

import type { FibonacciResult } from "./utils/fibonacci";

function App() {
  const [result, setResult] = useState<FibonacciResult>({
    number: 13n,
    sequence: [0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n],
    recursiveCalls: 41,
  });

  const [selectedNumber, setSelectedNumber] = useState(7);

  function handleCalculate(
    newResult: FibonacciResult,
    n: number
  ) {
    setResult(newResult);
    setSelectedNumber(n);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}

      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          <a
            href="#home"
            className="flex items-center gap-3"
          >
            <div className="rounded-xl bg-blue-600 p-2 text-white">
              <Binary size={24} />
            </div>

            <div>
              <h1 className="font-bold text-slate-900">
                Fibonacci Lab
              </h1>

              <p className="text-xs text-slate-500">
                by Darantan & Rentuaya
              </p>
            </div>
          </a>

          <div className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#calculator" className="hover:text-blue-600">
              Calculator
            </a>

            <a href="#sequence" className="hover:text-blue-600">
              Sequence
            </a>

            <a href="#learning" className="hover:text-blue-600">
              Learn
            </a>
          </div>

        </div>
      </nav>

      {/* Hero */}

      <header
        id="home"
        className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-5 py-20 text-white"
      >
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
              Interactive Learning Tool for Discrete Mathematics
            </span>

            <h2 className="mt-7 text-4xl font-extrabold leading-tight md:text-6xl">
              Discover the
              <span className="block text-blue-400">
                Fibonacci Sequence.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Explore how numbers are generated through
              recursion. Enter a number, calculate its
              Fibonacci value, and understand how the
              process works.
            </p>

            <a
              href="#calculator"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-500"
            >
              Try the Calculator
            </a>
          </div>

        </div>
      </header>

      {/* Main Content */}

      <main className="mx-auto max-w-7xl space-y-8 px-5 py-12">

        {/* Calculator */}

        <section id="calculator">
          <Calculator onCalculate={handleCalculate} />
        </section>

        {/* Result */}

        <section className="grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl bg-blue-600 p-7 text-white shadow-sm">
            <p className="text-sm font-medium text-blue-100">
              Your Fibonacci Result
            </p>

            <p className="mt-4 text-5xl font-extrabold break-all">
              {result.number.toString()}
            </p>

            <p className="mt-3 text-blue-100">
              F({selectedNumber})
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Recursive Function Calls
            </p>

            <p className="mt-4 text-5xl font-extrabold text-slate-900">
              {result.recursiveCalls}
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Number of function calls made during
              the calculation, including cached lookups.
            </p>
          </div>

        </section>

        {/* Sequence */}

        <section id="sequence">
          <SequenceDisplay
            sequence={result.sequence}
            selectedNumber={selectedNumber}
          />
        </section>

        {/* Learning */}

        <section id="learning">
          <LearningSection
            n={selectedNumber}
            result={result.number}
          />
        </section>

        {/* Footer */}

        <footer className="border-t border-slate-200 py-8 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-500">
            <GraduationCap size={20} />

            <p className="text-sm font-medium">
              Fibonacci Lab | Learning Evidence 2
            </p>
          </div>

          <p className="mt-2 text-xs text-slate-400">
            By Darantan, Lloyd & Rentuaya, Mikealla BSIT3A
          </p>
        </footer>

      </main>
    </div>
  );
}

export default App;