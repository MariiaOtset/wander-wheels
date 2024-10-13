import { useSelector } from "react-redux";
import BadgesList from "../BadgesList/BadgesList.jsx";
import css from "./FeaturesSection.module.css";
import { selectCamper } from "../../redux/campers/selectors.js";
import VehicleDetails from "../VehicleDetails/VehicleDetails.jsx";

const FeaturesSection = () => {
  const camper = useSelector(selectCamper);

  return (
    <section className={css.sectionWrapper}>
      <BadgesList camper={camper} />
      <div className={css.vehicleDetails}>
        <h3 className={css.titleUnderline}>Vehicle details</h3>
        <VehicleDetails />
      </div>
    </section>
  );
};

export default FeaturesSection;
