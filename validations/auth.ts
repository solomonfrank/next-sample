import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Invalid Email format")
    .required("Email address is required")
    .min(3),
  password: yup.string().trim().required("Password is required").min(3),
});
