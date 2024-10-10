import Button from "../Button/Button.jsx";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.wrapper}>
        <h1 className={`${css.title} ${css.main}`}>Campers of your dreams</h1>
        <h2 className={`${css.title} ${css.secondary}`}>
          You can find everything you want in our catalog
        </h2>
        <Button text="View Now" linkTo="/catalog" />
      </div>
    </section>
  );
};

export default Hero;
