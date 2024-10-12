import CampersReviewsAndLocation from "../../components/CampersReviewsAndLocation/CampersReviewsAndLocation.jsx";
import css from "./CamperDetailsPage.module.css";
import { selectCamper } from "../../redux/campers/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/campers/operations.js";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);

  useEffect(() => {
    async function name() {
      await dispatch(fetchCamperById(id)).unwrap();
    }
    name();
  }, [id, dispatch]);

  const selectedCamper = useSelector(selectCamper);

  console.log(selectedCamper);

  if (!selectedCamper) {
    return <div>Loading...</div>;
  }

  return (
    <div className={css.page}>
      <h2 className={css.title}>{selectedCamper.name}</h2>
      <CampersReviewsAndLocation camper={selectedCamper} />
      <h2 className={css.title}></h2>
    </div>
  );
};

export default CamperDetailsPage;
