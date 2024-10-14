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
} from "../../redux/campers/selectors.js";

const CatalogPage = () => {
  const [page, setPage] = useState(1);

  const loading = useSelector(selectLoading);
  const shownMoreBtn = useSelector(selectShownMoreBtn);
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

  // useEffect(() => {
  //   dispatch(fetchCampers());
  // });

  // const handleLoadMore = () => {
  //   setPage(page + 1);
  // };

  // const onSearch = () => {
  //   dispatch(resetItems());
  //   setPage(1);
  // };

  return (
    <div className={css.catalogPage}>
      {/* <SearchForm onSearch={onSearch} />
      <CampersList handleLoadMore={handleLoadMore} /> */}
      <SearchForm onSearch={onSearch} />
      <div className={css.listWrapper}>
        {!isError && !isNotFound && (
          <CampersList handleLoadMore={handleLoadMore} />
        )}
        {!loading && shownMoreBtn && (
          <LoadMoreButton onClick={handleLoadMore} />
        )}
        {loading && <Loader />}
        {isNotFound && !loading && <NotFoundComponent />}
        {isError && !loading && <ErrorComponent />}
      </div>
    </div>
  );
};

export default CatalogPage;
