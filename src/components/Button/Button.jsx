import { NavLink } from "react-router-dom";
import css from "./Button.module.css";

const Button = ({ text, linkTo, target }) => {
  if (linkTo) {
    return (
      <NavLink to={linkTo} className={css.button}>
        {text}
      </NavLink>
    );
  }
  if (target) {
    return (
      <NavLink to={linkTo} className={css.button} target={target}>
        {text}
      </NavLink>
    );
  }
  return <button className={css.button}>{text}</button>;
};

export default Button;
