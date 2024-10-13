import css from "./ReviewItem.module.css";

const ReviewItem = ({ review }) => {
  const { reviewer_name, reviewer_rating, comment } = review;
  return (
    <div>
      <div className={css.wrapper}>
        <div className={css.avatar}> {reviewer_name[0]}</div>
        <div className={css.nameWithStars}>
          <p className={css.name}>{reviewer_name}</p>
          <div>{}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
