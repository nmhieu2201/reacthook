import React, { memo } from "react";
const Comment = (props) => {
  console.log("comment");
  return (
    <div>
      <textarea></textarea> <br />
      Child Like: {props.renderLike()} <br />
      <button>Gửi</button>
    </div>
  );
};
export default memo(Comment);
