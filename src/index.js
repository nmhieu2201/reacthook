import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplates from "./templates/HomeTemplates";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import UseStateDemo from "./pages/Hooks/UseStateDemo/UseStateDemo";
import UseEffectDidMountDemo from "./pages/Hooks/UseEffectDemo/UseEffectDidMountDemo";
import UseEffectWillUnmountDemo from "./pages/Hooks/UseEffectDemo/UseEffectWillUnmountDemo";
import UseEffectDidUpdate from "./pages/Hooks/UseEffectDemo/UseEffectDidUpdate";
import HookUseCallBack from "./pages/Hooks/UseCallBackDemo/HookUseCallBack";
import UseMemoDemo from "./pages/Hooks/UseMemoDemo/UseMemoDemo";
import UseRefDemo from "./pages/Hooks/UseRefDemo/UseRefDemo";
import UseReduxDemo from "./pages/Hooks/UseRedux/UseReduxDemo";
//setupredux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import Profile from "./pages/Profile/Profile";
import Detail from "./pages/Detail/Detail";
import Search from "./pages/Search/Search";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplates />}>
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="usestatedemo" element={<UseStateDemo />}></Route>
          <Route
            path="useeffectdidmountdemo"
            element={<UseEffectDidMountDemo />}
          ></Route>
          <Route
            path="useeffectunmout"
            element={<UseEffectWillUnmountDemo />}
          ></Route>
          <Route
            path="useeffectdidupdate"
            element={<UseEffectDidUpdate />}
          ></Route>
          <Route path="hookusecallback" element={<HookUseCallBack />}></Route>
          <Route path="usememodemo" element={<UseMemoDemo />}></Route>
          <Route path="userefdemo" element={<UseRefDemo />}></Route>
          <Route path="useredux" element={<UseReduxDemo />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail />}></Route>
          </Route>
          <Route path="search" element={<Search />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
