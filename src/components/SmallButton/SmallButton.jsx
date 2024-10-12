import { NavLink } from "react-router-dom";
import css from "./SmallButton.module.css";

const SmallButton = ({ text, linkTo, target }) => {
  if (linkTo && target) {
    return (
      <a
        href={linkTo}
        className={css.button}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }

  if (linkTo) {
    return (
      <NavLink to={linkTo} className={css.button}>
        {text}
      </NavLink>
    );
  }

  return <button className={css.button}>{text}</button>;
};

export default SmallButton;
