import css from "./ErrorComponent.module.css";
import { BiError } from "react-icons/bi";

const ErrorComponent = () => {
  return (
    <div className={css.wrapper}>
          <BiError className={css.icon} />
      <p className={css.text}>Something went wrong... Please try again</p>
    </div>
  );
};

export default ErrorComponent;
