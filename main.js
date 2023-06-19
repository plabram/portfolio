//reference portfolio: https://addison.design/

import './style.css'
import { openLink } from './utils/openLink'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { renderHome } from './pages/Home/Home'
import { renderExperience } from './pages/Experience/Experience'
import { renderProjects } from './pages/Projects/Projects'
import { renderContact } from './pages/Contact/Contact'

const nav = document.querySelector("nav")
nav.innerHTML = Navbar()
const header = document.querySelector("header")
header.innerHTML = Header()

openLink("#homelink", renderHome)
openLink("#experiencelink", renderExperience)
openLink("#projectslink", renderProjects)
openLink("#contactlink", renderContact)

renderHome()