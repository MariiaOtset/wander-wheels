// import { useSelector } from "react-redux";
// import { selectCampers } from '../../redux/campers/selectors.js';
// import CampersItem from "../CampersItem/CampersItem.jsx";
import css from "./CampersList.module.css";

const CampersList = () => {
  return (
    <ul className={css.wrapper}>
      {/* {i.map(() => return (
              <li>
              <CampersItem />
                  <li />
              ))}; */}
    </ul>
  );
};

export default CampersList;
