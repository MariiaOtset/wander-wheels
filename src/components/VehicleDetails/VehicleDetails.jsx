import { useSelector } from "react-redux";
import css from "./VehicleDetails.module.css";
import { selectCamper } from "../../redux/campers/selectors.js";

const VehicleDetails = () => {
  const { form, length, width, height, tank, consumption } =
    useSelector(selectCamper);

  return (
    <div className={css.detailsWrapper}>
      <div className={css.details}>
        <p>Form</p>
        <p className={css.info}>{form}</p>
      </div>
      <div className={css.details}>
        <p>Length</p>
        <p className={css.info}>{length}</p>
      </div>
      <div className={css.details}>
        <p>Width</p>
        <p className={css.info}>{width}</p>
      </div>
      <div className={css.details}>
        <p>Height</p>
        <p className={css.info}>{height}</p>
      </div>
      <div className={css.details}>
        <p>Tank</p>
        <p className={css.info}>{tank}</p>
      </div>
      <div className={css.details}>
        <p>Consumption</p>
        <p className={css.info}>{consumption}</p>
      </div>
    </div>
  );
};

export default VehicleDetails;
