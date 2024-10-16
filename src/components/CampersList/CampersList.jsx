import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors.js";
import CampersItem from "../CampersItem/CampersItem.jsx";
import css from "./CampersList.module.css";

const CampersList = () => {
  const campers = useSelector(selectCampers);

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {campers.map((camper) => {
          return (
            <li key={camper.id} className={css.camperItem}>
              {<CampersItem camper={camper} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CampersList;
