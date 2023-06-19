
import { cleanPage } from "../../utils/cleanPage"
import "./Contact.css"

export const renderContact = () => {
  const main = document.querySelector("main")
  const header = document.querySelector("header")
  cleanPage(main)
  cleanPage(header)
  main.innerHTML = `
  <ul class="contactlist">
  <li><a href="home" id="homelink" class="contactlink">Home</a></li>
  <li><a href="projects" id="projectslink" class="contactlink">Projects</a></li>
  <li><a href="experience" id="experiencelink" class="contactlink">Experience</a></li>
  <li><a href="contact" id="contactlink" class="contactlink">Contact</a></li>
</ul>
  `
}