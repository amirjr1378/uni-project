import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const ExitLink = () => {
  const navigate = useNavigate();
  const [, setCookies] = useCookies();

  return (
    <div
      className={
        "text-[13px] font-medium underline underline-1 text-gray-400 cursor-pointer"
      }
      onClick={() => {
        setCookies("Auth", undefined);
        navigate("/");
      }}
    >
      خروج
    </div>
  );
};
export default ExitLink;
