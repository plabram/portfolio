//reference portfolio: https://addison.design/

import './style.css'
import { openLink } from './utils/openLink'
import { Navbar } from './navbar/Navbar'
import { renderHome } from './Home/Home'

const nav = document.querySelector("nav")
nav.innerHTML = Navbar()

openLink("#homelink", renderHome)

renderHome()