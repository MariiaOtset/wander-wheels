import {Formik,Form,Field} from "formik";
import {useSearchParams} from "react-router-dom";
import {equipmentOptions,vehicleTypeOptions,searchParamsNames} from "../../constants/index.js";
import {toCamelCase} from "../../utils/toCamelCase.js";
import css from "./SearchForm.module.css";
import {campers} from "../../data/campers.js";
const queryName={"Shower":"bathroom","Automatic":"transmission","Petrol":"engine","AC":"AC","TV":"TV"};
const paramName=name=>queryName[name]||name.toLowerCase();
export default function SearchForm(){
 const [params,setParams]=useSearchParams();
 const selectedEquipment=equipmentOptions.filter(option=>{const value=params.get(paramName(option));return option==="Automatic"?value==="automatic":option==="Petrol"?value==="petrol":value==="true";});
 const initialValues={equipment:selectedEquipment,vehicleType:vehicleTypeOptions.find(type=>toCamelCase(type)===params.get("form"))||"",location:params.get("location")||""};
 const submit=({equipment,vehicleType,location})=>{
  const next=new URLSearchParams(params);
  searchParamsNames.forEach(name=>next.delete(name));
  equipment.forEach(option=>next.set(paramName(option),option==="Automatic"?"automatic":option==="Petrol"?"petrol":"true"));
  if(vehicleType)next.set("form",toCamelCase(vehicleType));
  if(location.trim())next.set("location",location.trim());
  setParams(next);
 };
 return <Formik enableReinitialize initialValues={initialValues} onSubmit={submit}>
  {({resetForm,dirty})=><Form className={css.form}>
   <label className={css.locationLabel} htmlFor="location">Destination</label>
   <Field className={css.location} name="location" placeholder="City or location" id="location" list="camper-destinations"/><datalist id="camper-destinations">{[...new Set(campers.map(c=>c.location))].sort().map(location=><option key={location} value={location}/>)}</datalist>
   <div className={css.divider}/>
   <h3 className={css.sectionTitle}>Amenities</h3>
   <div className={css.equipment}>{equipmentOptions.map(option=><label key={option} className={css.option}><Field type="checkbox" name="equipment" value={option}/><span>{option}</span></label>)}</div>
   <div className={css.divider}/>
   <h3 className={css.sectionTitle}>Vehicle type</h3>
   <div className={css.types}>{vehicleTypeOptions.map(type=><label key={type} className={css.option}><Field name="vehicleType" type="radio" value={type}/><span>{type}</span></label>)}</div>
   <button className={css.submit} type="submit">Show campers <span aria-hidden="true">↗</span></button>
   {dirty&&<button type="button" className={css.reset} onClick={()=>resetForm()}>Reset unsaved changes</button>}
  </Form>}
 </Formik>
}
