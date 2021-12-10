import * as Yup from "yup";
const dishValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "the name is very short")
      .required("The name is requited"),
    price: Yup.number("Type only numbers")
      .min(1, "The price must be at least 1")
      .required("The prince is requited"),
    category: Yup.string().required("The category is requited"),
    description: Yup.string().required("The category is requited"),
  });

  export default dishValidationSchema;