
// components/MyForm.js
import { useFormik } from 'formik';
import * as Yup from 'yup';

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      // Add more fields here
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      // Add validation for other fields
    }),
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      // You can perform further actions like submitting the data to a server
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        ) : null}
      </div>

      {/* Add more fields using a similar structure */}

      <div className="mb-4">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Submit
        </button>
      </div>
    </form>
  );
};

export default MyForm;
