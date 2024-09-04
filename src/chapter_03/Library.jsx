// Book 컴포넌트를 사용하는 상위 컴포넌트 Library
import React from "react";
import Book from "./Book";

// 3개의 Book 컴포넌트를 렌더링함
function Library(props) {
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
      <Book name="처음 만난 리액트" numOfPage={500} />
    </div>
  );
}

export default Library;
