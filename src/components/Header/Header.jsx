import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import headerStyles from "./HeaderStyles/Header.module.css";
import Devam from "@SVGComponents/Devam";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.img}>
        <Devam fill="#282828" width="152px" height="35px" viewBox="37 -2 30 30" />
      </div>
      <Navbar />
    </header>
  );
}
