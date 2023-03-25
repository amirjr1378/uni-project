import { AxiosError, AxiosInstance } from "axios";
import { toast } from "react-toastify";

const addAxiosErrorInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      console.log("AXIOS ERROR", error?.response?.data);
      if (error?.response?.data) {
        toast.error(error?.response?.data as any);
      }
      return Promise.reject(error);
    }
  );
};

export default addAxiosErrorInterceptor;
