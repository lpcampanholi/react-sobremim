import "./Menu.css"
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <header className="cabecalho">
      <nav><Link className="links" to="/">Home</Link></nav>
      <nav><Link className="links" to="/sobremim">Sobre Mim</Link></nav>
    </header>
  )
}