import "@/styles/layout/footer/Footer.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} made by <strong>NuriaCD</strong> 🐜
      </p>
      <div className="footer__icons">
        <a
          href="https://github.com/Nuria8890"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/nuria-8890-cd/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
