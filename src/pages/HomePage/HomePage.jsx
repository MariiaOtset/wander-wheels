import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Hero from "../../components/Hero/Hero.jsx";
import css from "./HomePage.module.css";

const api="https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";
const values=[{number:"01",icon:"✦",title:"A place to call yours",text:"Find thoughtfully equipped campervans with the little comforts that make the road feel like home."},{number:"02",icon:"↗",title:"Room for adventure",text:"From quiet weekends to bucket-list routes, choose the freedom to travel on your own terms."},{number:"03",icon:"♡",title:"Find your kind of escape",text:"Explore real vehicle details, reviews and features before deciding what suits your trip."}];
export default function HomePage(){
 const [featured,setFeatured]=useState([]);
 useEffect(()=>{let live=true;const controller=new AbortController();axios.get(api,{params:{page:1,limit:3},signal:controller.signal}).then(({data})=>{if(live)setFeatured(Array.isArray(data)?data.slice(0,3):(data.items||[]).slice(0,3));}).catch(()=>{});return()=>{live=false;controller.abort();};},[]);
 return <main>
  <Hero/>
  <section className={css.intro} aria-labelledby="welcome-title">
    <div className="ww-container">
      <div className={css.sectionHead}><span className="ww-eyebrow">THE WANDER WHEELS WAY</span><h2 id="welcome-title" className="ww-serif">Less routine.<br/><em>More remarkable.</em></h2><p>Some of the best stories begin when you take the long way around. Find the keys to a journey that feels completely your own.</p></div>
      <div className={css.values}>{values.map(item=><article className={css.value} key={item.number}><div className={css.valueTop}><span>{item.number} / THE EXPERIENCE</span><span className={css.valueIcon}>{item.icon}</span></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </div>
  </section>
  <section className={css.featured} aria-labelledby="featured-title">
    <div className="ww-container">
      <div className={css.featuredHead}><div><p className="ww-eyebrow">YOUR HOME ON THE ROAD</p><h2 id="featured-title" className="ww-serif">The collection, <em>curated.</em></h2></div><Link to="/catalog">Explore all campers <span aria-hidden="true">↗</span></Link></div>
      {featured.length>0?<div className={css.featuredGrid}>{featured.map(camper=><Link key={camper.id} className={css.featuredCard} to={"/catalog/"+camper.id}><div className={css.featuredImage}><img src={camper.gallery?.[0]?.original} alt={camper.name} loading="lazy"/><span>DISCOVER THIS CAMPER ↗</span></div><div className={css.featuredCaption}><div><strong>{camper.name}</strong><p>{camper.location} · ★ {camper.rating}</p></div><span>€{Number(camper.price).toFixed(0)} <small>/ day</small></span></div></Link>)}</div>:<div className={css.featuredFallback}>Beautiful journeys begin here. <Link to="/catalog">Browse the camper collection ↗</Link></div>}
    </div>
  </section>
  <section className={css.story} aria-labelledby="story-title"><div className={css.storyImage} role="img" aria-label="Winding road through mountains"/><div className={css.storyText}><span className="ww-eyebrow">THE GOOD KIND OF DETOUR</span><h2 id="story-title" className="ww-serif">Anywhere<br/>can feel like <em>home.</em></h2><p>Slow mornings. Unexpected turns. An extra night beneath the stars. Make room for the moments you never planned.</p><Link to="/catalog" className="ww-btn ww-btn--light">Find your escape <span aria-hidden="true">↗</span></Link></div></section>
  <section id="how-it-works" className={css.steps} aria-labelledby="steps-title"><div className="ww-container"><div className={css.stepsHeader}><p className="ww-eyebrow">SIMPLE FROM THE START</p><h2 id="steps-title" className="ww-serif">Your road trip, <em>made simple.</em></h2></div><div className={css.stepGrid}>{[{n:"01",title:"Discover",text:"Explore our camper collection and filter by the features you need."},{n:"02",title:"Find your fit",text:"Compare photos, vehicle details and reviews to find your favourite."},{n:"03",title:"Plan your getaway",text:"Choose your travel dates and preview the estimated cost in our booking demo."}].map(s=><article key={s.n} className={css.step}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></div></section>
  <section className={css.closing}><div className="ww-container"><p className="ww-eyebrow">TIME TO GET GOING</p><h2 className="ww-serif">The best days are<br/><em>still out there.</em></h2><Link to="/catalog" className="ww-btn">Browse campers <span aria-hidden="true">↗</span></Link></div></section>
 </main>
}
