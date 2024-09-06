import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContents";

function DarkOrLight(props) {
  const [theme, setTheme] = useState("light");

  // useCallback Hook
  // 불필요한 재렌더링 방지
  const toggleTheme = useCallback(() => {
    if (theme == "light") {
      setTheme("dark");
    } else if (theme == "dark") {
      setTheme("light");
    }
  }, [theme]); // 의존성 배열 [theme]에 따라, theme이 변경될 때만 toggleTheme 함수가 새로 생성

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;
