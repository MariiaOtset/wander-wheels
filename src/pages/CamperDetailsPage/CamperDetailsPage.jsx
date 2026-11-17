import {useEffect,useState} from "react";
import {Link,useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {fetchCamperById} from "../../redux/campers/operations.js";
import {resetSelectedCamper} from "../../redux/campers/slice.js";
import {selectCamper,selectLoading,selectError,selectNotFound} from "../../redux/campers/selectors.js";
import {selectFavorites} from "../../redux/favorites/selectors.js";
import {setFavorite} from "../../redux/favorites/slice.js";
import Gallery from "../../components/Gallery/Gallery.jsx";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection.jsx";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection.jsx";
import ReservationFormSection from "../../components/ReservationFormSection/ReservationFormSection.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import css from "./CamperDetailsPage.module.css";
export default function CamperDetailsPage(){
 const {id}=useParams(),dispatch=useDispatch(),camper=useSelector(selectCamper),loading=useSelector(selectLoading),error=useSelector(selectError),notFound=useSelector(selectNotFound);
 const favorites=useSelector(selectFavorites);
 const [tab,setTab]=useState("features");
 useEffect(()=>{dispatch(resetSelectedCamper());const request=dispatch(fetchCamperById(id));setTab("features");return()=>request.abort();},[id,dispatch]);
 const isFavorite=camper&&favorites.some(f=>f.id===camper.id);
 if(loading||(!camper&&!error&&!notFound))return <div className={css.status}><Loader/></div>;
 if(error||notFound||!camper)return <div className={css.status}><h2>We could not find this camper.</h2><Link to="/catalog">Back to the collection ↗</Link></div>;
 return <main className={css.page}>
  <nav className={css.breadcrumb} aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/catalog">Our campers</Link><span>/</span><strong>{camper.name}</strong></nav>
  <div className={css.heading}><div><p className="ww-eyebrow">MEET YOUR NEXT HOME ON THE ROAD</p><h1 className="ww-serif">{camper.name}</h1><div className={css.metadata}><span>★ {camper.rating} · {camper.reviews?.length||0} reviews</span><span>⌖ {camper.location}</span></div></div><div className={css.headActions}><button type="button" onClick={()=>dispatch(setFavorite(camper))} aria-pressed={!!isFavorite}>{isFavorite?"♥ Saved to favourites":"♡ Save this camper"}</button><strong>€{Number(camper.price).toFixed(0)} <small>/ day</small></strong></div></div>
  <Gallery camper={camper}/>
  <div className={css.content}><section className={css.primary}><div className={css.intro}><p className="ww-eyebrow">ABOUT THIS CAMPER</p><h2 className="ww-serif">A little more <em>freedom.</em></h2><p>{camper.description}</p></div><div className={css.tabs} role="tablist" aria-label="Camper information"><button type="button" role="tab" aria-selected={tab==="features"} onClick={()=>setTab("features")} className={tab==="features"?css.selected:""}>Features & details</button><button type="button" role="tab" aria-selected={tab==="reviews"} onClick={()=>setTab("reviews")} className={tab==="reviews"?css.selected:""}>Guest reviews ({camper.reviews?.length||0})</button></div><div className={css.tabPanel} role="tabpanel">{tab==="features"?<FeaturesSection/>:<ReviewsSection/>}</div></section><ReservationFormSection camper={camper}/></div>
  <div className={css.back}><Link to="/catalog">← Back to all campers</Link></div>
 </main>;
}
