import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginApi, setUserLoginAction } from "../../redux/reducers/userReducer";
export default function Login() {
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const navigate = useNavigate(); //hook chuyen huong trang
  const handleChange = (e) => {
    let { id, value } = e.target;
    setUserLogin({ ...userLogin, [id]: value });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    // const promise = axios({
    //   url: "https://shop.cyberlearn.vn/api/Users/signin",
    //   method: "POST",
    //   data: userLogin,
    // });
    // promise.then((res) => {
    //   alert(res.data.message);
    //   //sau khi dang nhap thanh cong dua du lieu len redux
    //   const action = setUserLogin(res.data.content);
    //   dispatch(action);
    //   // dispatch(setUserLogin(res.data.content));
    //   navigate("/profile");
    // });
    // promise.catch((err) => alert(err.response.data.message));
    /**
     * Có 2 dạng action
     * +Dạng 1: action: (type:'',payload:'data')
     * +Dạng 2: action: (dispatch) => {
     *  xử lí abc => có được dữ liệu
     * dispatch({type:'',payload:'data'})
     * }
     */
    e.preventDefault();
    const action = loginApi(userLogin);
    dispatch(action);
    navigate('/profile')
  };
  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
          <p>email</p>
          <input
            type="text"
            className="form-control"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <p>password</p>
          <input
            type="text"
            className="form-control"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <button className="btn btn-success" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
