// useCounter Hook을 사용하는 accommodate 함수 컴포넌트 만들기
import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

// 최대 count 개수
const MAX_CAPACITY = 10;

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  // 의존성 배열이 없는 useEffect Hook
  // 매번 렌더링 후에 실행됨 (컴포넌트가 처음 mount될 때, 상태나 props가 변경되어(업데이트) 다시 렌더링될 때마다 호출됨)
  useEffect(() => {
    console.log("======================");
    console.log("useEffect() is called.");
    console.log(`isFull: ${isFull}`);
  });

  // 의존성 배열([count])이 있는 useEffect Hook
  // 의존성 값(count)이 변경될 때만 실행됨
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY); // 조건식이 true이면 isFull이 true로 설정됨
    console.log(`Current count value: ${count}`);
  }, [count]);

  return (
    <div style={{ padding: 16 }}>
      <p>{`총 ${count}명 수용했습니다.`}</p>

      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>

      {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accommodate;

// 필요한 경우에만 useEffect가 실행되도록 관리하는 것이 중요

/* 입장 버튼을 클릭하여 count가 1 증가 
-> 이로 인해 컴포넌트 렌더링되고, 의존성 배열이 없는 useEffect Hook 호출됨
-> count 값이 변경되었으므로 의존성 배열이 있는 useEffect Hook 호출됨
 
정원이 가득차면(isFull이 true가 되면) 입장 버튼이 비활성화됨
-> isFull이 true로 변경되었기 때문에 컴포넌트 렌더링되므로 의존성 배열이 없는 useEffect Hook 호출됨
-> count 값은 변경되지 않았으므로 의존성 배열이 있는 useEffect Hook은 호출되지 않음
 
*/
