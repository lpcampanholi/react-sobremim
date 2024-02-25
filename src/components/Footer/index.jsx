import "./Rodape.css";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Rodape() {

  const sizeIcons = 18;

  return (
    <footer className="Rodape">
      <div>
        Desenvolvido por: <strong>lpcampanholi</strong>
      </div>
      <div className="social-icons">
        <a href="https://github.com/lpcampanholi" target="_blank" rel="noreferrer"><FaGithub size={sizeIcons} /></a>
        <a href="https://www.linkedin.com/in/lu%C3%ADs-campanholi/" target="_blank" rel="noreferrer"><FaLinkedin size={sizeIcons} /></a>
        <a href="https://www.instagram.com/lpcampanholi/" target="_blank" rel="noreferrer"><FaInstagram size={sizeIcons} /></a>
      </div>
    </footer>
  )
}

export default Rodape;