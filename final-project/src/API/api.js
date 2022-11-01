import axios from "axios";

// const api= axios.create({
//   baseURL: "http://localhost:5000",
//   // headers:{"X-Authorization": "pk_test_445605de7894cb6c0df4dfd963c6c3b296801684f6072"}
// });
// export default api;



const api = axios.create({
  baseURL: "http://localhost:5000"
})
api.interceptors.request.use(function (config) {

  const user = JSON.parse(localStorage.getItem("auth"));
  let sj=`Bearer ${user?.token}`
  console.log(sj);
  config.headers["Authorization"] = `Bearer ${user?.token}`;
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default api;