import {useState} from "react";
import {NavLink,useNavigate} from "react-router-dom";
import css from "./Hero.module.css";
export default function Hero(){
 const [location,setLocation]=useState("");
 const navigate=useNavigate();
 const search=(event)=>{event.preventDefault();navigate("/catalog"+(location.trim()?"?location="+encodeURIComponent(location.trim()):""));};
 return <section className={css.hero} aria-labelledby="hero-title">
   <div className={css.backdrop} aria-hidden="true"/>
   <div className={css.content}>
      <p className={css.kicker}><span aria-hidden="true">✳</span> CURATED CAMPERVAN ESCAPES</p>
      <h1 id="hero-title">The journey<br/>is <em>everything.</em></h1>
      <p className={css.description}>Take the scenic route. Discover beautiful campers made for the moments that matter, wherever the road leads.</p>
      <div className={css.actions}><NavLink className={css.button} to="/catalog">Explore our campers <span aria-hidden="true">↗</span></NavLink><a href="#how-it-works" className={css.secondary}>How it works <span aria-hidden="true">↓</span></a></div>
   </div>
   <form className={css.searchDock} onSubmit={search} role="search">
     <div className={css.searchIntro}><span className={css.dockKicker}>START YOUR ESCAPE</span><strong>Where will you go?</strong></div>
     <label className={css.field}><span>DESTINATION</span><input value={location} onChange={e=>setLocation(e.target.value)} placeholder="Search by city" aria-label="Destination city" /></label>
     <button type="submit" className={css.submit}>Explore campers <span aria-hidden="true">↗</span></button>
   </form>
   <div className={css.imageCredit}>FREEDOM, JUST A ROAD AWAY <span>01 / DISCOVER</span></div>
 </section>
}
