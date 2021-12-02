import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "the name is very short")
    .required("The name is requited"),
  price: Yup.number("Type only numbers")
    .min(1, "The price must be at least 1")
    .required("The prince is requited"),
  category: Yup.string().required("The category is requited"),
  // image: Yup.string().required("One image is requited"),
  description: Yup.string().required("The category is requited"),
});
export default function index() {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      category: "1",
      image: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="w-1/3 mx-auto">
      <h2 className="text-center pt-10 text-lg font-semibold text-gray-700">
        New Dish
      </h2>
      <form onSubmit={formik.handleSubmit}>
        {/* name */}
        <div className="mb-4">
          <label className="text-gray-700 dark:text-gray-200">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="type name dish"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        {/* error name */}
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-600 mb-2">{`* ${formik.errors.name}`}</div>
        ) : null}
        {/* price */}
        <div className="mb-4">
          <label className="text-gray-700 dark:text-gray-200">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            placeholder="$40"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        {/* error name */}
        {formik.touched.price && formik.errors.price ? (
          <div className="text-red-600 mb-2">{`* ${formik.errors.price}`}</div>
        ) : null}

        {/* Category */}
        <div className="mb-4">
          <label className="text-gray-700 dark:text-gray-200">Category</label>
          <select
            id="category"
            name="category"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          >
            <option value="0">Fast Food</option>
            <option value="1">Vegand Food</option>
          </select>
        </div>

        {/* error name */}
        {formik.touched.category && formik.errors.category ? (
          <div className="text-red-600 mb-2">{`* ${formik.errors.category}`}</div>
        ) : null}

        {/* attach image */}

        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Attach Image
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center  cursor-pointer">
              <div className="h-full w-full text-center flex flex-col  justify-center items-center  ">
                <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                  <img
                    className="has-mask h-36 object-center"
                    src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                    alt="freepik image"
                  />
                </div>
                <p className="pointer-none text-gray-500 ">
                  <span className="text-sm">Click here to upload an image</span>
                </p>
              </div>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image}
                name="image"
                id="image"
                type="file"
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="text-gray-700 dark:text-gray-200">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          ></textarea>
        </div>
        {/* error description */}
        {formik.touched.description && formik.errors.description ? (
          <div className="text-red-600 mb-2">{`* ${formik.errors.description}`}</div>
        ) : null}

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
