import "./Navbar.css"

const links = ["Home", "Projects", "About", "Contact"]
let ulElement = document.createElement("ul")
const makeNavbar = links.forEach((i) => (ulElement.innerHTML += `<li>${i}</li>`))
export const Navbar = () => makeNavbar()

// export const Navbar = () => `
// <nav>
//   <ul>
//     <li><a href="home" id="homelink">${links[0]}</a></li>
//     <li><a href="project" id="projectlink">${links[1]}</a></li>
//     <li><a href="about" id="aboutlink">${links[2]}</a></li>
//     <li><a href="contact" id="contactlink">${links[3]}</a></li>
//   </ul>
// </nav>
// `