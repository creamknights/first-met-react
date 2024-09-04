import React, { useState } from "react";
// useCounter Hook.
// count 증감을 편리하게 할 수 있도록 함수를 제공하는 Hook.
// useCounter Hook을 사용하면 어떤 함수 컴포넌트에서든지 count 기능을 쉽게 사용할 수 있다.
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0)); // count 값이 0보다 작을 수 없게 보장

  return [count, increaseCount, decreaseCount];
}

export default useCounter;
