import {useEffect,useState} from "react";
import css from "./Gallery.module.css";
export default function Gallery({camper}){
 const [active,setActive]=useState(null);
 const images=(camper.gallery||[]).map(image=>typeof image==="string"?image:image.original).filter(Boolean);
 useEffect(()=>{if(active===null)return;const onKey=e=>{if(e.key==="Escape")setActive(null);if(e.key==="ArrowRight")setActive(i=>(i+1)%images.length);if(e.key==="ArrowLeft")setActive(i=>(i+images.length-1)%images.length);};window.addEventListener("keydown",onKey);document.body.classList.add("ww-modal-open");return()=>{window.removeEventListener("keydown",onKey);document.body.classList.remove("ww-modal-open");};},[active,images.length]);
 if(!images.length)return <p>Photos are currently unavailable.</p>;
 return <><div className={css.grid} aria-label="Camper photo gallery">{images.slice(0,5).map((url,index)=><button type="button" className={css.photo} key={url+index} onClick={()=>setActive(index)} aria-label={"View photo "+(index+1)+" of "+images.length}><img src={url} alt={camper.name+" — view "+(index+1)} loading={index===0?"eager":"lazy"}/>{index===4&&images.length>5?<span>+ {images.length-5} more photos</span>:null}</button>)}</div>
 {active!==null&&<div className={css.overlay} role="dialog" aria-modal="true" aria-label="Camper photo viewer" onMouseDown={e=>{if(e.target===e.currentTarget)setActive(null);}}><div className={css.modal}><div className={css.modalTop}><p>{camper.name} <span>· {active+1} / {images.length}</span></p><button type="button" onClick={()=>setActive(null)} aria-label="Close photo viewer">✕</button></div><div className={css.modalImage}><button type="button" className={css.arrow} onClick={()=>setActive(i=>(i+images.length-1)%images.length)} aria-label="Previous photo">‹</button><img src={images[active]} alt={camper.name+" photo "+(active+1)}/><button type="button" className={css.arrow} onClick={()=>setActive(i=>(i+1)%images.length)} aria-label="Next photo">›</button></div><div className={css.modalBottom}>THE ROAD IS CALLING · WANDER WHEELS</div></div></div>}
 </>;
}
