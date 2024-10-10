import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import css from "./CamperCard.module.css";

function CamperCard({camper}) {
    const navigate = useNavigate();

  return (
    <>
      <img className={css.image} src={camper.gallery[0].original} />
      <div className={css.info}>
        <div className={css.firstLineWrapper}>
          <p className={css.name}>{camper.name}</p>
          <p className={css.price}>€{camper.price}.00</p>
        </div>
        <Button
          text="Show more"
          onClick={() => navigate(`/catalog/${camper.id}`)}
        />
      </div>
    </>
  );
}
export default CamperCard;