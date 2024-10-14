import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
// import Calendar from "react-calendar";
import Button from "../Button/Button.jsx";
import css from "./ReservationForm.module.css";
// import { ErrorMessage, Field, Form, Formik } from "formik";

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

  const handleSubmit = (values) => {
    try {
      console.log(values);
      toast.success();
    } catch (error) {
      console.log(error);
    }
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
          {/* <ErrorMessage /> */}
        </div>
        <div className={css.inputWrapper}>
          <Field
            placeholder="Email*"
            className={css.input}
            name="email"
            type="email"
          />
          {/* <ErrorMessage /> */}
        </div>
        <div className={css.inputWrapper}>
          <Field
            placeholder="Booking Date*"
            className={css.input}
            name="bookingDate"
          />{" "}
          {/* <Calendar className={css.calendar}/> */}
          {/* <ErrorMessage /> */}
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
