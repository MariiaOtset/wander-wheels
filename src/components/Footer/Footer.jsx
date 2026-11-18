import {Link} from "react-router-dom";
import css from "./Footer.module.css";
import BrandMark from "../BrandMark/BrandMark.jsx";
export default function Footer(){
 return <footer className={css.footer}>
 <div className={css.top}>
   <div><p className={css.eyebrow}>WANDER WHEELS / THE OPEN ROAD CLUB</p><h2>Go where you <em>feel alive.</em></h2></div>
   <div className={css.right}><p>Beautiful journeys begin with a little curiosity. Discover your next home away from home.</p><Link to="/catalog">Explore campers <span aria-hidden="true">↗</span></Link></div>
 </div>
 <div className={css.bottom}><Link className={css.logo} to="/"><BrandMark/> WANDER WHEELS</Link><div><Link to="/catalog">Our campers</Link><Link to="/favorites">Saved campers</Link></div><span>© {new Date().getFullYear()} Wander Wheels</span></div>
 </footer>
}
