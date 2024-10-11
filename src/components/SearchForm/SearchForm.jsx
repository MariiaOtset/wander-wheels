import css from "./SearchForm.module.css";
import { Formik, Form, Field } from "formik";
import sprite from "../../images/sprite.svg";
import { useState } from "react";

const SearchForm = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Formik>
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

        {/* Filters */}
        <div></div>
      </Form>
    </Formik>
  );
};

export default SearchForm;
