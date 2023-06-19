import { Header } from "../../components/Header/Header"
import { cleanPage } from "../../utils/cleanPage"
import "./Experience.css"

export const renderExperience = () => {
  const header = document.querySelector("header")
  header.innerHTML = Header()
  const main = document.querySelector("main")
  cleanPage(main)
  main.innerHTML = `
  Some text here
  `
}