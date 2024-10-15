import css from "./CampersNameAndPrice.module.css";
import FavoriteButton from "../FavoriteButton/FavoriteButton.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../../redux/favorites/slice.js";
import { selectFavorites } from "../../redux/favorites/selectors.js";

const CampersNameAndPrice = ({ camper }) => {
  const dispatch = useDispatch();

  const handleSetFavorite = () => {
    dispatch(setFavorite(camper));
  };

  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some(
    (item) => item.id === camper.id && item.name === camper.name
  );

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>{camper.name}</h2>
      <div className={css.priceWrapper}>
        <h2 className={css.title}>€{camper.price}.00</h2>
        <div className={css.inputWrapper}>
          <FavoriteButton onClick={handleSetFavorite} isFavorite={isFavorite} />
        </div>
      </div>
    </div>
  );
};

export default CampersNameAndPrice;
