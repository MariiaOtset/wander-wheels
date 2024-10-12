import BadgesList from "../BadgesList/BadgesList.jsx";
import SmallButton from "../SmallButton/SmallButton.jsx";
import CampersNameAndPrice from "../CampersNameAndPrice/CampersNameAndPrice.jsx";
import CampersReviewsAndLocation from "../CampersReviewsAndLocation/CampersReviewsAndLocation.jsx";
import css from "./CampersItem.module.css";

const CampersItem = ({ camper }) => {
  return (
    <>
      <img
        src={camper.gallery[0].original}
        alt={camper.name}
        className={css.image}
      />
      <div className={css.camperInfo}>
        <CampersNameAndPrice camper={camper} />
        <CampersReviewsAndLocation camper={camper} />
        <p className={css.description}>{camper.description}</p>
        <BadgesList camper={camper} />
        <SmallButton text="Show more" linkTo={`/catalog/${camper.id}`} target />
      </div>
    </>
  );
};

export default CampersItem;
