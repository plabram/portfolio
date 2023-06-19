import { cleanPage } from "../utils/cleanPage"
import "./Projects.css"

export const renderProjects = () => {
  const main = document.querySelector("main")
  cleanPage(main)
  main.innerHTML = `
  Projects here
  `

}