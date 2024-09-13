'use client';

import { useEffect, useState } from "react";
//estilização
import "./style.css";

export default function Home() {

  const [currentWork, setCurrentWork] = useState<string>("senai");

  function animateForClickedWork(current: string) {

    setCurrentWork(current);

    let elementWorkLogos = document.getElementsByClassName("div__logos")[0];

    let elementWorkCliqx = document.getElementsByClassName("div__cliqx")[0];

    let elementWorkSenai = document.getElementsByClassName("div__senai")[0];

    switch (current) {
      case "logos":
        elementWorkLogos.classList.add("animation__surgir");
        elementWorkCliqx.classList.remove("animation__surgir");
        elementWorkSenai.classList.remove("animation__surgir");

        break;
      case "cliqx":
        elementWorkCliqx.classList.add("animation__surgir");
        elementWorkLogos.classList.remove("animation__surgir");
        elementWorkSenai.classList.remove("animation__surgir");

        break;
      case "senai":
        elementWorkSenai.classList.add("animation__surgir");
        elementWorkLogos.classList.remove("animation__surgir");
        elementWorkCliqx.classList.remove("animation__surgir");

        break;
      default:
        break;
    }
  }

  return (
    <>
      <section className="section__sobremim">

        <div>
          <h2>Sobre mim</h2>
          <div className="div__quadrado"></div>

        </div>
        <div>
          <div className="div__foto">
            <div>
              <img src="/assets/images/svg/Arredondado.svg" alt="Foto com dois elementos redondos com cores laranjas claro e escuro" />
              <img src="/assets/images/png/alexia.png" alt="Foto de uma mulher branca de cabelos cacheados da cor marrom escuro, com oculos de grau e sorrindo" />
            </div>

            <div>
              <img src="/assets/images/svg/Seta esquerda com volta.svg" alt="" />
              <p>Comunicativa</p>
            </div>

            <div>
              <img src="/assets/images/svg/Seta direita.svg" alt="" />
              <p>Técnica em Desenvolvimento de sistemas</p>
            </div>

            <div>
              <img src="/assets/images/svg/Seta direita com volta.svg" alt="" />
              <p>Graduada em ADS</p>
            </div>

          </div>
          <div className="div__texto">
            <span>Eu sou <span>Aléxia,</span></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione rem voluptatibus id ipsa natus adipisci obcaecati sit, sint excepturi? Dolorum temporibus unde aliquam repellendus aperiam quae aliquid? Totam, veniam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione rem voluptatibus id ipsa natus adipisci obcaecati sit, sint excepturi? Dolorum temporibus unde aliquam repellendus aperiam quae aliquid? Totam, veniam.</p>
          </div>
        </div>
      </section>
      <section className="section__experiencia">
        <div>
          <h2>Experiência</h2>
          <div className="div__quadrado"></div>

        </div>

        <div>
          <header>
            <div>
              <button type="button" onClick={() => animateForClickedWork("logos")}>
                <h3>Logos</h3>
                <div className="div__logos"></div>
              </button>

              <button type="button" onClick={() => animateForClickedWork("cliqx")}>
                <h3>Cliqx</h3>
                <div className="div__cliqx"></div>
              </button>

              <button type="button" onClick={() => animateForClickedWork("senai")}>
                <h3>SENAI</h3>
                <div className="div__senai animation__surgir"></div>
              </button>
            </div>
          </header>
          {
            currentWork === "senai" && (
              <>
                <div>
                  <h2>Instrutora de Formação Profissional II</h2>

                  <span>dez/2022 — Atual</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione rem voluptatibus id ipsa natus adipisci obcaecati sit, sint excepturi? Dolorum temporibus unde aliquam repellendus aperiam quae aliquid? Totam, veniam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione rem voluptatibus id ipsa natus adipisci obcaecati sit, sint excepturi? Dolorum temporibus unde aliquam repellendus aperiam quae aliquid? Totam, veniam.</p>

                <div>
                  <div>
                    <span>React</span>
                  </div>
                  <div>
                    <span>React</span>
                  </div>
                  <div>
                    <span>React</span>
                  </div>
                  <div>
                    <span>React</span>
                  </div>
                  <div>
                    <span>React</span>
                  </div>
                </div>
              </>
            )
          }

        </div>
      </section>
      <section className="section__tecnologias">
        <div>
          <img src="/assets/images/png/js.png" alt="" />
          <img src="/assets/images/png/css.png" alt="" />
          <img src="/assets/images/png/sqlserver.png" alt="" />
          <img src="/assets/images/png/html.png" alt="" />
          <img src="/assets/images/png/less.png" alt="" />
          <img src="/assets/images/png/jquery.png" alt="" />
          <img src="/assets/images/png/react.png" alt="" />
          <img src="/assets/images/png/tailwind.png" alt="" />
          <img src="/assets/images/png/bootstrap.png" alt="" />
          <img src="/assets/images/png/vue.png" alt="" />
          <img src="/assets/images/png/mysql.png" alt="" />
          <img src="/assets/images/png/kotlin.png" alt="" />
        </div>
      </section>
    </>
  );
}
