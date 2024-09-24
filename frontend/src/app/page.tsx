'use client';

//hooks
import { useEffect, useState } from "react";

//estilização
import "./style.css";
import Link from "next/link";

//componentes
import Tech from "./components/Tech";
import CardTrabalho from "./components/CardTrabalho";

interface Project {
  link: string,
  description: string,
  techs: string[]
}

interface Work {
  position: string,
  startDate: Date,
  endDate: Date,
  description: string,
  techs: string[]
}

export default function Home() {

  const [currentWork, setCurrentWork] = useState<string>("senai");

  const [projects, setProjects] = useState<Project[]>([
    {
      link: "https://github.com/alexiamelhado18/nlw-journey-react",
      description: "Projeto desenvolvido na semana do NLW Journey",
      techs: ["React", "Tailwind", "TypeScript"]
    },
    {
      link: "https://github.com/alexiamelhado18/project-to-do-list",
      description: "Projeto referente a uma lista de tarefas",
      techs: ["React", "styled-components", "TypeScript"]
    },
    {
      link: "https://github.com/alexiamelhado18/desafios-codelandia/tree/main/desafio-01",
      description: "Projeto referente ao desafio 01 da comunidade codelandia",
      techs: ["Vue", "JavaScript"]
    },
    {
      link: "https://github.com/alexiamelhado18/desafios-codelandia/tree/main/desafio-02",
      description: "Projeto referente ao desafio 02 da comunidade codelandia",
      techs: ["Vue", "JavaScript"]
    },
    {
      link: "https://github.com/alexiamelhado18/desafios-codelandia/tree/main/desafio-03",
      description: "Projeto referente ao desafio 03 da comunidade codelandia",
      techs: ["Vue", "JavaScript"]
    },
    {
      link: "https://github.com/alexiamelhado18/frontADS2022TCC-casaleite",
      description: "TCC - e-commerce de materiais de construção civil",
      techs: ["Vue", "JavaScript", "Pyhton", "Flask", "MySQL"]
    }
  ]);

  const [works, setWorks] = useState<Work[]>([
    {
      position: "Instrutora de Formação Profissional II",
      startDate: new Date(),
      endDate: new Date(),
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione rem voluptatibus id ipsa natus adipisci obcaecati sit, sint excepturi? Dolorum temporibus unde aliquam repellendus aperiam quae aliquid? Totam, veniam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione rem voluptatibus id ipsa natus adipisci obcaecati sit, sint excepturi? Dolorum temporibus unde aliquam repellendus aperiam quae aliquid? Totam, veniam.",
      techs: ["React", "C#", "TS", "JS", "SQL Server", "MySQL", "Java", "Kotlin"]
    },
    {
      position: "Estágiaria de Desenvolvimento Web",
      startDate: new Date(),
      endDate: new Date(),
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione rem voluptatibus id ipsa natus adipisci obcaecati sit, sint excepturi? Dolorum temporibus unde aliquam repellendus aperiam quae aliquid? Totam, veniam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione rem voluptatibus id ipsa natus adipisci obcaecati sit, sint excepturi? Dolorum temporibus unde aliquam repellendus aperiam quae aliquid? Totam, veniam.",
      techs: ["HTML", "CSS", "JS", "RD Station", "Bootstrap", "FileZilla"]
    },
    {
      position: "Desenvolvedora Frontend Junior",
      startDate: new Date(),
      endDate: new Date(),
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione rem voluptatibus id ipsa natus adipisci obcaecati sit, sint excepturi? Dolorum temporibus unde aliquam repellendus aperiam quae aliquid? Totam, veniam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione rem voluptatibus id ipsa natus adipisci obcaecati sit, sint excepturi? Dolorum temporibus unde aliquam repellendus aperiam quae aliquid? Totam, veniam.",
      techs: ["HTML", "CSS", "JS", "Vue", "Vuex", "SQL Server", "C#", "Bootstrap", "Jquery"]
    },
  ]);

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
      <section id="section__sobremim">

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
      <section id="section__experiencia">
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
              <CardTrabalho
                description={works[0].description}
                endDate={works[0].endDate}
                position={works[0].position}
                startDate={works[0].startDate}
                techs={works[0].techs}
              />
            )
          }
          {
            currentWork === "cliqx" && (
              <CardTrabalho
                description={works[2].description}
                endDate={works[2].endDate}
                position={works[2].position}
                startDate={works[2].startDate}
                techs={works[2].techs}
              />
            )
          }
          {
            currentWork === "logos" && (
              <CardTrabalho
                description={works[1].description}
                endDate={works[1].endDate}
                position={works[1].position}
                startDate={works[1].startDate}
                techs={works[1].techs}
              />
            )
          }

        </div>
      </section>
      <section id="section__tecnologias">
        <div>
          <img src="/assets/images/png/js.png" alt="" title="js" />
          <img src="/assets/images/png/css.png" alt="" title="css" />
          <img src="/assets/images/png/sqlserver.png" alt="" title="sqlserver" />
          <img src="/assets/images/png/html.png" alt="" title="html" />
          <img src="/assets/images/png/less.png" alt="" title="less" />
          <img src="/assets/images/png/jquery.png" alt="" title="jquery" />
          <img src="/assets/images/png/react.png" alt="" title="react" />
          <img src="/assets/images/png/tailwind.png" alt="" title="tailwind" />
          <img src="/assets/images/png/bootstrap.png" alt="" title="bootstrap" />
          <img src="/assets/images/png/vue.png" alt="" title="vue" />
          <img src="/assets/images/png/mysql.png" alt="" title="mysql" />
          <img src="/assets/images/png/kotlin.png" alt="" title="kotlin" />
        </div>
      </section>
      <section id="section__projetos">
        <div>
          <h2>Projetos</h2>
          <div className="div__quadrado"></div>
        </div>
        <div>
          <div>
            {
              projects.map((project: Project, indexProject: Number) => {
                return <div key={indexProject.toString()}>
                  <div>
                    <h3>Nome do projeto</h3>
                    <Link href={project.link} target="_blank" title="Ir para o repositório">
                      <img src="/assets/images/png/setatopodireita.png" alt="" />
                    </Link>
                  </div>
                  <p>{project.description}</p>
                  <div>
                    {
                      project.techs.map((tech: string, indexTech: number) => {
                        return (
                          indexTech <= 2 && (
                            <Tech
                              key={indexTech}
                              name={tech}
                            />
                          ))
                      })
                    }
                    {
                      project.techs.length > 3 && <p>+{project.techs.length - 3}</p>
                    }

                  </div>
                </div>
              })
            }

          </div>
        </div>
      </section>
      <section id="section__contato">
        <div>
          <h2>Contato</h2>
          <div className="div__quadrado"></div>
        </div>
        <p>Obrigada por ter visitado meu portfólio. Caso queira entrar em contato comigo, acesse por esses canais abaixo.</p>
        <div>
          <Link href={"https://github.com/alexiamelhado18"} target="_blank">
            <img src="/assets/images/png/github.png" alt="Ícone do github" />
          </Link>
          <Link href={"https://www.linkedin.com/in/al%C3%A9xia-vit%C3%B3ria-b0ab08169/"} target="_blank">
            <img src="/assets/images/png/linkedin.png" alt="Ícone do linkedin" />
          </Link>
          <Link href={"mailto:alexiavitoria.dev@gmail.com"} target="_blank">
            <img src="/assets/images/png/email.png" alt="Ícone de e-mail" />
          </Link>
        </div>
      </section>
    </>
  );
}
