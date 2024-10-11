import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors.js";
import CampersItem from "../CampersItem/CampersItem.jsx";
import css from "./CampersList.module.css";

const CampersList = () => {
  const campers = useSelector(selectCampers);

  return (
    <ul>
      {campers.map((camper) => {
        return (
          <li key={camper.id} className={css.camperItem}>
            {<CampersItem camper={camper} />}
          </li>
        );
      })}
    </ul>
  );
};

export default CampersList;
