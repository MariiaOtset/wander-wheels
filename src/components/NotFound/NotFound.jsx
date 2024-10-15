import css from "./NotFound.module.css";
import { FaTruck } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className={css.wrapper}>
      <FaTruck className={css.icon} />
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>Looks like you took a wrong turn. This page has gone on a trip!</p>
      <a href="/" className={css.link}>
        Come back to home page
      </a>
    </div>
  );
};

export default NotFound;
