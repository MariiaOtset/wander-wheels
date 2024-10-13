import css from "./ReservationFormSection.module.css";
import ReservationForm from "../../components/ReservationForm/ReservationForm.jsx";

const ReservationFormSection = () => {
  return (
    <div className={css.sectionWrapper}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <ReservationForm />;
    </div>
  );
};

export default ReservationFormSection;
