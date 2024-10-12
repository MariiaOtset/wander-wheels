// import css from './Gallery.module.css';

const Gallery = ({ camper }) => {
  return (
    <ul>
      {camper.gallery.map((image) => {
        <li>
          <img src={image}></img>
        </li>;
      })}
    </ul>
  );
};

export default Gallery;
