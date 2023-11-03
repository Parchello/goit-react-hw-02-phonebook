import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().max(50, 'Too Long!').required('Required'),
  number: Yup.number().min(10, 'Too Short!').required('Required'),
});

export const PhoneBook = ({ onAdd }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <Form>
          <label>Name</label>
          <Field id="firstName" name="name" placeholder="Place name here" />
          <ErrorMessage name="name" />

          <label>Number</label>
          <Field
            id="number"
            name="number"
            type="number"
            placeholder="Phone number"
          />
          <ErrorMessage name="number" />

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
