import LoginRegister from "../../login-register/components/LoginButton";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [cookies] = useCookies();

  return (
    <div
      className={
        "fixed sticky w-full h-navbar-height p-3 px-5 shadow-2xl bg-white overflow-hidden"
      }
    >
      {cookies.Auth ? null : <LoginRegister />}
    </div>
  );
};

export default Navbar;
