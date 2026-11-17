import {lazy,Suspense} from "react";
import {Route,Routes} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Loader from "./components/Loader/Loader.jsx";
import "./App.css";
const HomePage=lazy(()=>import("./pages/HomePage/HomePage.jsx"));
const CatalogPage=lazy(()=>import("./pages/CatalogPage/CatalogPage.jsx"));
const CamperDetailsPage=lazy(()=>import("./pages/CamperDetailsPage/CamperDetailsPage.jsx"));
const FavoritesPage=lazy(()=>import("./pages/FavoritesPage/FavoritesPage.jsx"));
const NotFound=lazy(()=>import("./components/NotFound/NotFound.jsx"));
export default function App(){return <><Header/><Suspense fallback={<Loader/>}><Routes><Route path="/" element={<HomePage/>}/><Route path="/catalog" element={<CatalogPage/>}/><Route path="/catalog/:id" element={<CamperDetailsPage/>}/><Route path="/favorites" element={<FavoritesPage/>}/><Route path="*" element={<NotFound/>}/></Routes></Suspense><Footer/></>}
