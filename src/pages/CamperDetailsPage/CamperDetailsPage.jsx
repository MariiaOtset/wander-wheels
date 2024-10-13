import CampersReviewsAndLocation from "../../components/CampersReviewsAndLocation/CampersReviewsAndLocation.jsx";
import css from "./CamperDetailsPage.module.css";
import { selectCamper } from "../../redux/campers/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCamperById } from "../../redux/campers/operations.js";
import Gallery from "../../components/Gallery/Gallery.jsx";
import ReservationForm from "../../components/ReservationForm/ReservationForm.jsx";
import ToggleSection from "../../components/ToggleSection/ToggleSection.jsx";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isFeaturesShown, setIsFeaturesShown] = useState(true);

  useEffect(() => {
    async function name() {
      await dispatch(fetchCamperById(id)).unwrap();
    }
    name();
  }, [id, dispatch]);

  const selectedCamper = useSelector(selectCamper);

  if (!selectedCamper) {
    return <div>Loading...</div>;
  }

  return (
    <div className={css.page}>
      <h2 className={css.title}>{selectedCamper.name}</h2>
      <CampersReviewsAndLocation camper={selectedCamper} />
      <h2 className={`${css.title} ${css.price}`}>
        €{selectedCamper.price}.00
      </h2>
      <Gallery camper={selectedCamper} />
      <p className={css.description}>{selectedCamper.description}</p>
          <ToggleSection isFeaturesShown={isFeaturesShown} setIsFeaturesShown={setIsFeaturesShown} />
      <div className={css.sectionWrapper}>
        <ReservationForm />
      </div>
    </div>
  );
};

export default CamperDetailsPage;
