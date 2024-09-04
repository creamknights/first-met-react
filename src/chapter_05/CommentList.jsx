import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "김민정",
    comment: "su su su supernova~.",
  },
  {
    name: "박원빈",
    comment: "119 119 save my life~.",
  },
  {
    name: "정성찬",
    comment: "boom, boom, bass.",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
