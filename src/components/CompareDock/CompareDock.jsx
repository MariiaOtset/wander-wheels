import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import {useCompare} from "../../context/useCompare.js";
import css from "./CompareDock.module.css";
const values=[
 ["Price per day",c=>Number.isFinite(Number(c.price))?"€"+Number(c.price).toFixed(0):"—"],
 ["Guest rating",c=>c.rating?Number(c.rating).toFixed(1)+" / 5":"—"],
 ["Location",c=>c.location||"—"],
 ["Vehicle type",c=>c.form?c.form.replace(/([A-Z])/g," $1").trim():"—"],
 ["Transmission",c=>c.transmission||"—"],
 ["Kitchen",c=>c.kitchen?"Yes":"No"],
 ["Shower",c=>c.bathroom?"Yes":"No"],
 ["Air conditioning",c=>c.AC?"Yes":"No"],
 ["TV",c=>c.TV?"Yes":"No"],
 ["Fridge",c=>c.refrigerator?"Yes":"No"]
];
export default function CompareDock(){
 const {selected,remove,clear}=useCompare();
 const [open,setOpen]=useState(false);
 useEffect(()=>{if(!open)return;const onKey=e=>{if(e.key==="Escape")setOpen(false);};document.addEventListener("keydown",onKey);return()=>document.removeEventListener("keydown",onKey);},[open]);
 if(!selected.length)return null;
 return <><div className={css.dock} aria-live="polite"><div className={css.inner}><div className={css.summary}><span aria-hidden="true">✳</span><div><strong>{selected.length} / 3 campers selected</strong><small>Find your perfect fit, side by side.</small></div></div><div className={css.thumbs}>{selected.map(camper=><div key={camper.id} className={css.thumb}><img src={camper.gallery?.[0]?.thumb||camper.gallery?.[0]?.original} alt=""/><span>{camper.name}</span><button type="button" onClick={()=>remove(camper.id)} title={"Remove "+camper.name} aria-label={"Remove "+camper.name}>×</button></div>)}</div><button type="button" className={css.compare} onClick={()=>setOpen(true)} disabled={selected.length<2}>Compare now ↗</button><button type="button" className={css.clear} onClick={clear}>Clear</button></div></div>
 {open&&<div className={css.overlay} onMouseDown={e=>{if(e.target===e.currentTarget)setOpen(false);}}><section className={css.modal} role="dialog" aria-modal="true" aria-label="Compare selected campervans"><div className={css.modalHeader}><div><p className="ww-eyebrow">THE SIDE-BY-SIDE EDIT</p><h2 className="ww-serif">Find your <em>best fit.</em></h2><p>Compare features and prices before imagining your next escape.</p></div><button type="button" aria-label="Close comparison" onClick={()=>setOpen(false)}>✕</button></div><div className={css.scroll}><table><thead><tr><th scope="col">THE DETAILS</th>{selected.map(c=><th scope="col" key={c.id}><Link onClick={()=>setOpen(false)} to={"/catalog/"+c.id}><img src={c.gallery?.[0]?.thumb||c.gallery?.[0]?.original} alt={c.name}/><strong>{c.name}</strong></Link></th>)}</tr></thead><tbody>{values.map(([label,format])=><tr key={label}><th scope="row">{label}</th>{selected.map(c=><td key={c.id}>{format(c)}</td>)}</tr>)}</tbody></table></div><div className={css.modalFooter}><span>Prices are indicative, not an offer. No live availability is checked.</span><button type="button" onClick={()=>setOpen(false)}>Continue exploring ↗</button></div></section></div>}
 </>;
}
