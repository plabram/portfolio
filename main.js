//reference portfolio: https://addison.design/

import './style.css'
import { openLink } from './utils/openLink'
import { Navbar } from './navbar/Navbar'
import { renderHome } from './Home/Home'
import { renderExperience } from './Experience/Experience'
import {renderProjects } from './Projects/Projects'

const nav = document.querySelector("nav")
nav.innerHTML = Navbar()

openLink("#homelink", renderHome)
openLink("#experiencelink", renderExperience)
openLink("#projectslink", renderProjects)

renderHome()