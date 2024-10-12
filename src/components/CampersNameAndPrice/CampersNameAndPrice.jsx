import css from "./CampersNameAndPrice.module.css";
import sprite from "../../images/sprite.svg";

const CampersNameAndPrice = ({ camper }) => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>{camper.name}</h2>
      <div className={css.priceWrapper}>
        <h2 className={css.title}>€{camper.price}.00</h2>
        <div className={css.inputWrapper}>
          <input
            type="checkbox"
            id={camper.id}
            name="favorite"
            className={css.hiddenInput}
            value={camper}
          />
          <label htmlFor="favorite" className={css.label}>
            <svg className={css.icon} width="26" height="24">
              <use href={`${sprite}#icon-heart`}></use>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CampersNameAndPrice;
