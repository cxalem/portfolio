import Image from "next/image";
import React, { useRef } from "react";
import heroStyles from "./HeroStyles/Hero.module.css";
import lottie from "lottie-web";
import { useEffect } from "react";

export default function Hero() {
  const animation = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animation.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("@images/hero-animation.json"),
    });
  })

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
      <div ref={animation} className={heroStyles.heroImg}>
      </div>
    </div>
  );
}
