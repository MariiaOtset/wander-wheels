import {useEffect,useState} from "react";
import {NavLink,useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectFavorites} from "../../redux/favorites/selectors.js";
import css from "./Header.module.css";

export default function Header(){
  const [menuOpen,setMenuOpen]=useState(false);
  const location=useLocation();
  const favorites=useSelector(selectFavorites);
  useEffect(()=>setMenuOpen(false),[location.pathname]);
  const navClass=({isActive})=>isActive ? css.activeLink+" "+css.navLink : css.navLink;
  return <header className={css.header}>
    <div className={css.inner}>
      <NavLink className={css.brand} to="/" aria-label="Wander Wheels home">
        <span className={css.brandSymbol} aria-hidden="true">✳</span>
        <span>WANDER<span className={css.brandLight}>WHEELS</span><small>THE OPEN ROAD CLUB</small></span>
      </NavLink>
      <nav id="primary-navigation" aria-label="Main navigation" className={css.nav+(menuOpen?" "+css.open:"")}>
        <NavLink end className={navClass} to="/">Discover</NavLink>
        <NavLink className={navClass} to="/catalog">Our campers</NavLink>
        <NavLink className={navClass} to="/favorites">Saved <span className={css.count}>{favorites.length}</span></NavLink>
        <NavLink className={css.mobileAction} to="/catalog">Explore the collection <span aria-hidden="true">↗</span></NavLink>
      </nav>
      <div className={css.actions}>
        <NavLink className={css.cta} to="/catalog">Find your camper <span aria-hidden="true">↗</span></NavLink>
        <button className={css.menuButton} type="button" aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={()=>setMenuOpen(open=>!open)}><span/><span/></button>
      </div>
    </div>
  </header>
}
