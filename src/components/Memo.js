import React, { useState, useMemo } from "react";

function FactorialCalculator() {
  const [number, setNumber] = useState('');

  
  const factorial = (n) => {
    if (n < 0) return 0;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  };
 const result = useMemo(() => factorial(number), [number]);
 return (
    <div>
      <h1>Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        min="0"
      />
      <p>
        Factorial of {number} is: <strong>{result}</strong>
      </p>
    </div>
  );
}

export default FactorialCalculator;
