import { cleanPage } from "../../utils/cleanPage"
import "./Home.css"

export const renderHome = () => {
  const main = document.querySelector("main")
  cleanPage(main)
  main.innerHTML = `
  <section class="home">
  <div class="home-info">
  <h1>Penelope Labram</h1>
  <h2>Full Stack Engineer</h2>
  </div>
  <img src="./assets/photo.png" alt="Penelope, Full Stack Engineer" />
  <div class="quote">
    <q><p>Here is a quote about Penelope.</p></q>
    <p>Team Member, ABC Company</p>
  </div>
  <div>
  <p>Full stack engineer and ex-product person with over a decade's experience building technical solutions.</p>
  </section>
  </div>
  `
}
