
import css from "./HomePage.module.css";
import { NavLink } from "react-router-dom";

function HomePage() {
    return (
        <div className={`${css.container} ${css.poster}`}>
          <h1 className={css.posterTitle}>
            Campers of your dreams
          </h1>
          <p className={css.text}>
          You can find everything you want in our catalog
          </p>
          <NavLink className={css.btn} to="/catalog">
          View Now 
          </NavLink>
        </div>
    );
  }
export default HomePage;