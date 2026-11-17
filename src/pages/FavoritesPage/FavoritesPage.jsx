import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectFavorites} from "../../redux/favorites/selectors.js";
import CampersItem from "../../components/CampersItem/CampersItem.jsx";
import css from "./FavoritesPage.module.css";
export default function FavoritesPage(){
 const saved=useSelector(selectFavorites);
 return <main className={css.page}>
  <div className={css.heading}><p className="ww-eyebrow">YOUR PERSONAL SHORTLIST</p><h1 className="ww-serif">The ones worth <em>remembering.</em></h1><p>A little collection of places you might call home on the road. Saved on this device, just for you.</p></div>
  {saved.length?<><div className={css.count}>{saved.length} SAVED {saved.length===1?"CAMPER":"CAMPERS"}</div><ul className={css.list}>{saved.map(camper=><li key={camper.id} className={css.item}><CampersItem camper={camper}/></li>)}</ul></>:<div className={css.empty}><span aria-hidden="true">♡</span><h2>Nothing saved just yet.</h2><p>When a camper catches your eye, tap the heart to find it here later.</p><Link to="/catalog" className="ww-btn">Explore our campers ↗</Link></div>}
 </main>
}
