import CampersReviewsAndLocation from "../../components/CampersReviewsAndLocation/CampersReviewsAndLocation.jsx";
import css from "./CamperDetailsPage.module.css";
import {
  selectCamper,
  selectError,
  selectLoading,
  selectNotFound,
} from "../../redux/campers/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCamperById } from "../../redux/campers/operations.js";
import Gallery from "../../components/Gallery/Gallery.jsx";
import ToggleSection from "../../components/ToggleSection/ToggleSection.jsx";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection.jsx";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection.jsx";
import ReservationFormSection from "../../components/ReservationFormSection/ReservationFormSection.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import NotFound from "../../components/NotFound/NotFound.jsx";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent.jsx";
import { resetItems } from "../../redux/campers/slice.js";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isFeaturesShown, setIsFeaturesShown] = useState(true);

  useEffect(() => {
    dispatch(resetItems());

    async function name() {
      await dispatch(fetchCamperById(id)).unwrap();
    }
    name();
  }, [id, dispatch]);

  const selectedCamper = useSelector(selectCamper);
  const loading = useSelector(selectLoading);
  const isNotFound = useSelector(selectNotFound);
  const isError = useSelector(selectError);

  return (
    <div className={css.page}>
      {selectedCamper && (
        <>
          <h2 className={css.title}>{selectedCamper.name}</h2>
          <CampersReviewsAndLocation camper={selectedCamper} />
          <h2 className={`${css.title} ${css.price}`}>
            €{selectedCamper.price.toFixed(2)}
          </h2>
          <Gallery camper={selectedCamper} />
          <p className={css.description}>{selectedCamper.description}</p>
          <ToggleSection
            isFeaturesShown={isFeaturesShown}
            setIsFeaturesShown={setIsFeaturesShown}
          />
          <div className={css.sectionsWrapper}>
            {isFeaturesShown ? <FeaturesSection /> : <ReviewsSection />}
            <ReservationFormSection />
          </div>
        </>
      )}
      {loading && <Loader />}
      {isNotFound && !loading && <NotFound />}
      {isError && !loading && <ErrorComponent />}
    </div>
  );
};

export default CamperDetailsPage;
