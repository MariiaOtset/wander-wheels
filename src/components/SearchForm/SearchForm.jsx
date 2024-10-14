import css from "./SearchForm.module.css";
import { Formik, Form, Field } from "formik";
import sprite from "../../images/sprite.svg";
import { useState } from "react";
import Button from "../Button/Button.jsx";

const SearchForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const vehicleEquipment = ["AC", "Automatic", "Kitchen", "TV", "Bathroom"];
  const vehicleType = ["Van", "Fully Integrated", "Alcove"];

  const initialValues = {
    vehicleEquipment: [],
    vehicleType: "",
    location: "",
  };

  const handleSubmit = (values) => {
    const { vehicleEquipment, vehicleType, location } = values;
    console.log("values", values);
    //  dispatch(chooseLocation(values.location));
    //  dispatch(setEquipmentFilter(values.equipment));
    //  dispatch(setVechicleType(values.form));
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        {/* Location */}
        <label htmlFor="location" className={css.greyText}>
          Location
        </label>
        <div className={css.locationWrapper}>
          <Field
            className={`${css.inputLocation} ${css.inputFocus}`}
            name="location"
            placeholder="City"
            onChange={handleChange}
          />
          <svg
            className={`${css.locationIcon} ${value ? css.filled : ""}`}
            width="20"
            height="20"
          >
            <use href={`${sprite}#icon-map`}></use>
          </svg>
        </div>

        {/* Vehicle equipment filters */}
        <p className={css.generalText}>Filters</p>
        <div>
          <h3 className={css.vehicleTitle}>Vehicle equipment</h3>
          <span className={css.bottomLine}></span>
          <div className={css.vehicleOptions}>
            {vehicleEquipment.map((option) => (
              <div key={option}>
                <Field
                  type="checkbox"
                  className={css.options}
                  id={option}
                  value={option}
                  name="vehicleEquipment"
                ></Field>
                <label htmlFor={option} className={css.optionLabel}>
                  <svg width="32" height="32">
                    <use
                      href={`${sprite}#icon-${option
                        .toLowerCase()
                        .replaceAll(" ", "")}`}
                    ></use>
                  </svg>
                  <span className={css.optionsGap}>{option}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle type filters */}
        <div>
          <h3 className={css.vehicleTitle}>Vehicle type</h3>
          <span className={css.bottomLine}></span>
          <div className={css.vehicleOptions}>
            {vehicleType.map((option) => (
              <div key={option}>
                <Field
                  type="radio"
                  className={css.options}
                  id={option}
                  value={option}
                  name="vehicleType"
                ></Field>
                <label htmlFor={option} className={css.optionLabel}>
                  <svg width="32" height="32">
                    <use
                      href={`${sprite}#icon-${option
                        .toLowerCase()
                        .replaceAll(" ", "")}`}
                    ></use>
                  </svg>
                  <span className={css.optionsGap}>{option}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <Button text="Search" />
      </Form>
    </Formik>
  );
};

export default SearchForm;
