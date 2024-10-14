import { Field, Form, Formik } from "formik";
import Text from "../Text/Text.jsx";
import css from "./FiltersList.module.css"
import Btn from "../Btn/Btn.jsx";
import EquipmentFilters from "../EquipmentFilters/EquipmentFilters.jsx";
import VehicleTypeFilters from "../VehicleTypeFilters/VehicleTypeFilters.jsx";

function FilterList() {

  return (
  <div className={css.filterDiv}>

    <Formik
      initialValues={{
        equipment: [],
        vehicleType: "",
      }}
      onSubmit={(values, actions) => {
        console.log(values); 
        actions.setSubmitting(false);
      }}
    >
      <Form className={css.filterForm}>
        <label className={css.label} htmlFor="searchLocation">
          Location
        </label>
        <div className={css.location}>
        <svg height={20} width={20} className={css.icon}>
          <use href="/sprite.svg#icon-Map"/> 
        </svg>
        <Field
          className={css.input}
          name="searchLocation" 
          id="searchLocation" 
          placeholder="Enter your city..."
        />
        </div>

        <h4 className={css.title}>Filters</h4>
        <Text text="Vehicle equipment"/>
        <hr className={css.divider} />
        <EquipmentFilters />
        <Text text="Vehicle type"/>
        <hr className={css.divider} />
        <VehicleTypeFilters />
        <Btn text="Search" />
      </Form>
    </Formik>
  </div>
  );
}

export default FilterList;