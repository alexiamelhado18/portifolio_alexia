'use client';

//hooks
import { useLayoutEffect, useState } from "react";

//estilização
import "./style.css";

//componentes
import Tech from "./components/CardTecnologia";
import CardTrabalho from "./components/CardTrabalho";
import Link from "next/link";
import Image from "next/image";

//imagens
import imgArredondado from "../../public/assets/images/svg/Arredondado.svg";
import imgAlexia from "../../public/assets/images/svg/alexia.svg";
import imgSetaEsquerdaComVolta from "../../public/assets/images/svg/Seta esquerda com volta.svg";
import imgSetaDireitaComVolta from "../../public/assets/images/svg/Seta direita com volta.svg";
import imgSetaDireita from "../../public/assets/images/svg/Seta direita.svg";
import imgJs from "../../public/assets/images/svg/js.svg";
import imgCss from "../../public/assets/images/svg/css.svg";
import imgSqlServer from "../../public/assets/images/svg/sqlserver.svg";
import imgHtml from "../../public/assets/images/svg/html.svg";
import imgLess from "../../public/assets/images/svg/less.svg";
import imgJquery from "../../public/assets/images/svg/jquery.svg";
import imgReact from "../../public/assets/images/svg/react.svg";
import imgTailwind from "../../public/assets/images/svg/tailwind.svg";
import imgBootstrap from "../../public/assets/images/svg/bootstrap.svg";
import imgVue from "../../public/assets/images/svg/vue.svg";
import imgMySql from "../../public/assets/images/svg/mysql.svg";
import imgKotlin from "../../public/assets/images/svg/kotlin.svg";
import imgGithub from "../../public/assets/images/svg/github.svg";
import imgLinkedin from "../../public/assets/images/svg/linkedin.svg";
import imgEmail from "../../public/assets/images/svg/email.svg";
import imgSetaTopoDireita from "../../public/assets/images/svg/setatopodireita.svg";

interface Project {
  name: string,
  link: string,
  description: string,
  techs: string[]
}

interface Work {
  position: string,
  startDate: Date,
  endDate: Date | string,
  description: string,
  techs: string[]
}

