import { cleanPage } from "../../utils/cleanPage";
import "./Projects.css";
import { projects } from "../../data/projects";
import { projectCard } from "../../components/ProjectCard/ProjectCard";

export const renderProjects = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
  <section id="projects">
  </section>
  `;
  const projectsDiv = document.querySelector("#projects");
  for (const project of projects) {
    const element = document.createElement("element");
    element.innerHTML = projectCard(project);
    projectsDiv.appendChild(element);
  }
};

// const container = document.querySelector(".projects-container")
//   for (const project of projects) {
//     const figure = document.createElement("figure")
//     figure.innerHTML = ProjectCard(project)
//     container.appendChild(figure)
//   }
