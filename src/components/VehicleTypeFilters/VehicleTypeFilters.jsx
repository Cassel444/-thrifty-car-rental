import { Field } from "formik";
import css from "./VehicleTypeOptions.module.css";
import { vehicleTypeOptions } from "../../constants/constants.js";

function VehicleTypeFilters() {
    return (
        <div className={css.options}>
            {vehicleTypeOptions.map((type) => (
                <div key={type} className={css.box}>
                    <Field
                        className={css.input} 
                        type="checkbox"
                        name="vehicleType"
                        value={type}
                        id={type}
                    />
                    <label className={css.label} htmlFor={type}>
                        <svg height={32} width={32} className={css.svg}>
                            <use href={`/sprite.svg#icon-${type.toLowerCase().replaceAll(" ", "")}`} />
                        </svg>
                        <span>{type}</span>
                    </label>
                </div>
            ))}
        </div>
    );
}

export default VehicleTypeFilters;