export default function Home() {

  const [currentWork, setCurrentWork] = useState<string>("senai");

  const [projects, setProjects] = useState<Project[]>([
    {
      name: "Planejador de viagem",
      link: "https://github.com/alexiamelhado18/nlw-journey-react",
      description: "Projeto desenvolvido na semana do NLW Journey",
      techs: ["React", "Tailwind", "TypeScript"]
    },
    {
      name: "To Do List",
      link: "https://github.com/alexiamelhado18/project-to-do-list",
      description: "Projeto referente a uma lista de tarefas",
      techs: ["React", "styled-components", "TypeScript"]
    },
    {
      name: "Blog",
      link: "https://github.com/alexiamelhado18/desafios-codelandia/tree/main/desafio-01",
      description: "Projeto referente ao desafio 01 da comunidade codelandia",
      techs: ["Vue", "JavaScript"]
    },
    {
      name: "JordanShoes",
      link: "https://github.com/alexiamelhado18/desafios-codelandia/tree/main/desafio-02",
      description: "Projeto referente ao desafio 02 da comunidade codelandia",
      techs: ["Vue", "JavaScript"]
    },
    {
      name: "TechBlog",
      link: "https://github.com/alexiamelhado18/desafios-codelandia/tree/main/desafio-03",
      description: "Projeto referente ao desafio 03 da comunidade codelandia",
      techs: ["Vue", "JavaScript"]
    },
    {
      name: "E-lance",
      link: "https://github.com/alexiamelhado18/frontADS2022TCC-casaleite",
      description: "TCC - e-commerce de materiais de construção civil",
      techs: ["Vue", "JavaScript", "Pyhton", "Flask", "MySQL"]
    }
  ]);

  const [works, setWorks] = useState<Work[]>([
    {
      position: "Instrutora de Formação Profissional II",
      startDate: new Date(),
      endDate: "Atual",
      description: "Atualmente, sou instrutora na unidade 1.34 da escola SENAI de Informática. Minhas responsabilidades incluem ministrar aulas teóricas e práticas, desenvolver planos de aula, orientar projetos, avaliar o desempenho dos alunos e oferecer suporte. Além disso, mantenho-me atualizada com as tecnologias e tendências do setor, colaboro com a equipe pedagógica e preparo os alunos para o mercado de trabalho, promovendo tanto habilidades técnicas quanto comportamentais.",
      techs: ["React", "C#", "TS", "JS", "SQL Server", "MySQL", "Java", "Kotlin"]
    },
    {
      position: "Estágiaria de Desenvolvimento Web",
      startDate: new Date(2020, 6),
      endDate: new Date(2020, 10),
      description: "Durante o estágio de cinco meses, atuei na criação de novas telas, incluindo sua estruturação, estilização, responsividade e funcionalidade. Também realizei a manutenção de telas já existentes, fiz deploys manuais utilizando o FileZilla e integrei componentes do RD Station na aplicação.",
      techs: ["HTML", "CSS", "JS", "RD Station", "Bootstrap", "FileZilla"]
    },
    {
      position: "Desenvolvedora Frontend Junior",
      startDate: new Date(2020, 11),
      endDate: new Date(2022, 11),
      description: "Na Cliqx, comecei como Desenvolvedora Full Stack e, após um ano, fui promovida a Desenvolvedora Front-end Júnior. Durante esse período, participei de três projetos importantes para a Pernambucanas. Em um desses projetos, atuei com maior destaque no frontend, utilizando Vue e Vuex, seguindo os padrões do mercado. Essa experiência foi fundamental para o meu desenvolvimento.",
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

  function scrollReveal() {
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");

        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");

    hiddenElements.forEach((element) => intersectionObserver.observe(element));
  }

  useLayoutEffect(() => {
    scrollReveal();
  }, [])

  return (
    <>
      <section id="section__sobremim">

        <div>
          <h2>Sobre mim</h2>
          <div className="div__quadrado"></div>

        </div>
        <div>
          <div className="div__foto hidden">
            <div>
              <Image
                src={imgArredondado}
                alt="Foto com dois elementos redondos com cores laranjas claro e escuro"
              />
              <Image
                src={imgAlexia}
                alt="Foto de uma mulher branca de cabelos cacheados da cor marrom escuro, com oculos de grau e sorrindo"
              />
            </div>

            <div>
              <Image
                src={imgSetaEsquerdaComVolta}
                alt=""
              />
              <p>Comunicativa</p>
            </div>

            <div>
              <Image
                src={imgSetaDireita}
                alt=""
              />
              <p>Técnica em Desenvolvimento de sistemas</p>
            </div>

            <div>
              <Image
                src={imgSetaDireitaComVolta}
                alt=""
              />
              <p>Graduada em ADS</p>
            </div>

          </div>
          <div className="div__texto hidden">
            <span>Eu sou <span>Aléxia,</span></span>
            <p>Atuo na área de T.I há cerca de quatro anos. Sou formada tecnicamente em Desenvolvimento de Sistemas e também graduada na mesma área. Tenho uma paixão por criar interfaces de usuário com foco em estrutura, estilização, responsividade e funcionalidade. Atualmente, estou me dedicando aos estudos de animação e aprimorando meu inglês.</p>
          </div>
        </div>
      </section>
      <section id="section__experiencia">
        <div>
          <h2>Experiência</h2>
          <div className="div__quadrado"></div>
        </div>

        <div className="hidden">
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
          <Image
            src={imgJs}
            alt=""
            title="js"
          />
          <Image
            src={imgCss}
            alt=""
            title="css"
          />
          <Image
            src={imgSqlServer}
            alt=""
            title="sqlserver"
          />
          <Image
            src={imgHtml}
            alt=""
            title="html"
          />
          <Image
            src={imgLess}
            alt=""
            title="less"
          />
          <Image
            src={imgJquery}
            alt=""
            title="jquery"
          />
          <Image
            src={imgReact}
            alt=""
            title="react"
          />
          <Image
            src={imgTailwind}
            alt=""
            title="tailwind"
          />
          <Image
            src={imgBootstrap}
            alt=""
            title="bootstrap"
          />
          <Image
            src={imgVue}
            alt=""
            title="vue"
          />
          <Image
            src={imgMySql}
            alt=""
            title="mysql"
          />
          <Image
            src={imgKotlin}
            alt=""
            title="kotlin"
          />
        </div>
        <div>
          <Image
            src={imgJs}
            alt=""
            title="js"
          />
          <Image
            src={imgCss}
            alt=""
            title="css"
          />
          <Image
            src={imgSqlServer}
            alt=""
            title="sqlserver"
          />
          <Image
            src={imgHtml}
            alt=""
            title="html"
          />
          <Image
            src={imgLess}
            alt=""
            title="less"
          />
          <Image
            src={imgJquery}
            alt=""
            title="jquery"
          />
          <Image
            src={imgReact}
            alt=""
            title="react"
          />
          <Image
            src={imgTailwind}
            alt=""
            title="tailwind"
          />
          <Image
            src={imgBootstrap}
            alt=""
            title="bootstrap"
          />
          <Image
            src={imgVue}
            alt=""
            title="vue"
          />
          <Image
            src={imgMySql}
            alt=""
            title="mysql"
          />
          <Image
            src={imgKotlin}
            alt=""
            title="kotlin"
          />
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
                return <div key={indexProject.toString()} className="hidden">
                  <div>
                    <h3>{project.name}</h3>
                    <Link href={project.link} target="_blank" title="Ir para o repositório">
                      <Image
                        src={imgSetaTopoDireita}
                        alt=""
                      />
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
          <Link
            href="https://github.com/alexiamelhado18"
            target="_blank"
          >
            <Image
              src={imgGithub}
              alt="Ícone do github"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/al%C3%A9xia-vit%C3%B3ria-b0ab08169/"
            target="_blank"
          >
            <Image
              src={imgLinkedin}
              alt="Ícone do linkedin"
            />
          </Link>
          <Link
            href="mailto:alexiavitoria.dev@gmail.com"
            target="_blank"
          >
            <Image
              src={imgEmail}
              alt="Ícone de e-mail"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
