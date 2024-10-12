import BadgesItem from "../BadgesItem/BadgesItem.jsx";
import css from "./BadgesList.module.css";

const BadgesList = ({ camper }) => {
  return (
    <div className={css.wrapper}>
      {camper.transmission === "automatic" && <BadgesItem badge="Automatic" />}
      {camper.engine === "petrol" && <BadgesItem badge="Petrol" />}
      {camper.AC && <BadgesItem badge="AC" />}
      {camper.bathroom && <BadgesItem badge="Bathroom" />}
      {camper.kitchen && <BadgesItem badge="Kitchen" />}
      {camper.TV && <BadgesItem badge="TV" />}
      {camper.radio === "petrol" && <BadgesItem badge="Radio" />}
      {camper.refrigerator && <BadgesItem badge="Refrigerator" />}
      {camper.microwave && <BadgesItem badge="Microwave" />}
      {camper.gas && <BadgesItem badge="Gas" />}
      {camper.water && <BadgesItem badge="Water" />}
    </div>
  );
};

export default BadgesList;
