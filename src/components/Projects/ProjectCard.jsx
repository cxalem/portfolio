import DevamIsotipo from "@SVGComponents/DevamIsotipo";
import React from "react";
import UUID from "uuidjs";
import projectsStyles from "./ProjectsStyles/Projects.module.css";

export default function ProjectCard({
  projectTitle,
  projectDescription,
  projectTechnologies,
}) {
  return (
    <div className={projectsStyles.projectCardContainer}>
      <div className={projectsStyles.titleContainer}>
        <DevamIsotipo />
        <h4 className={projectsStyles.projectTitle}>{projectTitle}</h4>
      </div>
      <div className={projectsStyles.tagsContainer}>
        {projectTechnologies.map((technology) => (
          <span className={projectsStyles.tag} key={UUID.generate()}>
            {technology}
          </span>
        ))}
      </div>
      <p className={projectsStyles.projectP}>{projectDescription}</p>
      <div className={projectsStyles.btnsContainer}>
          <button className={projectsStyles.gitHub}><span>View repo</span></button>
          <button className={projectsStyles.deploy}>Deploy</button>
      </div>
    </div>
  );
}
