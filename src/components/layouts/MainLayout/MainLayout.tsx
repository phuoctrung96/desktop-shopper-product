import React from "react";
import { Outlet } from "react-router-dom";
import "./styles.scss";

export const MainLayout: React.FC<any> = () => {
  return (
    <div className="mainLayout">
      <div className="mainLayout__layoutContainer">
        <div className="mainLayout__layoutContainer-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
