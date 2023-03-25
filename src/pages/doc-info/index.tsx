import FetchData from "../../components/FetchData";
import BaseApi from "../../api/Api";
import { useParams } from "react-router-dom";

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
    <FetchData
      request={fetch}
      deps={[id]}
      handleEmptyData={false}
      handleError={false}
    >
      {(data) => {
        return (
          <div className={"max-w-[1200px] mx-auto mt-6"}>
            <div className={"border-1 rounded-2 p-4 bg-white "}>
              <div>
                {data?.firstName} {"  "} {data?.lastName}
              </div>
              <div>{data?.city}</div>
              <div>{data?.categotyTitle}</div>
            </div>
          </div>
        );
      }}
    </FetchData>
  );
};
export default DocInfo;
