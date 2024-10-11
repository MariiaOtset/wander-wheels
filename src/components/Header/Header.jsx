import css from "./Header.module.css";
import sprite from "../../images/sprite.svg";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  const linkStyles = ({ isActive }) => clsx(css.link, isActive && css.active);
  return (
    <div className={css.wrapper}>
      <a href="/">
        <svg width="136" height="16">
        <use href={`${sprite}#icon-Logo`} />
      </svg>
      </a>
      <nav className={css.navigation}>
        <NavLink to="/" className={linkStyles}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={linkStyles}>
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
