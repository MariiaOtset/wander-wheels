import css from "./ToggleSection.module.css";
import clsx from "clsx";

const ToggleSection = () => {
  const toggleStyles = clsx(css.btn);

  return (
    <div className={css.wrapper}>
      <button className={toggleStyles}>Features</button>
      <button className={toggleStyles}>Reviews</button>
    </div>
  );
};

export default ToggleSection;
