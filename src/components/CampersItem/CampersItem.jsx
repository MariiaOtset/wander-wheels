import {Link} from "react-router-dom";
import BadgesList from "../BadgesList/BadgesList.jsx";
import CampersNameAndPrice from "../CampersNameAndPrice/CampersNameAndPrice.jsx";
import CampersReviewsAndLocation from "../CampersReviewsAndLocation/CampersReviewsAndLocation.jsx";
import css from "./CampersItem.module.css";
import {useCompare} from "../../context/useCompare.js";
export default function CampersItem({camper}){
 const {selected,toggle,contains}=useCompare();
 const isCompared=contains(camper.id),full=selected.length>=3&&!isCompared;
 return <><Link className={css.imageLink} to={"/catalog/"+camper.id} aria-label={"View "+camper.name}><img src={camper.gallery?.[0]?.original} alt={camper.name} className={css.image} loading="lazy"/><span className={css.photoCount}>{camper.gallery?.length||0} PHOTOS</span></Link><div className={css.camperInfo}><CampersNameAndPrice camper={camper}/><CampersReviewsAndLocation camper={camper}/><p className={css.description}>{camper.description}</p><div className={css.badges}><BadgesList camper={camper}/></div><div className={css.bottom}><button type="button" className={css.compare} onClick={()=>toggle(camper)} aria-pressed={isCompared} disabled={full} title={full?"Remove a camper to compare another":isCompared?"Remove from comparison":"Add to comparison"}>{isCompared?"✓ In comparison":"+ Compare"}</button><Link to={"/catalog/"+camper.id} className={css.details}>Discover camper <span aria-hidden="true">↗</span></Link></div></div></>
}
