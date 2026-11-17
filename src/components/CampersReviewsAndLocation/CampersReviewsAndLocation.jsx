import css from "./CampersReviewsAndLocation.module.css";
import sprite from "../../images/sprite.svg";
export default function CampersReviewsAndLocation({camper}){
 const count=camper.reviews?.length||0;
 return <div className={css.wrapper}>
  <span className={css.reviewWrapper} title="Camper rating">
   <svg className={css.iconStar} width="15" height="15" aria-hidden="true"><use href={sprite+"#icon-star"}/></svg>
   <span className={css.reviewText}>{camper.rating} <span className={css.reviewCount}>({count} notes)</span></span>
  </span>
  <span className={css.location}>
   <svg className={css.iconMap} width="15" height="15" aria-hidden="true"><use href={sprite+"#icon-map"}/></svg>
   {camper.location}
  </span>
 </div>;
}
