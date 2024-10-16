import css from "./SearchForm.module.css";
import { Formik, Form, Field } from "formik";
import sprite from "../../images/sprite.svg";
import Button from "../Button/Button.jsx";
import { useSearchParams } from "react-router-dom";
import {
  equipmentName,
  equipmentOptions,
  vehicleTypeOptions,
  searchParamsNames,
} from "../../constants/index.js";
import { toCamelCase } from "../../utils/toCamelCase.js";
import { useSelector } from "react-redux";
import { selectButtonDisabled } from "../../redux/campers/selectors";
import { deepEqual } from "../../utils/compareTwoObjects";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

const SearchForm = ({ onSearch }) => {
  const isDisabled = useSelector(selectButtonDisabled);
  const [params, setParams] = useSearchParams();
  const paramObject = {};

  searchParamsNames.forEach((item) => {
    paramObject[item] = params.get(item);
  });

  const getInitialEquipment = () => {
    const initialArray = [];
    for (let key in paramObject) {
      if (key === "transmission") {
        initialArray.push(capitalizeFirstLetter(paramObject[key]));
      }
      if (paramObject[key]) {
        initialArray.push(capitalizeFirstLetter(key));
      }
    }
    return initialArray;
  };

  const getInitialVehicleType = () => {
    let initialValue = "";

    if (paramObject.form) {
      initialValue = capitalizeFirstLetter(paramObject.form);
    }

    return initialValue;
  };

  const initialValues = {
    equipment: getInitialEquipment(),
    vehicleType: getInitialVehicleType()
      .replace(/([A-Z])/g, " $1")
      .trim(),
    location: paramObject.location || "",
  };

  const handleSubmit = (values) => {
    const { equipment, vehicleType, location } = values;

    searchParamsNames.forEach((item) => params.delete(item));

    equipment.forEach((item) => {
      switch (item) {
        case equipmentName.AC:
          params.set(equipmentName.AC, true);
          break;
        case equipmentName.TV:
          params.set(equipmentName.TV, true);
          break;
        case equipmentName.Bathroom:
          params.set(equipmentName.Bathroom.toLowerCase(), true);
          break;
        case equipmentName.Kitchen:
          params.set(equipmentName.Kitchen.toLowerCase(), true);
          break;
        case equipmentName.Automatic:
          params.set("transmission", equipmentName.Automatic.toLowerCase());
          break;
        case equipmentName.Radio:
          params.set(equipmentName.Radio.toLowerCase(), true);
          break;
        case equipmentName.Refrigerator:
          params.set(equipmentName.Refrigerator.toLowerCase(), true);
          break;
        case equipmentName.Microwave:
          params.set(equipmentName.Microwave.toLowerCase(), true);
          break;
        case equipmentName.Petrol:
          params.set(equipmentName.Petrol.toLowerCase(), true);
          break;
        case equipmentName.Water:
          params.set(equipmentName.Water.toLowerCase(), true);
          break;
        default:
          break;
      }
    });

    if (vehicleType.trim() !== "") {
      params.set("form", toCamelCase(vehicleType));
    }

    if (location.trim() !== "") {
      params.set("location", location);
    }

    const newParamsObject = {};
    searchParamsNames.forEach((item) => {
      newParamsObject[item] = params.get(item);
    });

    setParams(params);
    if (deepEqual(paramObject, newParamsObject)) return;

    onSearch();
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
            id="location"
          />
          <svg
            className={`${css.locationIcon} ${css.filled}`}
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
            {equipmentOptions.map((option) => (
              <div key={option}>
                <Field
                  type="checkbox"
                  className={css.options}
                  id={option}
                  value={option}
                  name="equipment"
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
            {vehicleTypeOptions.map((option) => (
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
        <Button text="Search" isDisabled={isDisabled} />
      </Form>
    </Formik>
  );
};

export default SearchForm;
