import {Link} from "react-router-dom";
import BadgesList from "../BadgesList/BadgesList.jsx";
import CampersNameAndPrice from "../CampersNameAndPrice/CampersNameAndPrice.jsx";
import CampersReviewsAndLocation from "../CampersReviewsAndLocation/CampersReviewsAndLocation.jsx";
import css from "./CampersItem.module.css";
export default function CampersItem({camper}){
 return <><Link className={css.imageLink} to={"/catalog/"+camper.id} aria-label={"View "+camper.name}><img src={camper.gallery?.[0]?.original} alt={camper.name} className={css.image} loading="lazy"/><span className={css.photoCount}>{camper.gallery?.length||0} PHOTOS</span></Link><div className={css.camperInfo}><CampersNameAndPrice camper={camper}/><CampersReviewsAndLocation camper={camper}/><p className={css.description}>{camper.description}</p><div className={css.badges}><BadgesList camper={camper}/></div><div className={css.bottom}><span>Handpicked for the open road</span><Link to={"/catalog/"+camper.id} className={css.details}>Discover camper <span aria-hidden="true">↗</span></Link></div></div></>
}
