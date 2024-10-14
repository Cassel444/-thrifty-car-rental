import clsx from "clsx";
import css from "./BtnHeart.module.css";

const BtnHeart = ({ onClick, isFavorite }) => {
  const makeLinksClass = clsx(css.icon, isFavorite && css.favorite);

  return (
    <button type="button" onClick={onClick} className={css.button}>
      <svg className={makeLinksClass}>
        <use href={"/public/sprite.svg#icon-heart"} />
      </svg>
    </button>
  );
};

export default BtnHeart;