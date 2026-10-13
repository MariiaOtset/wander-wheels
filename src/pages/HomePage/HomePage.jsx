import { NavLink } from "react-router-dom";
import Hero from "../../components/Hero/Hero.jsx";
import css from "./HomePage.module.css";

const highlights = [
  {
    number: "01",
    title: "Freedom to explore",
    text: "Go beyond the usual destinations and make every stop your own.",
  },
  {
    number: "02",
    title: "Find your fit",
    text: "Explore campers and compare the details that matter for your journey.",
  },
  {
    number: "03",
    title: "Comfort on the road",
    text: "Discover the features that make life away from home feel effortless.",
  },
];

const HomePage = () => (
  <main className={css.homePage}>
    <Hero />
    <section className={css.highlights} aria-labelledby="highlights-heading">
      <div className={css.sectionIntro}>
        <p className={css.eyebrow}>THE JOY OF GOING FURTHER</p>
        <h2 id="highlights-heading">More than a trip.<br /><span>A different way to travel.</span></h2>
      </div>
      <div className={css.highlightGrid}>
        {highlights.map(({ number, title, text }) => (
          <article className={css.highlight} key={number}>
            <span className={css.number}>{number} /</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
    <section className={css.finalCta} aria-labelledby="cta-heading">
      <div>
        <p className={css.eyebrow}>READY WHEN YOU ARE</p>
        <h2 id="cta-heading">Find your next home on the road.</h2>
        <p>Your next adventure could be just a few clicks away.</p>
      </div>
      <NavLink className={css.catalogLink} to="/catalog">Browse the catalog <span aria-hidden="true">↗</span></NavLink>
    </section>
  </main>
);

export default HomePage;
