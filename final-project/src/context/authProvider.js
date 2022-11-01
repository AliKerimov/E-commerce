import { createContext, useState, useContext } from "react";
import axios from "../API/api";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const user = JSON.parse(localStorage.getItem("auth"));
  const [auth, setAuth] = useState({
    auth: user?.token ? true : "",
    profile: user?.token ? user.user : null,
    token: user?.token ? user?.token : "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function signUp(formData, navigate) {
    if (formData) {
      try {
        const { data } = await axios.post("/user/signup", formData);
        localStorage.setItem("auth", JSON.stringify(data));
        setAuth({ auth: true, token: data.token, profile: data.user });
        console.log(auth);
        // const { data } = await axios.post("/orders", formData);
        navigate("/my-profile");
      } catch (error) {
        console.log(error);
        setError(error.message);
        // console.log(error);
        return error;
      }
    }

  }
  async function login(formData, navigate) {
    if(formData){
      try {
        const { data } = await axios.post("/user/login", formData);
        localStorage.setItem("auth", JSON.stringify(data));
        setAuth({ auth: true, token: data.token, profile: data.user });
        navigate("/my-profile");
      } catch (error) {
        // setError(error.message);
        // console.log(error);
        return error;
      }
    }
  }
  const provider = { loading, error, auth, signUp, login };
  return (
    <AuthContext.Provider value={provider}>{children}</AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
