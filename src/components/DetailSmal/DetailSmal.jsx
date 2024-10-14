import css from "./DetailSmal.module.css";


function DetailSmal({ iconId, text, isUnderlined = false, iconColorClass}) {
    return (
        <div className={css.features}>
          <svg className={`${css.icon} ${css[iconColorClass]}`}>
            <use href={`/sprite.svg#${iconId}`} /> 
          </svg>
          <p className={`${css.text} ${isUnderlined ? css.line : ""}`}>{text}</p>
        </div>
      );
}
export default DetailSmal;