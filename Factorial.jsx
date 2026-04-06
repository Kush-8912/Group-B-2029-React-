import React, { useState, useMemo } from "react";

function FactorialCalculator({ number }) {
  const factorial = useMemo(() => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);

  return (
    <div>
      Factorial of {number} is {factorial}
    </div>
  );
}

export default FactorialCalculator;
