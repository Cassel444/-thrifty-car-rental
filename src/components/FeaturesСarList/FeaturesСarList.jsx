import DetailBig from "../DetailBig/DetailBig.jsx";
import css from "./FeaturesСarList.module.css";


function FeaturesСarList({ camper }) {
    return (
      <div className={css.filterWrapper}>
        {camper.transmission && (
          <DetailBig
          iconId="icon-transmission"
          text={`${camper.transmission.charAt(0).toUpperCase() + camper.transmission.slice(1)}`} />
        )}
        {camper.engine && (
          <DetailBig
          iconId="icon-engine"
          text={`${camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1)}`} />
        )}
        {camper.kitchen && (
          <DetailBig iconId="icon-kitchen" text="Kitchen" />
        )}
        {camper.AC && (
          <DetailBig iconId="icon-ac" text="AC" />
        )}
        {camper.TV && (
          <DetailBig iconId="icon-tv" text="TV" />
        )}
        {camper.bathroom && (
          <DetailBig iconId="icon-bathroom" text="Bathroom" />
        )}
        {camper.radio && (
          <DetailBig iconId="icon-radio" text="Radio" />
        )}
      </div>
    );
  };
export default FeaturesСarList;