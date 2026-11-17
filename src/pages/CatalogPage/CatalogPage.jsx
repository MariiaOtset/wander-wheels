import {useEffect,useMemo,useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import CampersList from "../../components/CampersList/CampersList.jsx";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import CamperSkeleton from "../../components/CamperSkeleton/CamperSkeleton.jsx";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent.jsx";
import {fetchCampers} from "../../redux/campers/operations.js";
import {resetItems} from "../../redux/campers/slice.js";
import {searchParamsNames} from "../../constants/index.js";
import {selectLoading,selectError,selectTotal,selectShownMoreBtn} from "../../redux/campers/selectors.js";
import css from "./CatalogPage.module.css";
const sorts=[{value:"featured",label:"Recommended"},{value:"price-asc",label:"Price: low to high"},{value:"price-desc",label:"Price: high to low"},{value:"rating-desc",label:"Top rated"}];
const labels={AC:"Air conditioning",TV:"TV",form:"Vehicle type",location:"Location",transmission:"Automatic",engine:"Petrol",bathroom:"Shower"};
export default function CatalogPage(){
 const [params,setParams]=useSearchParams();
 const key=params.toString();
 const [pageState,setPageState]=useState({key,number:1});
 const [filtersOpen,setFiltersOpen]=useState(false);
 const dispatch=useDispatch();
 const loading=useSelector(selectLoading),error=useSelector(selectError),total=useSelector(selectTotal),hasMore=useSelector(selectShownMoreBtn);
 const query=useMemo(()=>new URLSearchParams(key),[key]);
 const active=searchParamsNames.filter(name=>query.get(name)).map(name=>({name,value:query.get(name),label:labels[name] || name.charAt(0).toUpperCase()+name.slice(1)}));
 const sort=query.get("sort") || "featured";
 useEffect(()=>{
   if(pageState.key!==key){dispatch(resetItems());setPageState({key,number:1});return;}
   const filters={};searchParamsNames.forEach(name=>{const value=query.get(name);if(value)filters[name]=value;});
   const sortArgs=sort==="featured"?{}:{sortBy:sort.startsWith("price")?"price":"rating",order:sort.endsWith("asc")?"asc":"desc"};
   dispatch(fetchCampers({page:pageState.number,...filters,...sortArgs}));
 },[dispatch,key,pageState,query,sort]);
 const removeTag=name=>{const next=new URLSearchParams(query);next.delete(name);setParams(next);};
 const clear=()=>{const next=new URLSearchParams();if(sort!=="featured")next.set("sort",sort);setParams(next);};
 const onSort=e=>{const next=new URLSearchParams(query);if(e.target.value==="featured")next.delete("sort");else next.set("sort",e.target.value);setParams(next);};
 return <main className={css.page}>
  <div className={css.heading}><div><p className="ww-eyebrow">FIND YOUR FREEDOM</p><h1 className="ww-serif">A camper for <em>every journey.</em></h1><p>Find your favourite home on wheels. Explore 22 illustrated demo camper profiles, compare the essentials and plan a possible adventure. Vehicle details and prices are examples, not live rentals.</p></div><span>THE COLLECTION / EXPLORE</span></div>
  <div className={css.layout}>
   <aside className={css.filters} aria-label="Filter campers"><button type="button" className={css.filtersToggle} aria-expanded={filtersOpen} aria-controls="filter-content" onClick={()=>setFiltersOpen(o=>!o)}>Filters & preferences <span>{filtersOpen?"−":"+"}</span></button><div className={css.filterContent+(filtersOpen?" "+css.open:"")} id="filter-content"><div className={css.filterIntro}><h2>Make it yours</h2><p>Filter by your favourite features.</p></div><SearchForm/></div></aside>
   <section className={css.results} aria-label="Camper collection">
    <div className={css.toolbar}><div><span className={css.counter}>{total===null?"Explore the collection":total+" camper"+(total===1?"":"s")+" to explore"}</span><h2>Explore available campers</h2></div><label className={css.sort}>SORT BY <select aria-label="Sort campers" value={sort} onChange={onSort}>{sorts.map(s=><option key={s.value} value={s.value}>{s.label}</option>)}</select></label></div>
    {active.length>0&&<div className={css.activeFilters} aria-label="Active filters">{active.map(a=><button key={a.name} type="button" onClick={()=>removeTag(a.name)} title={"Remove "+a.label}>{a.label}{a.value!=="true"&&a.name!=="transmission"&&a.name!=="engine"?": "+a.value:""} <span aria-hidden="true">×</span></button>)}<button className={css.clear} onClick={clear} type="button">Clear all</button></div>}
    <CampersList/>
    {loading&&<div className={css.loading}>{total===null?<CamperSkeleton count={3}/>:<Loader/>}</div>}
    {!loading&&error&&<ErrorComponent/>}
    {!loading&&!error&&total===0&&<div className={css.empty}><span aria-hidden="true">⌕</span><h3>No campers match these filters</h3><p>Try a different city, vehicle type, or fewer features.</p><button type="button" className="ww-btn" onClick={clear}>Clear filters</button></div>}
    {!loading&&!error&&hasMore&&<div className={css.more}><LoadMoreBtn onClick={()=>setPageState(s=>({...s,number:s.number+1}))}/></div>}
   </section>
  </div>
 </main>
}
