import css from "./ReviewsSection.module.css";
import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors.js";
import ReviewItem from "../ReviewItem/ReviewItem.jsx";
import { nanoid } from "nanoid";

const ReviewsSection = () => {
  const { reviews } = useSelector(selectCamper);

  return (
    <section>
      <ul className={css.wrapper}>
        {reviews.map((item) => {
          return (
            <li key={nanoid()} className={css.reviewItem}>
              <ReviewItem review={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ReviewsSection;
