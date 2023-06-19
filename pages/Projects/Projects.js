import { cleanPage } from "../../utils/cleanPage"
import "./Projects.css"
import { projects } from "../../data/projects"
import { projectCard } from "../../components/ProjectCard/ProjectCard"

export const renderProjects = () => {
  const main = document.querySelector("main")
  cleanPage(main)
  main.innerHTML = `
  <section id="projects">
  </section>
  `
  const projectsDiv = document.querySelector("#projects")
  for (const project of projects) {
    const element = document.createElement("div")
    element.setAttribute("class", "project-card")
    element.innerHTML = projectCard(project)
    projectsDiv.appendChild(element)
  }
}
