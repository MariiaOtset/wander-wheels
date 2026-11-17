import {useSelector} from "react-redux";
import {selectCamper} from "../../redux/campers/selectors.js";
import ReviewItem from "../ReviewItem/ReviewItem.jsx";
import css from "./ReviewsSection.module.css";
export default function ReviewsSection(){
 const camper=useSelector(selectCamper);
 const reviews=camper?.reviews||[];
 return <section className={css.section} aria-label="Camper guest notes">
  <div className={css.heading}>
   <div><p className="ww-eyebrow">NOTES FROM THE ROAD</p><h3 className="ww-serif">The little details <em>matter.</em></h3></div>
   <span className={css.counter}>{reviews.length} notes</span>
  </div>
  <ul className={css.wrapper}>
   {reviews.map((item,i)=><li key={camper.id+"-"+i} className={css.reviewItem}><ReviewItem review={item}/></li>)}
  </ul>
  <p className={css.note}>These are example impressions for exploring the camper collection, not verified guest reviews.</p>
 </section>;
}
