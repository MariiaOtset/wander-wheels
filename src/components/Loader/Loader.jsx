import ClipLoader from "react-spinners/ClipLoader";
import { TbCamper } from "react-icons/tb";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <TbCamper className={css.icon} />
      <ClipLoader color="#36d7b7" loading={true} size={100} />
    </div>
  );
};

export default Loader;
