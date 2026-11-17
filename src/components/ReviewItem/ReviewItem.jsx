import css from "./ReviewItem.module.css";
import sprite from "../../images/sprite.svg";
export default function ReviewItem({review}){
 const {reviewer_name,reviewer_rating,comment}=review;
 return <article className={css.review}>
  <div className={css.wrapper}>
   <div className={css.avatar} aria-hidden="true">{reviewer_name?.charAt(0)||"G"}</div>
   <div className={css.nameWithStars}>
    <p className={css.name}>{reviewer_name||"Travel note"}</p>
    <div className={css.stars} aria-label={reviewer_rating+" out of 5 stars"}>
     {Array.from({length:5},(_,index)=><svg key={index} aria-hidden="true" className={index<reviewer_rating?css.yellow:css.grey} width="14" height="14"><use href={sprite+"#icon-star"}/></svg>)}
    </div>
   </div>
  </div>
  <p className={css.text}>{comment}</p>
 </article>;
}
