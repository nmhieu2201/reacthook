//Component template : chứa các thành phần dùng chung
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderHome from "../Components/FooterHome/HeaderHome";
export default function HomeTemplates() {
  return (
    <>
      <HeaderHome />
      <div style={{ minHeight: "600px" }}>
        <Outlet />
      </div>
      <footer className="bg-dark text-white text-center p-5">Footer</footer>
    </>
  );
}
