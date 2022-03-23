import React from "react";
import ProjectCard from "./ProjectCard";
import projectsStyles from "./ProjectsStyles/Projects.module.css";

export default function Projects({ projects }) {
  return (
    <div className={projectsStyles.myProjectsContainer}>
      <h3 className={projectsStyles.myProjects}>My Projects</h3>
      <div className={projectsStyles.projectsDiv}>
        {projects.map(
          ({ project_title, project_description, project_technologies, _id, repo, deploy }) => {
            return (
              <ProjectCard
                key={_id}
                projectTitle={project_title}
                projectDescription={project_description}
                projectTechnologies={project_technologies}
                repo={repo}
                deploy={deploy}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
