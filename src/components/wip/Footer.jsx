import "@/styles/layout/wip/Footer.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
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
  );
}

export default Footer;
