import React from "react";
import ProjectCard from "./ProjectCard";
import projectsStyles from "./ProjectsStyles/Projects.module.css";

export default function Projects({ projects }) {
  return (
    <div className={projectsStyles.myProjectsContainer}>
      <h3 className={projectsStyles.myProjects}>My Projects</h3>
      {projects.map(
        ({ project_title, project_description, project_technologies, _id }) => {
          return (
            <ProjectCard
              key={_id}
              projectTitle={project_title}
              projectDescription={project_description}
              projectTechnologies={project_technologies}
            />
          );
        }
      )}
    </div>
  );
}
