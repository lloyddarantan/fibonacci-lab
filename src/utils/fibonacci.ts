export interface FibonacciResult {
  number: bigint;
  sequence: bigint[];
  recursiveCalls: number;
}

export function calculateFibonacci(n: number): FibonacciResult {
  const memo = new Map<number, bigint>();

  let recursiveCalls = 0;

  function fibonacci(num: number): bigint {
    recursiveCalls++;

    // Base cases
    if (num === 0) return 0n;
    if (num === 1) return 1n;

    // Return previously calculated value
    if (memo.has(num)) {
      return memo.get(num)!;
    }

    // Recursive calculation
    const result =
      fibonacci(num - 1) + fibonacci(num - 2);

    memo.set(num, result);

    return result;
  }

  const number = fibonacci(n);

  const sequence = Array.from(
    { length: n + 1 },
    (_, index) => {
      if (index === 0) return 0n;
      if (index === 1) return 1n;

      return memo.get(index)!;
    }
  );

  return {
    number,
    sequence,
    recursiveCalls,
  };
}