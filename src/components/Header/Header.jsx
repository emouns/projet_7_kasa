import { Link, NavLink } from 'react-router-dom'
import './Header.scss'
import logo from '../../assets/kasa_logo.png'

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Kasa logo" className="header__logo" />
      </Link>
      <nav className="header__nav">
        {/* NavLink ajoute automatiquement la classe --active sur le lien de la page courante */}
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'}
        >
          À propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
