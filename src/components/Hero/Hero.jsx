import Image from "next/image";
import React from "react";
import heroStyles from "./HeroStyles/Hero.module.css";

export default function Hero() {
  return (
    <div className={heroStyles.hero}>
      <div className={heroStyles.infoHero}>
        <div className={heroStyles.infoContainer}>
          <h1 className={heroStyles.heroH1}>Alejandro <span>José Mena</span></h1>
          <span className={heroStyles.heroSpan}>
            Frontend Developer | ReactJS | Next.js
          </span>
        </div>
        <button className={heroStyles.contactMeBtn}>Contact me!</button>
      </div>
      <div className={heroStyles.heroImg}>
        <Image
          src={"/images/hero-img.png"}
          width={330}
          height={240}
          alt="Alejandro José | Devam"
        />
      </div>
    </div>
  );
}
