import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import logo from '../../../public/img/logo.png'

import "./navbar.css"

const NavBar = () => {

  return (
    <nav className="navbar">

      <Link to="/" className="brand primary-font-color">
        <img src={logo} alt="Logo 1" style={{ margin: '5px',  width: '15%' }} />
        <p className="title-brand "></p>
      </Link>

      <ul className="categories">
        <li className="category">
          <Link to="/category/deco" >Decoración</Link>
        </li>
        <li className="category">
          <Link to="/category/cama">Cama</Link>
        </li>
        <li className="category">
          <Link to="/category/muebles">Muebles</Link>
        </li>
        <li className="category">
          <Link to="/category/living">Living</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  )
}
export default NavBar