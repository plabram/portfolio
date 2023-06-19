
import { cleanPage } from "../utils/cleanPage"
import "./Contact.css"

export const renderContact = () => {
  const main = document.querySelector("main")
  cleanPage(main)
  main.innerHTML = `
  contact stuff
  `
}