import { NavLink } from "react-router-dom";
import css from "./NotFound.module.css";
import { TbViewfinderOff } from "react-icons/tb";

function NotFound() {
  return (
    <div className={css.notFoundBox}>
      <TbViewfinderOff
      className={css.notFoundSvg}
          />
      <p>Oops! We did not find anything!</p>
      <NavLink className={css.link} to="/">Back to Home!</NavLink>
    </div>
  );
}
export default NotFound;