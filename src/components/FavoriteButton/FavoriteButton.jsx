import css from "./FavoriteButton.module.css";
import sprite from "../../images/sprite.svg";
import clsx from "clsx";
export default function FavoriteButton({onClick,isFavorite}){
 return <button type="button" aria-label={isFavorite?"Remove from saved campers":"Save camper"} aria-pressed={isFavorite} title={isFavorite?"Remove from saved campers":"Save camper"} className={css.button} onClick={onClick}><svg aria-hidden="true" className={clsx(css.heart,isFavorite&&css.favorite)}><use href={sprite+"#icon-heart"}/></svg></button>
}
