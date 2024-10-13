import css from "./ToggleSection.module.css";
import clsx from "clsx";

const ToggleSection = ({ isFeaturesShown, setIsFeaturesShown }) => {
  const featuresStyles = clsx(css.btn, isFeaturesShown && css.active);
  const reviewsStyles = clsx(css.btn, !isFeaturesShown && css.active);

  return (
    <div className={css.wrapper}>
      <button
        type="button"
        className={featuresStyles}
        onClick={() => setIsFeaturesShown(true)}
      >
        Features
      </button>
      <button
        type="button"
        className={reviewsStyles}
        onClick={() => setIsFeaturesShown(false)}
      >
        Reviews
      </button>
    </div>
  );
};

export default ToggleSection;
