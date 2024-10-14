import css from "./DetailBig.module.css";


function DetailBig({ iconId, text }) {
    return (
        <div className={css.features}>
          <svg className={css.icon}>
            <use href={`/sprite.svg#${iconId}`} /> 
          </svg>
          <p className={css.text}>{text}</p>
        </div>
      );
}
export default DetailBig;