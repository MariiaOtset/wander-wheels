import css from "./HomePage.module.css";
import Hero from "../../components/Hero/Hero.jsx";

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <Hero />
    </div>
  );
};

export default HomePage;
