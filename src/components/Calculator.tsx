import { useState } from "react";
import { Play, RotateCcw } from "lucide-react";

import { calculateFibonacci, type FibonacciResult } from "../utils/fibonacci";

interface CalculatorProps {
  onCalculate: (result: FibonacciResult, n: number) => void;
}

const PRESETS = [5, 7, 10, 15, 20];

export default function Calculator({ onCalculate }: CalculatorProps) {
  const [input, setInput] = useState("7");
  const [error, setError] = useState("");

  function handleCalculate() {
    const n = Number(input);

    if (input.trim() === "") return setError("Enter a number to calculate.");
    if (!Number.isInteger(n) || n < 0)
      return setError("Use a whole number that is 0 or higher.");
    if (n > 100) return setError("Use a number from 0 to 100.");

    setError("");
    onCalculate(calculateFibonacci(n), n);
  }

  function handleReset() {
    setInput("7");
    setError("");
  }

  return (
    <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-xl shadow-black/20 sm:p-8">
      <label htmlFor="n-input" className="block text-sm font-semibold text-slate-700">
        Which Fibonacci number do you want? (n)
      </label>

      <input
        id="n-input"
        type="number"
        inputMode="numeric"
        min={0}
        max={100}
        step={1}
        value={input}
        aria-invalid={!!error}
        aria-describedby={error ? "n-error" : undefined}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
        className={`font-display mt-2 w-full rounded-2xl border-2 bg-slate-50 px-5 py-4 text-4xl font-bold tabular-nums outline-none transition focus:bg-white focus:ring-4 ${
          error
            ? "border-red-400 focus:ring-red-100"
            : "border-slate-200 focus:border-teal-600 focus:ring-teal-100"
        }`}
      />

      <p id="n-error" role="alert" className="min-h-6 pt-1.5 text-sm text-red-600">
        {error}
      </p>

      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span className="mr-1 text-sm text-slate-500">Try</span>
        {PRESETS.map((num) => (
          <button
            key={num}
            type="button"
            onClick={() => setInput(String(num))}
            aria-pressed={input === String(num)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold tabular-nums transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 ${
              input === String(num)
                ? "bg-teal-900 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-teal-50 hover:text-teal-900"
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={handleCalculate}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-amber-400 px-5 py-3.5 font-bold text-teal-950 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-900"
        >
          <Play size={18} fill="currentColor" />
          Calculate
        </button>

        <button
          type="button"
          onClick={handleReset}
          aria-label="Reset to 7"
          title="Reset"
          className="rounded-2xl border-2 border-slate-200 px-4 text-slate-600 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        >
          <RotateCcw size={18} />
        </button>
      </div>
    </div>
  );
}
