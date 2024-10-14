import { NavLink } from "react-router-dom";
// import Btn from "../Btn/Btn";
import css from "./CamperCard.module.css";
import DetailSmal from "../DetailSmal/DetailSmal.jsx";
import FeaturesСarList from "../FeaturesСarList/FeaturesСarList.jsx";
import BtnHeart from "../BtnHeart/BtnHeart.jsx";
import { setFavorite } from "../../redux/favorites/slice.js";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors.js";

const defaultImg = "/img/white-sedan-car-isolated-white-background.png"

function CamperCard({camper}) {

  const dispatch = useDispatch();

  const handleSetFavorite = () => {
    dispatch(setFavorite(camper));
  };

const favorites = useSelector(selectFavorites);

const isFavorite = favorites.some(
  (item) => item.id === camper.id && item.name === camper.name
);

  return (
    <div className={css.div}>
      <img className={css.image}
        src={camper.gallery && camper.gallery[0] ? camper.gallery[0].original : defaultImg}
        alt={camper.name}
      />
        <div className={css.rightSide}>
          <div>
          <div className={css.nameDiv}>
            <p className={css.name}>{camper.name}</p>
              <div className={css.priceDiv}>
                <p className={css.price}>€{camper.price.toFixed(2)}</p>
                <BtnHeart 
                  onClick={handleSetFavorite}
                  isFavorite={isFavorite}/>
              </div>
          </div>
          <div className={css.ratingDiv}>
          <DetailSmal 
            iconId="icon-star" 
            text={`${camper.rating} (${camper.reviews.length} Reviews)`}
            isUnderlined={true} 
            iconColorClass="yellowIcon"  />
          <DetailSmal
            iconId="icon-Map" 
            text={camper.location} />
          </div>
        </div>
          <p className={css.description}>{camper.description}</p>
          <FeaturesСarList camper={camper} />
          <NavLink className={css.btn} to={`/catalog/${camper.id}`}  >
           Show more
          </NavLink>
        </div>
    </div>
      
    
  );
}
export default CamperCard;