import React from "react";
import SkillCard from "./SkillCard";
import skillsStyles from './MySkillsStyles/MySkills.module.css'

export default function MySkills({ skills }) {
  return (
    <div className={skillsStyles.mySkillsContainer}>
      <h3 className={skillsStyles.mySkills}>My Skills</h3>
      <div className={skillsStyles.skillsGrid}>
        {skills.map(({skill_title, skill_icon, _id}) => {
          return (
            <SkillCard
              key={_id}
              skillTitle={skill_title}
              skillIcon={skill_icon}
            />
          );
        })}
      </div>
    </div>
  );
}
