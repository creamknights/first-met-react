import React from "react";

const ThemeContext = React.createContext(); // context의 초기값을 별도로 설정하지 않았음 Provider에서 값을 설정할 예정
ThemeContext.displayName = "ThemeContext"; // 개발자 도구를 통해 context의 이름을 확인하기 위함

export default ThemeContext;
