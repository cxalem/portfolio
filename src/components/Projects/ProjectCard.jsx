import DevamIsotipo from "@SVGComponents/DevamIsotipo";
import Link from "next/link";
import React from "react";
import UUID from "uuidjs";
import projectsStyles from "./ProjectsStyles/Projects.module.css";

export default function ProjectCard({
  projectTitle,
  projectDescription,
  projectTechnologies,
  repo,
  deploy
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
          <Link href={repo}>
            <a target="_blank">
              <button className={projectsStyles.gitHub}><span>View Repo</span></button>
            </a>
          </Link>
          <Link href={deploy}>
            <a target="_blank">
              <button className={projectsStyles.deploy}>Deploy</button>
            </a>
          </Link>
      </div>
    </div>
  );
}
