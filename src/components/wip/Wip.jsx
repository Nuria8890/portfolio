import "@/styles/layout/Wip.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function wip() {
  return (
    <div className="screen">
      <section className="wip">
        <article className="wip__mobile">
          <div className="wip__mobile__line-top"></div>
          <h1 className="wip__mobile__text">
            Work <br /> In <br /> Progress
          </h1>
          <div className="wip__mobile__line-bottom"></div>
        </article>

        <article className="wip__desktop">
          <div className="wip__desktop__screen">
            <div className="wip__desktop__screen__line-around">
              <h1 className="wip__desktop__screen__text">
                Work <br /> In <br /> Progress
              </h1>
            </div>
          </div>
          <div className="wip__desktop__line-bottom"></div>
        </article>
      </section>
      <footer className="footerWip">
        <p>made by NuriaCD 🐜</p>
        <div className="footerWip__icons">
          <FaGithub className="footerWip__icons__icon" />
          <FaLinkedin className="footerWip__icons__icon" />
        </div>
      </footer>
    </div>
  );
}

export default wip;
