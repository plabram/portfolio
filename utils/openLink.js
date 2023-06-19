import { Header } from "../components/Header/Header"

export const openLink = (id, func) => {

  const link = document.querySelector(id)
  link.addEventListener('click', (ev) => {
    ev.preventDefault();

  if (id = "#homelink" || "#projectslink" || "#experiencelink") {
    const header = document.querySelector("header")
    header.innerHTML = Header()
  }

    func()
  })
}