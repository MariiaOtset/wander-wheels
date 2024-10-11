import Button from "../Button/Button.jsx";
import CampersReviewsAndLocation from "../CampersReviewsAndLocation/CampersReviewsAndLocation.jsx";
import css from "./CampersItem.module.css";

const CampersItem = ({ camper }) => {
  return (
    <>
      <img src={camper} alt="" />
      <div className={css.camperInfo}>
        <div>
          <h2></h2>
          <h2></h2>
        </div>
        <CampersReviewsAndLocation />
        <p></p>
        <Button text="d" linkTo="/" target="_blank"></Button>
      </div>
    </>
  );
};

export default CampersItem;
