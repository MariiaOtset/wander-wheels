import BadgesItem from "../BadgesItem/BadgesItem.jsx";
import css from "./BadgesList.module.css";

export function camperAmenities(camper){
 return [
  camper.transmission==="automatic"&&"Automatic",
  camper.engine==="petrol"&&"Petrol",
  camper.AC&&"AC",
  camper.bathroom&&"Shower",
  camper.kitchen&&"Kitchen",
  camper.TV&&"TV",
  camper.radio&&"Radio",
  camper.refrigerator&&"Refrigerator",
  camper.microwave&&"Microwave",
  camper.gas&&"Gas",
  camper.water&&"Water"
 ].filter(Boolean);
}
export default function BadgesList({camper,limit}){
 const all=camperAmenities(camper);
 const visible=Number.isInteger(limit)&&limit>0?all.slice(0,limit):all;
 const remainder=all.length-visible.length;
 return <div className={css.wrapper} aria-label="Camper amenities">
  {visible.map(badge=><BadgesItem key={badge} badge={badge}/>)}
  {remainder>0&&<span className={css.more} title="All amenities are listed on the camper details page">+{remainder} more</span>}
 </div>;
}
