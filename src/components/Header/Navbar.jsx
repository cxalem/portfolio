import React from "react";
import Home from "@SVGComponents/Home";
import Resources from "@SVGComponents/Resources";
import Login from "@SVGComponents/Login";
import Contact from "@SVGComponents/Contact";
import headerStyles from "./HeaderStyles/Header.module.css";

export default function Navbar() {
  return (
    <nav className={headerStyles.nav}>
      <ul className={headerStyles.ul}>
        <li className={headerStyles.li}>
          <Home className={headerStyles.icon} />
          <span className={headerStyles.span}>Portfolio</span>
        </li>
        <li className={headerStyles.li}>
          <Resources className={headerStyles.icon} />
          <span className={headerStyles.span}>Resources</span>
        </li>
        <li className={headerStyles.li}>
          <Contact className={headerStyles.icon} />
          <span className={headerStyles.span}>Contact</span>
        </li>
        <li className={headerStyles.li}>
          <Login className={headerStyles.icon} />
          <span className={headerStyles.span}>Login</span>
        </li>
      </ul>
    </nav>
  );
}
