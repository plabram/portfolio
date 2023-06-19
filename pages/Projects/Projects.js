import { Header } from "../../components/Header/Header"
import { cleanPage } from "../../utils/cleanPage"
import "./Projects.css"

export const renderProjects = () => {
  const header = document.querySelector("header")
  header.innerHTML = Header()
  const main = document.querySelector("main")
  cleanPage(main)
  main.innerHTML = `
  Projects here
  `
}