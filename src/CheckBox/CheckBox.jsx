
import { Field } from "formik"; 
import css from "./CheckBox.module.css"; 


const iconMapping = {
  Automatic: "transmission",
  Manual: "transmission",
  Diesel: "engine",
  Petrol: "engine",
  AC: "ac",
  Kitchen: "kitchen",
  TV: "tv",
  Bathroom: "bathroom",
  Radio: "radio"
};

const equipmentOptions = [
  "AC",
  ["Automatic", "Manual"], 
  "Kitchen",
  "TV",
  "Bathroom",
  "Radio",
  ["Diesel", "Petrol"] 
];

const vehicleTypeOptions = ["Van", "Fully Integrated", "Alcove"];

export function EquipmentFilters() {
  return (
    <div className={css.options}>
      {equipmentOptions.map((option) => {
        if (Array.isArray(option)) {
          return option.map((subOption) => (
            <div key={subOption}>
              <Field
                className={css.input}
                type="checkbox"
                name="equipment"
                value={subOption}
                id={subOption}
              />
              <label className={css.label} htmlFor={subOption}>
                <svg height={32} width={32}>
                  <use href={`/sprite.svg##icon-${iconMapping[subOption]}`} />
                </svg>
                <span className={css.span}>{subOption}</span>
              </label>
            </div>
          ));
        } else {
          return (
            <div key={option}>
              <Field
                className={css.input}
                type="checkbox"
                name="equipment"
                value={option}
                id={option}
              />
              <label className={css.label} htmlFor={option}>
                <svg height={32} width={32}>
                  <use href={`/sprite.svg##icon-${iconMapping[option]}`} />
                </svg>
                <span className={css.span}>{option}</span>
              </label>
            </div>
          );
        }
      })}
    </div>
  );
}



export function VehicleTypeFilters() {
    return (
      <div className={css.options}>
        {vehicleTypeOptions.map((type) => (
          <div key={type} className={css.optionWrapper}>
            <Field
              className={css.input}
              type="checkbox"
              name="vehicleType"
              value={type}
              id={type}
            />
            <label className={css.label} htmlFor={type}>
              <svg height={20} width={20}>
                <use href={`/sprite.svg#icon-${type.toLowerCase().replaceAll(" ", "")}`} />
              </svg>
              <span>{type}</span>
            </label>
          </div>
        ))}
      </div>
    );
  }
  
