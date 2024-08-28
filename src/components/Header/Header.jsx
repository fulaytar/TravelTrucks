import clsx from 'clsx';
import css from './Header.module.css';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  const isActive = ({ isActive }) =>
    isActive ? clsx(css.navLink, css.navLinkActive) : css.navLink;
  return (
    <header>
      <nav className={css.nav}>
        <Link to={'/'} className={css.logo}>
          Travel<span className={css.grey}>Trucks</span>
        </Link>
        <ul className={css.listLink}>
          <li>
            <NavLink to={'/'} className={isActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/catalog/'} className={isActive}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
