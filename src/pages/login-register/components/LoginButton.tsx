import { Link } from "react-router-dom";

const LoginRegister = () => {
  return (
    <div className={"w-fit my-auto mr-auto "}>
      <Link
        to={"/login"}
        className={
          "rounded-lg inline text-white bg-dark-blue border-dark-blue flex items-center justify-center text-[14px] font-normal leading-5 py-2 px-3"
        }
      >
        ورود / ثبت نام
      </Link>
    </div>
  );
};
export default LoginRegister;
