import css from "./Btn.module.css";


function Btn ({ text, onClick }) {
    return (
        <button className={css.btn} onClick={onClick}>
            {text}
        </button>
      );
}
export default Btn;
