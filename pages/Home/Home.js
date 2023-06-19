import { Header } from "../../components/Header/Header"
import { cleanPage } from "../../utils/cleanPage"
import "./Home.css"

export const renderHome = () => {
  const main = document.querySelector("main")
  cleanPage(main)
  main.innerHTML = `
  <section class="home">
  <h1>Penelope Labram</h1>
  <h2>Full Stack Engineer</h2>
  <img src="./assets/photo.png" />
  <p>Full stack engineer and ex-product person with over a decade's experience in building technical solutions.</p>
  </section>
  `
}