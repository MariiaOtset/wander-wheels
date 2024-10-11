import css from "./CampersReviewsAndLocation.module.css";
import sprite from "../../images/sprite.svg";

const CampersReviewsAndLocation = ({ camper }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.reviewWrapper}>
        <svg className={css.iconStar} width="16" height="16">
          <use href={`${sprite}#icon-star`}></use>
        </svg>
        <p className={css.reviewText}>
          {camper.rating}({camper.reviews.length} Reviews)
        </p>
      </div>
      <div>
        <span className={`${css.reviewText}, ${css.span}`}>
          <svg className={css.iconMap} width="16" height="16">
            <use href={`${sprite}#icon-map`}></use>
          </svg>
          {camper.location}
        </span>
      </div>
    </div>
  );
};

export default CampersReviewsAndLocation;
