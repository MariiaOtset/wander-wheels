import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import Button from "../Button/Button.jsx";
import css from "./ReservationForm.module.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import DatePicker from "react-datepicker";

const ReservationForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    bookingDate: Yup.date().required("Booking date is required"),
    comment: Yup.string(),
  });

  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    try {
      toast.success("Your booking has been sent successfully");
      resetForm();
    } catch (error) {
      toast.error("Something went wrong, please try again");
    }
  };

  const CustomDatePicker = ({ field, form }) => {
    const today = new Date();
    return (
      <DatePicker
        {...field}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => form.setFieldValue(field.name, val)}
        dateFormat="MMMM d, yyyy"
        minDate={today}
        placeholderText="Booking date*"
        showPopperArrow={true}
        className={css.input}
        calendarClassName={css.calendarStyles}
        popperPlacement="bottom-start"
      />
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.wrapper}>
        <div className={css.inputWrapper}>
          <Field
            placeholder="Name*"
            className={css.input}
            name="name"
            type="text"
          />
          <ErrorMessage name="name" component="div" className={css.error} />
          <Toaster position="top-right" />
        </div>
        <div className={css.inputWrapper}>
          <Field
            placeholder="Email*"
            className={css.input}
            name="email"
            type="email"
          />
          <ErrorMessage name="email" component="div" className={css.error} />
        </div>
        <div className={css.inputWrapper}>
          <Field
            placeholder="Booking Date*"
            className={`${css.input}  ${css.calendar}`}
            name="bookingDate"
            component={CustomDatePicker}
          />
          <ErrorMessage
            name="bookingDate"
            component="div"
            className={css.error}
          />
        </div>
        <div className={css.inputWrapper}>
          <Field
            as="textarea"
            placeholder="Comment"
            className={`${css.input} ${css.textarea}`}
            name="comment"
          />
        </div>

        <div className={css.btn}>
          <Button text="Send" />
        </div>
      </Form>
    </Formik>
  );
};

export default ReservationForm;
