import React, { useState,useEffect } from "react";
let counter = 60;
let timeout = {};
export default function UseEffectWillUnmountDemo() {
  const [count, setCount] = useState(60);
  const setCountDown = () => {
    // timeout = setInterval(() => {
    //   counter -- ;
    //   // console.log(123);
    // }, 1000);
  };
  useEffect(() => {
    return () => {
      clearInterval(timeout);
      //Hàm này sẽ tự động kích hoajt khi dependency(tham số thứ 2 của hàm thay đổi) hoặc component này mất khỏi giao diện(wilunmout)
    };
  }, []);
  return (
    <div className="container">
      <h3>Count: {counter}</h3>
      <button
        className="btn btn-dark"
        onClick={() => {
          // setCountDown();
        }}
      >
        Start
      </button>
    </div>
  );
}
