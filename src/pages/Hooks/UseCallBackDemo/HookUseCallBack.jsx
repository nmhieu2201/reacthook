import React, { useState, useCallback } from "react";
import Comment from "./Comment";
export default function HookUseCallBack() {
  let [like, setLike] = useState(1);
  let [number, setNumber] = useState(2);
  const renderLike = () => {
    return `Bạn đã thả ${like}`;
  };
  const callBackRenderLike = useCallback(renderLike, [like]);
  return (
    <div className="m-5">
      Like: {like} ♥
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      <Comment renderLike={callBackRenderLike} />
    </div>
  );
}
