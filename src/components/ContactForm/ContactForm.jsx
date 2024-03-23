import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const contactFormScheme = Yup.object().shape({
  contactName: Yup.string()
    .required("Name is required!")
    .min(3, "Too short")
    .max(50, "Too long"),
  contactNumber: Yup.string()
    .required("Number is required!")
    .min(3, "Too short")
    .max(50, "Too long"),
});

const FORM_INITIAL_VALUES = {
  contactName: "",
  contactNumber: "",
};

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, actions) => {
    addContact(values);
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationScheme={contactFormScheme}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <span>Name</span>
            <Field type="text" name="contactName"></Field>
            <ErrorMessage component="p" name="contactName" />
          </label>
          <label>
            <span>Number</span>
            <Field type="text" name="contactNumber"></Field>
            <ErrorMessage component="p" name="contactNumber" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
