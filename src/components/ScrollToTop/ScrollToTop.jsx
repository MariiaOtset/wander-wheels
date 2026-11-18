import {useLayoutEffect} from "react";
import {useLocation} from "react-router-dom";

/**
 * Start each routed page at the top. Only pathname changes trigger this:
 * filtering, pagination and in-page anchors keep their own scroll behaviour.
 */
export default function ScrollToTop(){
 const {pathname}=useLocation();
 useLayoutEffect(()=>{
  const root=document.documentElement;
  const previous=root.style.scrollBehavior;
  root.style.scrollBehavior="auto";
  window.scrollTo(0,0);
  root.style.scrollBehavior=previous;
 },[pathname]);
 return null;
}
