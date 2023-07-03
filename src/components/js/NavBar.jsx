import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBarCursor.css";

const NavBar = () => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.clientX - 20);
    setCursorY(e.clientY - 20);
  });

  return (
    <nav>
      <NavLink className="navlink" to="/menu">
        Menu
      </NavLink>
      <NavLink className="navlink" to="/chefs">
        Our Chefs
      </NavLink>
      <NavLink className="navlink" to="/locations">
        Our Locations
      </NavLink>
      <NavLink className="navlink" to="/clients">
        Our Clients
      </NavLink>
      <div
        className="cursor"
        style={{ left: cursorX + "px", top: cursorY + "px" }}
      ></div>
    </nav>
  );
};

export default NavBar;
