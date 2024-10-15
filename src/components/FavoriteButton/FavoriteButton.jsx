import css from "./FavoriteButton.module.css";
import sprite from "../../images/sprite.svg";
import clsx from "clsx";

const FavoriteButton = ({ onClick, isFavorite }) => {
    const favoriteClasses = clsx(css.heart, isFavorite && css.favorite);

  return (
      <div>
          <button type="button" onClick={onClick} className={css.button}>
        <svg className={favoriteClasses}>
          <use href={`${sprite}#icon-heart`}/>
        </svg>
          </button>
    </div>
  );
};

export default FavoriteButton;