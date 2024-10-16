import css from "./BadgesItem.module.css";
import sprite from "../../images/sprite.svg";

const BadgesItem = ({ badge }) => {
  const iconName = badge.toLowerCase();
  const iconExists = `${sprite}#icon-${iconName}`;
  return (
    <div className={css.itemWrapper}>
      <div className={css.wrap}>
        {iconExists && (
          <svg className={css.badgeIcon}>
            <use href={`${sprite}#icon-${iconName}`}></use>
          </svg>
        )}
        <p>{badge}</p>
      </div>
    </div>
  );
};

export default BadgesItem;
