import css from "./BtnLoadMore.module.css";


function BtnLoadMore ({ onClick }) {
    return (
        <button className={css.btn} onClick={onClick}>
         Load more
        </button>
      );
}
export default BtnLoadMore;
