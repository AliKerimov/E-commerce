import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const basicSchema=yup.object().shape({
    name:yup.string().min(5).max(16).required("Name Required"),
    email:yup.string().email("Please enter a valid email").required("Email Required"),
    phone:yup.string().length(9).required("Phone number Required"),
    password:yup.string().min(5).matches(passwordRules,{message:"Please enter a stronger password!"}).required("Password Required"),
    confirmPassword:yup.string().oneOf([yup.ref("password"),null],"Password must match").required("Confirm Password required")

})
export const loginSchema=yup.object().shape({
    email:yup.string().email("Please enter a valid email").required("Email Required"),
    password:yup.string().min(5).matches(passwordRules,{message:"Please enter a stronger password!"}).required("Password Required")
})