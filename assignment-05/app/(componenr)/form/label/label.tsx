import MyForm from "../form"
import { useFormik } from 'formik';
export default function Label(){

return(<><label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label><input
    type="text"
    id="name"
    name="name"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.name}
    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" /><br /></>)}