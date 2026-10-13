import css from "./CatalogPage.module.css";
import CampersList from "../../components/CampersList/CampersList.jsx";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { fetchCampers } from "../../redux/campers/operations.js";
import { resetItems } from "../../redux/campers/slice.js";
import { searchParamsNames } from "../../constants/index.js";
import { useSearchParams } from "react-router-dom";
import {
  selectError,
  selectLoading,
  selectNotFound,
  selectShownMoreBtn,
  selectTotal,
} from "../../redux/campers/selectors.js";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import NotFound from "../../components/NotFound/NotFound.jsx";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent.jsx";

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const loading = useSelector(selectLoading);
  const shownMoreBtn = useSelector(selectShownMoreBtn);
  const total = useSelector(selectTotal);
  const isNotFound = useSelector(selectNotFound);
  const isError = useSelector(selectError);

  const [params] = useSearchParams();
  const memoizedParamObject = useMemo(() => {
    const paramObject = {};

    searchParamsNames.forEach((item) => {
      paramObject[item] = params.get(item);
    });

    return paramObject;
  }, [params]);

  const dispatch = useDispatch();
  useEffect(() => {
    async function name() {
      await dispatch(fetchCampers({ page, ...memoizedParamObject }));
    }
    name();
  }, [dispatch, page, memoizedParamObject]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const onSearch = () => {
    dispatch(resetItems());
    setPage(1);
  };

  return (
    <div className={css.catalogPage}>
      <aside className={css.filtersArea} aria-label="Catalog filters">
        <button
          type="button"
          className={css.filtersToggle}
          aria-expanded={filtersOpen}
          aria-controls="catalog-filter-controls"
          onClick={() => setFiltersOpen((open) => !open)}
        >
          <span>Filters</span>
          <span className={css.toggleIndicator} aria-hidden="true">{filtersOpen ? "−" : "+"}</span>
        </button>
        <div
          id="catalog-filter-controls"
          className={`${css.filtersPanel} ${filtersOpen ? css.filtersExpanded : ""}`}
        >
          <SearchForm onSearch={onSearch} />
        </div>
      </aside>
      <div className={css.listWrapper}>
        {!isError && !isNotFound && (
          <CampersList handleLoadMore={handleLoadMore} />
        )}
        {loading && <Loader />}
        {!loading && shownMoreBtn && <LoadMoreBtn onClick={handleLoadMore} />}
        {total === 0 && !loading && !isError && <div className={css.emptyState}><h2>No campers found</h2><p>Try a different vehicle type, location, or equipment filter.</p></div>}
        {isNotFound && !loading && <NotFound />}
        {isError && !loading && <ErrorComponent />}
      </div>
    </div>
  );
};

export default CatalogPage;
