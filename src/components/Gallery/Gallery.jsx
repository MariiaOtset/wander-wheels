import css from "./Gallery.module.css";
import { nanoid } from "nanoid";

const Gallery = ({ camper }) => {
  return (
    <ul className={css.galleryWrapper}>
      {camper.gallery.map((image) => {
        return (
          <li key={nanoid()} className={css.galleryItem}>
            <img
              src={image.original}
              alt="Picture of the camper"
              className={css.image}
            ></img>
          </li>
        );
      })}
    </ul>
  );
};

export default Gallery;
