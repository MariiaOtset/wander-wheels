import css from "./CampersNameAndPrice.module.css";
import FavoriteButton from "../FavoriteButton/FavoriteButton.jsx";
import {useDispatch,useSelector} from "react-redux";
import {setFavorite} from "../../redux/favorites/slice.js";
import {selectFavorites} from "../../redux/favorites/selectors.js";
export default function CampersNameAndPrice({camper}){
 const dispatch=useDispatch();
 const favorites=useSelector(selectFavorites);
 const isFavorite=favorites.some(item=>item.id===camper.id);
 return <div className={css.wrapper}>
 <div><h2 className={css.title}>{camper.name}</h2><span className={css.subtitle}>YOUR NEXT HOME ON WHEELS</span></div>
 <div className={css.priceWrapper}><div><strong>€{Number(camper.price).toFixed(0)}</strong><span> / day</span></div><FavoriteButton onClick={()=>dispatch(setFavorite(camper))} isFavorite={isFavorite}/></div>
 </div>
}
