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
          <label>First Name</label>
          <Field id="firstName" name="name" placeholder="Jane" />
          <ErrorMessage name="name" />

          <label>Last Name</label>
          <Field id="number" name="number" type="number" placeholder="Doe" />
          <ErrorMessage name="number" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
