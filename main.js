//reference portfolio: https://addison.design/

import './style.css'
import { openLink } from './utils/openLink'
import { Navbar } from './navbar/Navbar'
import { Home } from './Home/Home'

const body = document.querySelector("body")
body.innerHTML = Navbar()

openLink("#homelink", Home)

// Home()

// export const openLink = (id, page) => {
//   const link = document.querySelector(id)
//   link.addEventListener('click', (ev) => {
//     ev.preventDefault();
//     const linkHref = ev.target.href;
//     page()
//     console.log('El link apunta a:', linkHref );
//   })
// }