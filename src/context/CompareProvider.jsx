import {useCallback,useEffect,useMemo,useState} from "react";
import {CompareContext} from "./compare-store.js";
const key="wander-wheels-compare-v2";
function load(){try{const data=JSON.parse(localStorage.getItem(key)||"[]");return Array.isArray(data)?data.filter(x=>x&&x.id).slice(0,3):[];}catch{return [];}}
export function CompareProvider({children}){
 const [selected,setSelected]=useState(load);
 useEffect(()=>{try{localStorage.setItem(key,JSON.stringify(selected));}catch{/* Optional local storage */}},[selected]);
 const toggle=useCallback(camper=>setSelected(current=>{
  const already=current.some(item=>item.id===camper.id);
  return already?current.filter(item=>item.id!==camper.id):current.length<3?[...current,camper]:current;
 }),[]);
 const remove=useCallback(id=>setSelected(current=>current.filter(item=>item.id!==id)),[]);
 const clear=useCallback(()=>setSelected([]),[]);
 const contains=useCallback(id=>selected.some(item=>item.id===id),[selected]);
 const value=useMemo(()=>({selected,toggle,remove,clear,contains}),[selected,toggle,remove,clear,contains]);
 return <CompareContext.Provider value={value}>{children}</CompareContext.Provider>;
}
