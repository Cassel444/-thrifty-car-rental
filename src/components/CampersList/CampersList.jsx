import css from "./CampersList.module.css";
import CamperCard from "../CamperCard/CamperCard.jsx";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors.js";



function CampersList() {
  const campers = useSelector(selectCampers);

  return (
    <ul className={css.list}>
      {campers.map((camper) => (
        <li key={camper.id} className={css.item}>
          <CamperCard camper={camper} />
        </li>
))}
    </ul>
  );
}
export default CampersList;
