import {campers} from "./campers.js";
import {searchParamsNames} from "../constants/index.js";
const features=new Set(["AC","TV","kitchen","bathroom","radio","refrigerator","microwave","gas","water"]);
const numeric=value=>Number.isFinite(Number(value))?Number(value):0;
export function findCamper(id){return campers.find(camper=>String(camper.id)===String(id))||null;}
export function selectCamperPage(params={}){
 const {page=1,limit=5,sortBy,order}=params;
 let filtered=campers.filter(camper=>searchParamsNames.every(key=>{
  const query=params[key];if(query===undefined||query===null||String(query).trim()==="")return true;
  if(key==="location")return camper.location.toLocaleLowerCase().includes(String(query).trim().toLocaleLowerCase());
  if(features.has(key))return String(Boolean(camper[key]))===String(query).toLowerCase();
  return String(camper[key]??"").toLowerCase()===String(query).trim().toLowerCase();
 }));
 if(sortBy==="price"||sortBy==="rating"){
  const dir=order==="asc"?1:-1;
  filtered=[...filtered].sort((a,b)=>dir*(numeric(a[sortBy])-numeric(b[sortBy]))||a.name.localeCompare(b.name));
 }
 const total=filtered.length;
 const currentPage=Math.max(1,Math.floor(numeric(page)||1));
 const pageSize=Math.max(1,Math.floor(numeric(limit)||5));
 return {items:filtered.slice((currentPage-1)*pageSize,currentPage*pageSize),total};
}
