import Image from "next/image";
import React from "react";
import skillsStyles from './MySkillsStyles/MySkills.module.css'

export default function SkillCard({ skillTitle, skillIcon }) {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className={skillsStyles.skillContainer}>
      <div className={skillsStyles.iconContainer}>
        <Image
          loader={myLoader}
          src={`${skillIcon}`}
          width={60}
          height={45}
          alt="Skill Icon"
        />
      </div>
      <h4 className={skillsStyles.skillTitle}>{skillTitle}</h4>
    </div>
  );
}
