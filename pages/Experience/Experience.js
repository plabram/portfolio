import { cleanPage } from "../../utils/cleanPage"
import "./Experience.css"

export const renderExperience = () => {
  const main = document.querySelector("main")
  cleanPage(main)
  main.innerHTML = `
  Some text here
  `
}