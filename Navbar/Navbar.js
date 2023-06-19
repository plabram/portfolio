import "./Navbar.css"

const links = ["Home", "Projects", "Experience", "Contact"]

export const Navbar = () => `
  <ul>
    <li><a href="${links[0].toLowerCase()}" id="${links[0].toLowerCase()}link">${links[0]}</a></li>
    <li><a href="${links[1].toLowerCase()}" id="${links[1].toLowerCase()}link">${links[1]}</a></li>
    <li><a href="${links[2].toLowerCase()}" id="${links[2].toLowerCase()}link">${links[2]}</a></li>
    <li><a href="${links[3].toLowerCase()}" id="${links[3].toLowerCase()}link">${links[3]}</a></li>
  </ul>
`