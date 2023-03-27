import LoginRegister from "../../login-register/components/LoginButton";
import { useCookies } from "react-cookie";
import MyProfile from "./my-profile";

const Navbar = () => {
  const [cookies] = useCookies();

  return (
    <div
      className={
        "fixed sticky w-full h-navbar-height p-3 px-5 shadow-2xl bg-white overflow-hidden"
      }
    >
      {cookies.Auth ? null : <LoginRegister />}
      {/*{cookies.Auth ? <ExitLink /> : null}*/}
      {cookies.Auth ? <MyProfile /> : null}
    </div>
  );
};

export default Navbar;
