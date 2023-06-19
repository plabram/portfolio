import { cleanPage } from "../../utils/cleanPage"
import "./Contact.css"

export const renderContact = () => {
  const main = document.querySelector("main")
  const header = document.querySelector("header")
  cleanPage(main)
  cleanPage(header)
  main.innerHTML = `
  <section class="contactlist">
  <ul>
  <li><a href="https://www.linkedin.com/in/penelopelabram/" target="_blank">LinkedIn <span class="material-symbols-outlined">north_east</span></a></li>
  <li><a href="https://github.com/plabram/" target="_blank">GitHub <span class="material-symbols-outlined">north_east</span></a></li>
  <li><a href="https://stackoverflow.com/users/10071648/fpl" target="_blank">Stack Overflow <span class="material-symbols-outlined">north_east</span></a></li>
</ul>
<div class="contact-info">
<h1>Penelope Labram</h1>
  <h2>Full Stack Engineer</h2>
  </div>
</section>
  `
}