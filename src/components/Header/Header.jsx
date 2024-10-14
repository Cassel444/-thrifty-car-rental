import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";
const makeLinksClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
};

function Header() {
  return (
    <div className={`${css.container} ${css.header}`}>
        <a href="./index.html">
            <svg className={css.mainLogo}>
                <use href="/sprite.svg#icon-Logo-1"></use>
            </svg>
        </a>  
        <div className={css.box}>
        <NavLink to="/" className={makeLinksClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={makeLinksClass}>
          Catalog
        </NavLink>
        </div>
    </div>
  );
}
export default Header;