import css from "./SearchForm.module.css";
import { Formik, Form, Field } from "formik";

const SearchForm = () => {
  return (
    <Formik>
      <Form>
        {/* Location filter */}
        <div>
          <Field className={css.input} />
        </div>
      </Form>
    </Formik>
  );
};

export default SearchForm;
