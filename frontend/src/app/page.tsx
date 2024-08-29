//estilização
import "./style.css";

export default function Home() {
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
    </>
  );
}
