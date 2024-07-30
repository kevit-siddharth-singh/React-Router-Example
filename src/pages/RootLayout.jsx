import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import  "./RootLayout.module.css";
const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
