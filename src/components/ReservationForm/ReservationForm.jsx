import {useMemo,useState} from "react";
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";
import css from "./ReservationForm.module.css";
const ONE_DAY=86400000;
const asDate=value=>value?new Date(value+"T12:00:00"):null;
const nights=(start,end)=>{const a=asDate(start),b=asDate(end);if(!a||!b)return 0;return Math.max(0,Math.round((b-a)/ONE_DAY));};
const today=()=>{const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,"0"),String(d.getDate()).padStart(2,"0")].join("-");};
const schema=Yup.object({name:Yup.string().trim().required("Enter your name"),email:Yup.string().email("Enter a valid email").required("Email is required"),start:Yup.string().required("Choose a start date"),end:Yup.string().required("Choose an end date").test("after-start","Return date must be after departure",function(v){return !v||!this.parent.start||nights(this.parent.start,v)>0;}),comment:Yup.string().max(500,"Maximum 500 characters")});
export default function ReservationForm({camper}){
 const [confirmation,setConfirmation]=useState(null);
 const min=today(),price=Number(camper?.price)||0;
 const baseValues=useMemo(()=>({name:"",email:"",start:"",end:"",comment:""}),[]);
 if(confirmation)return <div className={css.confirmation} role="status"><span aria-hidden="true">✓</span><h4>Your trip, beautifully imagined.</h4><p>This is an interactive portfolio demonstration. No booking has been submitted or reserved.</p><div><strong>{camper?.name}</strong><br/>{confirmation.start} – {confirmation.end}<br/>{confirmation.days} days · €{confirmation.total.toLocaleString("en-GB",{maximumFractionDigits:2})} estimated</div><button type="button" onClick={()=>setConfirmation(null)}>Plan another trip ↗</button></div>;
 return <Formik initialValues={baseValues} validationSchema={schema} onSubmit={(values)=>{const days=nights(values.start,values.end);if(days>0)setConfirmation({start:values.start,end:values.end,days,total:days*price});}}>
 {({values})=>{const days=nights(values.start,values.end);return <Form className={css.form} noValidate>
  <div className={css.demo}>INTERACTIVE BOOKING DEMO <span>NO PAYMENT REQUIRED</span></div>
  <div className={css.fields}>
    <label>Full name <Field name="name" placeholder="Your name" autoComplete="name"/><ErrorMessage name="name" component="small"/></label>
    <label>Email address <Field name="email" type="email" placeholder="you@example.com" autoComplete="email"/><ErrorMessage name="email" component="small"/></label>
  </div>
  <div className={css.fields}>
    <label>Departure date <Field type="date" name="start" min={min} aria-label="Departure date"/><ErrorMessage name="start" component="small"/></label>
    <label>Return date <Field type="date" name="end" min={values.start||min} aria-label="Return date"/><ErrorMessage name="end" component="small"/></label>
  </div>
  <label className={css.comment}>Anything to add? (optional) <Field as="textarea" name="comment" rows={3} placeholder="Tell us about your dream trip"/><ErrorMessage name="comment" component="small"/></label>
  <div className={css.summary}><div><span>€{price.toFixed(2)} × {days} {days===1?"day":"days"}</span><strong>{days>0?"€"+(days*price).toLocaleString("en-GB",{minimumFractionDigits:2,maximumFractionDigits:2}):"Select travel dates"}</strong></div><p>Illustrative estimate only. No taxes, fees or availability are calculated.</p></div>
  <button type="submit" className={css.submit} disabled={days<1}>Preview my trip <span>↗</span></button><p className={css.disclaimer}>This demo does not create real reservations or collect payments.</p>
 </Form>}}
 </Formik>;
}
