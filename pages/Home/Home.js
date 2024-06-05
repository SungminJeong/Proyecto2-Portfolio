import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
import { learns } from "../../data/learns";
import { LearnCard } from "../../components/LearnCard/LearnCard";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <article class="home_container">
      <section class="home">
        <p class="introduce">The creative Developer</p>
        <h1>Sungmin Jeong</h1>
        <p class="home-text">I'm a programmer based in Madrid, Germany, South Korea and also student.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quis minima fugit blanditiis placeat repellendus cum sequi dicta excepturi temporibus. Quod ipsa obcaecati laudantium ab modi dolor velit vitae magni.</p>
        <a href="#">Contact with me ✉️ </a>
      </section>

      <section class="textArea">
      <h1>First of all you need to learn JavaScript</h1>
      <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quis minima fugit blanditiis placeat repellendus cum sequi dicta excepturi temporibus. Quod ipsa obcaecati laudantium ab modi dolor velit vitae magni.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quis minima fugit blanditiis placeat repellendus cum sequi dicta excepturi temporibus. Quod ipsa obcaecati laudantium ab modi dolor velit vitae magni.
      </p>
      <div class="img-container"></div>
      </section>
    </article>
    `;
    const imgContainer = document.querySelector('.img-container');
    for(const learn of learns){
      const imgCon = document.createElement('div');
      imgCon.innerHTML = LearnCard(learn)
      imgContainer.appendChild(imgCon)
    }

};