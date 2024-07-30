import React from "react";
import { NavLink } from "react-router-dom";
import "./MainHeader.css";
const MainHeader = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : undefined)}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) => (isActive ? "active" : undefined)}
                end
               >
                Product
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
