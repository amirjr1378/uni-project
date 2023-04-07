import FetchData from "../../components/FetchData";
import BaseApi from "../../api/Api";
import { useParams } from "react-router-dom";
import header from "./assets/header.png";
import men1 from "assets/pic/men1.jpg";

const DocInfo = () => {
  const { id } = useParams();

  const fetch = async () => {
    return await BaseApi.getDoctorInfo
      .getDoctorInfoDetail("sd")
      .then((res) => res?.data)
      .catch(() => {
        return {
          id: "string | null",
          firstName: "dsf",
          lastName: "string | null",
          categotyTitle: " string | null",
          address: "address",
          city: "string | null",
          rating: "number | null",
          insurances: null,
        };
      });
  };

  return (
    <>
      <img src={header} className="w-full h-[300px]" alt="header banner" />
      <FetchData
        request={fetch}
        deps={[id]}
        handleEmptyData={false}
        handleError={false}
      >
        {(data) => {
          return (
            <div className="flex bg-white [box-shadow:0_4px_4px_rgba(0,0,0,.08)] mb-4">
              <img
                src={men1}
                className="w-[200px] h-[200px] rounded-full mt-[-100px]"
                alt="men1.jpg"
              />

              <div className="mr-4">
                <h2 className="my-4 text-base font-bold">
                  دکتر امیر حسین کریمی
                </h2>
                <h3 className="text-xs font-light">متخصص مغز و اعصاب</h3>
              </div>
            </div>
          );
        }}
      </FetchData>
    </>
  );
};
export default DocInfo;
