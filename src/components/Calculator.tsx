import { useState } from "react";
import {
  Calculator as CalculatorIcon,
  Play,
  RotateCcw,
} from "lucide-react";

import {
  calculateFibonacci,
  type FibonacciResult,
} from "../utils/fibonacci";

interface CalculatorProps {
  onCalculate: (result: FibonacciResult, n: number) => void;
}

export default function Calculator({
  onCalculate,
}: CalculatorProps) {
  const [input, setInput] = useState("7");
  const [error, setError] = useState("");

  function handleCalculate() {
    const n = Number(input);

    if (input.trim() === "") {
      setError("Please enter a number.");
      return;
    }

    if (!Number.isInteger(n) || n < 0) {
      setError("Enter a nonnegative whole number.");
      return;
    }

    if (n > 100) {
      setError("Please enter a number from 0 to 100.");
      return;
    }

    setError("");

    const result = calculateFibonacci(n);

    onCalculate(result, n);
  }

  function handleReset() {
    setInput("7");
    setError("");
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
          <CalculatorIcon size={24} />
        </div>

        <div>
          <h2 className="text-xl font-bold">
            Fibonacci Calculator
          </h2>
          <p className="text-sm text-slate-500">
            Enter a number to calculate its Fibonacci value.
          </p>
        </div>
      </div>

      <label className="mb-2 block text-sm font-semibold">
        Enter a nonnegative integer (n)
      </label>

      <input
        type="number"
        min="0"
        max="100"
        step="1"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleCalculate();
        }}
        placeholder="Example: 7"
        className="w-full rounded-xl border border-slate-300 px-4 py-4 text-lg outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {[5, 7, 10, 15, 20].map((num) => (
          <button
            key={num}
            onClick={() => setInput(String(num))}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm transition hover:border-blue-500 hover:bg-blue-50"
          >
            {num}
          </button>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={handleCalculate}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <Play size={18} />
          Calculate
        </button>

        <button
          onClick={handleReset}
          className="rounded-xl border border-slate-300 px-4 py-3 transition hover:bg-slate-100"
          title="Reset"
        >
          <RotateCcw size={18} />
        </button>
      </div>
    </div>
  );
}