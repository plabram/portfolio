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
  <li><a href="https://www.linkedin.com/in/penelopelabram/">LinkedIn <span class="material-symbols-outlined">north_east</span></a></li>
  <li>GitHub <span class="material-symbols-outlined">north_east</span></li>
  <li>Stack Overflow <span class="material-symbols-outlined">north_east</span></li>
</ul>
<div class="contact-info">
<h1>Penelope Labram</h1>
  <h2>Full Stack Engineer</h2>
  </div>
</section>
  `
}