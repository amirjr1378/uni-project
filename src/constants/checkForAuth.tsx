import { ReactNode, useEffect } from "react";
import { useCookies } from "react-cookie";
import ApiInstance from "../api/axiosInstance";

const CheckForAuth = ({ children }: { children: ReactNode }) => {
  const [getCookies, setCookies] = useCookies();

  useEffect(() => {
    console.log("cookies", getCookies.Auto, JSON.stringify(getCookies.Auth));
    ApiInstance.defaults.headers.common.Authorization =
      "Bearer " + getCookies.Auth;
  }, [getCookies]);
  return <> {children}</>;
};
export default CheckForAuth;
