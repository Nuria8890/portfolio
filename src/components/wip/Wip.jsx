import "@/styles/layout/wip/Wip.scss";
import Spinner from "./Spinner";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function wip() {
  return (
    <div className="screen">
      <section className="wip">
        <article className="wip__mobile">
          <div className="wip__mobile__line-top"></div>
          <div>
            <Spinner />
          </div>

          <div className="wip__mobile__line-bottom"></div>
        </article>

        <article className="wip__desktop">
          <div className="wip__desktop__screen">
            <div className="wip__desktop__screen__line-around">
              <Spinner />
            </div>
          </div>
          <div className="wip__desktop__line-bottom"></div>
        </article>
      </section>
      <footer className="footerWip">
        <p>made by NuriaCD 🐜</p>
        <div className="footerWip__icons">
          <a
            href="https://github.com/Nuria8890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nuria-8890-cd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default wip;
