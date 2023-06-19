import "./Navbar.css"

const links = ["Home", "Projects", "Experience", "Contact"]
// let empty = document.createElement("ul")
// const makeNavbar = links.forEach((i) => (empty.innerHTML += `<li>${i}</li>`))
// export const Navbar = () => makeNavbar()

export const Navbar = () => `
  <ul>
    <li><a href="home" id="homelink">${links[0]}</a></li>
    <li><a href="projects" id="projectslink">${links[1]}</a></li>
    <li><a href="experience" id="experiencelink">${links[2]}</a></li>
    <li><a href="contact" id="contactlink">${links[3]}</a></li>
  </ul>
`