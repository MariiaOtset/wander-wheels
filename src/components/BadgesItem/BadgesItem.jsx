import css from "./BadgesItem.module.css";
import sprite from "../../images/sprite.svg";

// const BadgesItem = ({ badge }) => {
//   return (
//     <div className={css.itemWrapper}>
//       {sprite.includes(badge.toLowerCase()) && (
//         <svg className={css.badgeIcon} width="20" height="20">
//           <use href={`${sprite}#icon-${badge.toLowerCase()}`}></use>
//         </svg>
//       )}
//       <p>{badge}</p>
//     </div>
//   );
// };

const BadgesItem = ({ badge }) => {
  const iconName = badge.toLowerCase();
  const iconExists = `${sprite}#icon-${iconName}`;

  return (
    <div className={css.itemWrapper}>
      {iconExists ? (
        <div className={css.wrapp}>
          <svg className={css.badgeIcon}>
            <use href={`${sprite}#icon-${iconName}`}></use>
          </svg>
          <p>{badge}</p>
        </div>
      ) : (
        <div className={css.withoutIcon}>
          <svg className={css.hidden}></svg>
          <p className={css.textOnly}>{badge}</p>
        </div>
      )}
    </div>
  );
};

export default BadgesItem;
