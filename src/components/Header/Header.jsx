import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import headerStyles from "./HeaderStyles/Header.module.css";
import Devam from "@SVGComponents/Devam";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <span className={headerStyles.img}>
        <Devam width="152px" height="35px" viewBox="37 -2 30 30" />
      </span>
      <Navbar />
    </header>
  );
}
