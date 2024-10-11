import css from "./SearchForm.module.css";
import { Formik, Form, Field } from "formik";
import sprite from "../../images/sprite.svg";
import { useState } from "react";
import Button from "../Button/Button.jsx";

const SearchForm = () => {
  const [value, setValue] = useState("");

  const vehicleEquipment = ["AC", "Automatic", "Kitchen", "TV", "Bathroom"];
  const vehicleType = ["Van", "Fully Integrated", "Alcove"];

  const initialValues = {
    vehicleEquipment: [],
    vehicleType: "",
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {};
  return (
    <Formik initialValues={initialValues} obSubmit={handleSubmit}>
      <Form>
        {/* Location */}
        <label htmlFor="location" className={css.greyText}>
          Location
        </label>
        <div className={css.locationWrapper}>
          <Field
            className={`${css.inputLocation} ${css.inputFocus}`}
            onChange={handleChange}
            name="location"
            id="location"
            list="location-name"
            placeholder="City"
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
