import { cleanPage } from "../../utils/cleanPage"
import { experience } from "../../data/experience"
import { experienceCard } from "../../components/ExperienceCard/ExperienceCard"
import "./Experience.css"

export const renderExperience = () => {
  const main = document.querySelector("main")
  cleanPage(main)
  main.innerHTML = `
  <section id="experience">
  </section>
  `
  const experienceDiv = document.querySelector("#experience")
  for (const exp of experience) {
    const element = document.createElement("div")
    element.setAttribute("class", "experience-card")
    element.innerHTML = experienceCard(exp)
    experienceDiv.appendChild(element)
  }
}
