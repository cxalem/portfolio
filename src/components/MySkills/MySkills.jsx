import React from "react";
import SkillCard from "./SkillCard";
import skillsStyles from './MySkillsStyles/MySkills.module.css'

export default function MySkills({ skills }) {
  return (
    <div className={skillsStyles.mySkillsContainer}>
      <h3 className={skillsStyles.mySkills}>My Skills</h3>
      <div className={skillsStyles.skillsGrid}>
        {skills.map((skill) => {
          return (
            <SkillCard
              key={skill._id}
              skillTitle={skill.skill_title}
              skillIcon={skill.skill_icon}
            />
          );
        })}
      </div>
    </div>
  );
}
