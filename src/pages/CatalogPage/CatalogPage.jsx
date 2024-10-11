import css from "./CatalogPage.module.css";
import CampersList from "../../components/CampersList/CampersList.jsx";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations.js";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  });

  return (
    <div className={css.catalogPage}>
      <SearchForm />
      <CampersList />
    </div>
  );
};

export default CatalogPage;
