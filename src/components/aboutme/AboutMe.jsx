import aboutmeFondo from "@/assets/aboutme_fondo.png";
import "@/styles/layout/aboutme/AboutMe.scss";

function AboutMe() {
  return (
    <div
      className="aboutMe"
      style={{ backgroundImage: `url(${aboutmeFondo})` }}
    >
      <div className="aboutMe__overlay">
        <section className="aboutMe__content">
          <h1 className="aboutMe__title">Hola, soy Nuria</h1>

          <h2 className="aboutMe__tagline">
            De los números de la contabilidad, al código del front-end.
          </h2>

          <div className="aboutMe__story">
            <p>
              Soy desarrolladora front-end con base en{" "}
              <strong>HTML, CSS, JavaScript y React</strong>. Mi camino empezó
              en un bootcamp full stack y continúa de manera autodidacta,
              profundizando en <strong>TypeScript</strong> y explorando{" "}
              <strong>AWS</strong> y el ecosistema cloud.
            </p>

            <p>
              Vengo de la <strong>contabilidad</strong>, donde aprendí a ser
              como una hormiguita: metódica, perseverante y a no rendirme nunca,
              hasta que los números cuadren al céntimo. <br />
              He trasladado esas mismas habilidades al desarrollo: me gusta que
              el código esté limpio, bien estructurado y que{" "}
              <strong>funcione exactamente como debe</strong>.
            </p>

            <p>
              No soy diseñadora. Transformo los diseños de otros en código, en
              un producto real donde cada píxel está en su sitio, cada botón
              responde como esperas y cada interfaz se adapta a patallas de
              cualquier dispositivo.
            </p>
          </div>

          <div className="aboutMe__stack">
            <h2 className="aboutMe__stackTitle">Stack actual</h2>
            <ul className="aboutMe__stackList">
              <li>HTML5 · CSS3 · Sass</li>
              <li>JavaScript · React</li>
              <li>TypeScript (en progreso)</li>
              <li>Node.js · SQL</li>
              <li>AWS Cloud Practitioner</li>
            </ul>
          </div>

          <div className="aboutMe__cta">
            <a className="aboutMe__ctaLink" href="/projects">
              Ver proyectos
            </a>
            <a className="aboutMe__ctaLink" href="/contact">
              Hablemos
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;
