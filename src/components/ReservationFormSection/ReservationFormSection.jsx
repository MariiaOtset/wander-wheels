import ReservationForm from "../ReservationForm/ReservationForm.jsx";
import css from "./ReservationFormSection.module.css";
export default function ReservationFormSection({camper}){return <aside className={css.sectionWrapper} aria-label="Trip planner"><p className={css.eyebrow}>MAKE IT A GETAWAY</p><h3 className={css.title}>Plan your escape.</h3><p className={css.text}>Pick your dates, see an estimated total and preview your journey — just for fun.</p><ReservationForm camper={camper}/></aside>}
