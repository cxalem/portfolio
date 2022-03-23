import Image from "next/image";
import React from "react";
import aboutMeStyles from "./AboutMeStyles/AboutMe.module.css";

export default function AboutMe() {
  return (
    <section className={aboutMeStyles.aboutMeSection}>
      <div className={aboutMeStyles.aboutMeInfo}>
        <h3 className={aboutMeStyles.aboutMe}>About me</h3>
        <p className={aboutMeStyles.aboutMeP}>
          I believe in communication as an amplifier of knowledge. I am
          passionate about technology and personal growth. I always go beyond, I
          believe little in the impossible and I am not afraid to work to make
          the world a better place.
        </p>
      </div>
      <div className={aboutMeStyles.aboutMeImg}>
        <Image
          src="/images/aboutme.png"
          width={423}
          height={240}
          alt="About Me"
        />
      </div>
    </section>
  );
}
