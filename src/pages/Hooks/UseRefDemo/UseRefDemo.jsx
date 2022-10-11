import React, { useState, useRef } from "react";
export default function UseRefDemo() {
  // const [userLogin, setUserLogin] = useState({
  //   userName: "",
  //   passWord: "",
  // });
  const userLoginRef = useRef({ username: "", password: "" });
  const [number, setNumber] = useState(1);
  //useRef: luu lai gia tri sau moi lan render
  //   console.log(userLogin);
  console.log(userLoginRef.current);
  const handleChange = (e) => {
    let { id, value } = e.target;
    userLoginRef.current[id] = value;
    // setUserLogin({ ...userLogin, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >+</button>
      <h3>Login</h3>
      <div className="form-group">
        <p>UseName</p>
        <input
          type="text"
          id="username"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p>PassWord</p>
        <input
          type="text"
          id="password"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success">Login</button>
      </div>
    </form>
  );
}
