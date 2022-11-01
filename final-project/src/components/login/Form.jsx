import React from "react";
import { useState } from "react";
import { useAuth } from "../../context/authProvider";
import {useNavigate} from 'react-router-dom';
import { useFormik } from "formik";
import { loginSchema } from "../../schemas/register";
import { useContext,useEffect } from "react";
const onSubmit = async (values, actions, login) => {
  actions.resetForm();
};
function Form() {
  const { login, auth, loading } = useAuth();
  const [error,setError]=useState('');
  const navigate=useNavigate();
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });
  // // login(values)
  const  sendReq = async() => {
    if (isSubmitting === true && Object.keys(errors).length===0   ) {
      login(values,navigate);
    }
    const message=await login();
    if(isSubmitting===true){
      if(auth.token){
        setError(message);
      }
    }
    // console.log(error);
  };
  // // console.log(auth);

  // // sendReq();
  useEffect(()=>{
    sendReq();
  },[isSubmitting])
  // console.log(auth);
  return (
    <div className="signin-form">
      <p>
        <span>Qeydiyyat</span>
      </p>
      <div className="smedia-sign">
        <p>
          <svg
            className="smedia-logof"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.1667 2.91667C14.1667 2.68667 13.9792 2.5 13.75 2.5H11.6667C9.365 2.5 7.5 4.17917 7.5 6.25V8.5H5.41667C5.18667 8.5 5 8.68667 5 8.91667V11.0833C5 11.3133 5.18667 11.5 5.41667 11.5H7.5V17.0833C7.5 17.3133 7.68667 17.5 7.91667 17.5H10.4167C10.6458 17.5 10.8333 17.3133 10.8333 17.0833V11.5H13.0158C13.2033 11.5 13.3675 11.375 13.4183 11.195L14.0192 9.02833C14.0933 8.76333 13.8933 8.5 13.6183 8.5H10.8333V6.25C10.8333 5.83583 11.2058 5.5 11.6667 5.5H13.75C13.9792 5.5 14.1667 5.31333 14.1667 5.08333V2.91667Z"
              fill="white"
            />
          </svg>
          <span>Facebook ilə</span>
        </p>
        <p>
          <svg
            className="smedia-logog"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5786 11.6503C14.0236 13.4353 12.6403 14.6712 10.7995 14.9437C7.99031 15.3595 5.23198 13.2295 5.01364 10.3962C4.78698 7.45616 7.10614 5.00033 10.0003 5.00033C10.6695 5.00033 11.3078 5.13199 11.8911 5.37033C12.0936 5.45283 12.3228 5.38199 12.4261 5.19033L13.622 2.98449C13.7353 2.77366 13.6536 2.50199 13.4353 2.40366C12.3878 1.93033 11.2261 1.66699 10.0028 1.66699C5.31781 1.66699 1.53531 5.53033 1.66948 10.2445C1.79198 14.5453 5.34198 18.1437 9.63948 18.3262C14.2611 18.5212 18.0945 14.9545 18.327 10.4353C18.3361 10.2703 18.3328 9.30949 18.3295 8.74616C18.3286 8.51616 18.142 8.33366 17.9128 8.33366H10.4136C10.1836 8.33366 9.99698 8.51949 9.99698 8.75033V11.2337C9.99698 11.4628 10.1836 11.6503 10.4136 11.6503H14.5786Z"
              fill="white"
            />
          </svg>
          <span>Google ilə</span>
        </p>
      </div>
      <p className="or">və ya</p>
      <form className="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">E-mail</label>
          <input
            type="email"
            className={errors.email && touched.email ? "input-error" : ""}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            placeholder="nümunə@gmail.com"
          />
        </div>
        {errors.email && touched.email && (
            <p style={{ color: "red" }}>{errors.email}</p>
          )}
        <div className="signin-pass">
          <label htmlFor="">Şifrə</label>
          <input
            type="password"
            className={errors.password && touched.password ? "input-error" : ""}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            placeholder="Şifrənizi daxil edin"
          />

          <svg
            className="eye-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.8701 11.5001C21.2301 10.3901 17.7101 4.82012 11.7301 5.00012C6.20007 5.14012 3.00007 10.0001 2.13007 11.5001C2.0423 11.6521 1.99609 11.8246 1.99609 12.0001C1.99609 12.1757 2.0423 12.3481 2.13007 12.5001C2.76007 13.5901 6.13007 19.0001 12.0201 19.0001H12.2701C17.8001 18.8601 21.0101 14.0001 21.8701 12.5001C21.9578 12.3481 22.004 12.1757 22.004 12.0001C22.004 11.8246 21.9578 11.6521 21.8701 11.5001ZM12.2201 17.0001C7.91007 17.1001 5.10007 13.4101 4.22007 12.0001C5.22007 10.3901 7.83007 7.10012 11.8301 7.00012C16.1201 6.89012 18.9401 10.5901 19.8301 12.0001C18.8001 13.6101 16.2201 16.9001 12.2201 17.0001Z"
              fill="#828282"
            />
            <path
              d="M12 8.5C11.3078 8.5 10.6311 8.70527 10.0555 9.08986C9.47993 9.47444 9.03133 10.0211 8.76642 10.6606C8.50152 11.3001 8.4322 12.0039 8.56725 12.6828C8.7023 13.3618 9.03564 13.9854 9.52513 14.4749C10.0146 14.9644 10.6383 15.2977 11.3172 15.4327C11.9961 15.5678 12.6999 15.4985 13.3394 15.2336C13.9789 14.9687 14.5256 14.5201 14.9101 13.9445C15.2947 13.3689 15.5 12.6922 15.5 12C15.5 11.0717 15.1313 10.1815 14.4749 9.52513C13.8185 8.86875 12.9283 8.5 12 8.5ZM12 13.5C11.7033 13.5 11.4133 13.412 11.1666 13.2472C10.92 13.0824 10.7277 12.8481 10.6142 12.574C10.5007 12.2999 10.4709 11.9983 10.5288 11.7074C10.5867 11.4164 10.7296 11.1491 10.9393 10.9393C11.1491 10.7296 11.4164 10.5867 11.7074 10.5288C11.9983 10.4709 12.2999 10.5006 12.574 10.6142C12.8481 10.7277 13.0824 10.92 13.2472 11.1666C13.412 11.4133 13.5 11.7033 13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5Z"
              fill="#828282"
            />
          </svg>
          {errors.password && touched.password && (
            <p style={{ color: "red" }}>{errors.password}</p>
          )}
        </div>
        
        <button type="submit" id="signin-btn" style={{width:"100%"}} disabled={isSubmitting}>
        Qeydiyyat
          {/* <Link to="/my-profile">Qeydiyyat</Link> */}
        </button>

        {/* <div onClick={handleSubmit(formHandler)}>sign in</div> */}
      </form>
    </div>
  );
}

export default Form;
