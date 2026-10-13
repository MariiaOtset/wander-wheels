import { NavLink } from "react-router-dom";
import heroImage from "../../images/home-page/hero.jpg";
import css from "./Hero.module.css";

const Hero = () => (
  <section className={css.hero} aria-labelledby="hero-heading">
    <div className={css.scene} aria-hidden="true" />
    <div className={css.inner}>
      <div className={css.copy}>
        <p className={css.kicker}><span className={css.kickerLine} /> YOUR NEXT ADVENTURE STARTS HERE</p>
        <h1 id="hero-heading" className={css.main}>
          The open road.<br /><span>Your way.</span>
        </h1>
        <p className={css.description}>
          Find a camper that feels like home, wherever the journey takes you.
          Explore our collection and make room for new memories.
        </p>
        <div className={css.actions}>
          <NavLink className={css.primaryAction} to="/catalog">
            Explore campers <span aria-hidden="true">↗</span>
          </NavLink>
          <span className={css.actionHint}>Discover your perfect getaway</span>
        </div>
      </div>
      <div className={css.mobileMedia}>
        <img src={heroImage} alt="Camper van surrounded by scenic natural landscape" />
        <span className={css.mediaCaption}>GO FURTHER · STAY FREE</span>
      </div>
      <div className={css.bottomBar} aria-hidden="true">
        <span>DISCOVER NEW PLACES</span>
        <span className={css.bottomDivider} />
        <span>TRAVEL AT YOUR OWN PACE</span>
        <span className={css.bottomNumber}>01 / EXPLORE</span>
      </div>
    </div>
  </section>
);

export default Hero;
