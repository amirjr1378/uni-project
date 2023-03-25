import bg from "./header.jpg";
import SearchBox from "./SearchBox";
import LoginRegister from "../login-register/components/LoginButton";
import HighestDoctors from "./highest-doctors";
import { useCookies } from "react-cookie";

const Header = () => {
  return (
    <>
      <div className={"h-screen w-screen overflow-x-hidden"}>
        <div
          className={" absolute top-0 overflow-x-hidden "}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover,contain",
            display: "block",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          {/*--------------text-------------*/}

          {/*--------------------search*/}
          {/*<div className={" mt-4 inline bg-white flex h-[40px]"}>*/}
          {/*<DoctorTypAutocomplete />*/}
          <SearchBox />
          {/*</div>*/}
        </div>
      </div>

      <HighestDoctors />
    </>
  );
};
export default Header;
