import { useSelector } from "react-redux";
import css from "./CampersList.module.css";
import { selectCampers } from "../../redux/campers/selectors.js";
import CamperCard from "../CamperCard/CamperCard.jsx";
// import Features from "../Features/Features.jsx";

// const defaultImg = "/img/white-sedan-car-isolated-white-background.png"

function CampersList() {
    const campers = useSelector(selectCampers);
    return (
      <ul className={css.list}>
        {campers.map((camper) => {
          return (
           <li key={camper.id} className={css.item}>
            {<CamperCard camper={camper} />}
           </li>
          );
        })}
      </ul>
    );
}
export default CampersList;
