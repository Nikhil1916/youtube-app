import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";

const Body = () => {
  const menuState = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex">
      {menuState ? <Sidebar /> : ""}
      <Outlet />
    </div>
  );
};

export default Body;
