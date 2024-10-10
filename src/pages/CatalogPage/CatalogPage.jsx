import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CampersList from "../../components/CampersList/CampersList.jsx";
import { getAllCampers } from "../../redux/campers/operation.js";
import Loader from "../../components/Loader/Loader.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import css from "./CatalogPage.module.css";

function CatalogPage() {

  const dispatch = useDispatch();
  const { items: campers, isLoading, error } = useSelector((state) => state.campers);
  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

    return (
    <div className={css.catalogPage}>
        {isLoading ? (
        <Loader /> 
      ) : error ? (
        <div>Error: {error}</div> 
      ) : campers.length > 0 ? (
      <CampersList campers={campers} />
    ) : (
      <NotFound /> 
    )}
    </div>
    );
  }
export default CatalogPage;