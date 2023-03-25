import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useCookies } from "react-cookie";

import addAxiosErrorInterceptor from "./axiosErrorInterceptor";
import instance from "../axiosInstance";

function AxiosInterceptorsContainer() {
  const [cookies, setCookies] = useCookies();
  console.log("cool", cookies);
  // if (keycloak?.token) {
  if (cookies) {
    instance.defaults.headers.common["Authorization"] = "Bearer " + cookies;
  }
  // } else {
  //   delete axios.defaults.headers.common["Authorization"];
  // }

  useEffect(() => {
    [instance].map(addAxiosErrorInterceptor);
  }, [instance]);

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
}

export default AxiosInterceptorsContainer;
