"use client"
// components/MyForm.js
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Label from './label/label';
const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone:0,
      cnic:0-0-0,
      adress:'',
      province:'',
      city:'',
      country:'',
      Gender:'',
      age:'',
      DateOfBirth:0-0-0,
      



      // Add more fields here
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.number().required('number is required'),
      cnic: new Yup.NumberSchema().required('CNIC is required'),
      adress: Yup.string().required('Adress is required'),
      province: Yup.string().required('province is required'),
      city: Yup.string().required('City is required'),
      country: Yup.string().required('Country is required'),
      Gender: Yup.string().required('Gender is required'),
      age: Yup.number().required('age is required'),
      DateOfBirth: new Yup.NumberSchema().required('Date of birth is required'),
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
        /><br/>
        </div>
        <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        /><br/>
        </div>
        <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
        <input
          type="number"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        /><br/>
        </div>
        <div className="mb-4">
        <label htmlFor="cnic" className="block text-gray-700 text-sm font-bold mb-2">CNIC</label>
        <input
          type="NumberSchema"
          id="cnic"
          name="cnic"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cnic}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        /><br/>
        </div>
        <div className="mb-4">
        <label htmlFor="adress" className="block text-gray-700 text-sm font-bold mb-2">Adress</label>
        <input
          type="text"
          id="adress"
          name="adress"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.adress}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        /><br/>
        </div>
        <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Province</label>
        <input
          type="text"
          id="name"
          name="province"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.province}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        /><br/>
        </div>
        <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">City</label>
        <input
          type="text"
          id="name"
          name="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        /><br/>
        </div>
        <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
        <input
          type="text"
          id="name"
          name="Gender"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Gender}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        /><br/>
        </div>
        <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Age</label>
        <input
          type="number"
          id="name"
          name="age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        /><br/>
        </div>
        <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Date of birthS</label>
        <input
          type="NumberSchema"
          id="DateOfBrith"
          name="DateOfBrith"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.DateOfBirth}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        /><br/>

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
