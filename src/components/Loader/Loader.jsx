import ClipLoader from "react-spinners/ClipLoader";
import {TbCamper} from "react-icons/tb";
import css from "./Loader.module.css";
export default function Loader(){return <div className={css.loader} role="status" aria-label="Loading campers"><TbCamper className={css.icon}/><ClipLoader color="#b87a55" loading size={50}/></div>}
