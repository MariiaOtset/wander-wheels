import css from "./CatalogPage.module.css";
import CampersList from "../../components/CampersList/CampersList.jsx";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";

const CatalogPage = () => {
  return (
    <div className={css.catalogPage}>
      <SearchForm />
      <CampersList />
    </div>
  );
};

export default CatalogPage;
