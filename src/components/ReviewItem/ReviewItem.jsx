import css from "./ReviewItem.module.css";
import sprite from "../../images/sprite.svg";

const ReviewItem = ({ review }) => {
  const { reviewer_name, reviewer_rating, comment } = review;
  return (
    <div>
      <div className={css.wrapper}>
        <div className={css.avatar}>{reviewer_name[0]}</div>
        <div className={css.nameWithStars}>
          <p className={css.name}>{reviewer_name}</p>
          <div>
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={index < reviewer_rating ? css.yellow : css.grey}
                width="16"
                height="16"
              >
                <use href={`${sprite}#icon-star`}></use>
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className={css.text}>{comment}</p>
    </div>
  );
};

export default ReviewItem;
