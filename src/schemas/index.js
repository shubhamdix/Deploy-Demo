import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().min().max().required("Please enter your email"),
    username: Yup.string().min(2).max(25).required("Please enter your username"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "password must match"),
})