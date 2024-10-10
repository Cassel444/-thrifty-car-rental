import css from "./Features.module.css";


function Features({ iconId, text }) {
    return (
        <div className={css.features}>
          <svg className={css.icon}>
            <use href={`/sprite.svg#${iconId}`} /> 
          </svg>
          <p className={css.text}>{text}</p>
        </div>
      );
}
export default Features;