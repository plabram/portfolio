//reference portfolio: https://addison.design/

import './style.css'
import { openLink } from './utils/openLink'
import { Navbar } from './Navbar/Navbar'
import { renderHome } from './Pages/Home/Home'
import { renderExperience } from './Pages/Experience/Experience'
import {renderProjects } from './Pages/Projects/Projects'
import {renderContact } from './Pages/Contact/Contact'

const nav = document.querySelector("nav")
nav.innerHTML = Navbar()

openLink("#homelink", renderHome)
openLink("#experiencelink", renderExperience)
openLink("#projectslink", renderProjects)
openLink("#contactlink", renderContact)

renderHome()