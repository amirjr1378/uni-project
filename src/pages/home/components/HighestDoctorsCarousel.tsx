import FetchData from "components/FetchData";
import BaseApi from "api/Api";
import { GetAllDoctorByBestRatingDto } from "api/ApiGlobals";
import woman from "assets/pic/women1.jpg";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const docs: GetAllDoctorByBestRatingDto[] = [
  {
    city: "تهران",
    address: "ستارخان خیابان بافرخان کوجه کریم خان",
    categoryTitle: "روانشناس",
    firstName: "ممد",
    lastName: "ممدیان",
    rating: 3,
    doctorId: "9238982374",
  },
  {
    city: "کرج",
    address: "کرج خیابان اولی کوجه دومی ساختمان سومی",
    categoryTitle: "چراح مغز و اعصاب",
    firstName: "سارا",
    lastName: "ساراییان",
    rating: 4,
    doctorId: "234234",
  },
  {
    city: "اصفهان",
    address: "کاشان میدان 15 خرداد خیابان کارگر",
    categoryTitle: "متخصص قلب و عروق",
    firstName: "علی",
    lastName: "",
    rating: 0,
    doctorId: "34234234",
  },
  {
    city: "مشهد",
    address: "میدان آب چهار راه گاز کوجه برقیان",
    categoryTitle: "عمومی",
    firstName: "هاشم",
    lastName: "هاشمیان",
    rating: 2,
    doctorId: "234234",
  },
];

const HighestDoctors = () => {
  const fetchData = () => {
    return BaseApi.getBestDoctorByHighestRanting
      .getBestDoctorByHighestRantingList()
      .then((res) => res?.data);
  };

  return (
    <div className={"bg-blue-400 w-full px-10 py-5 overflow-visible"}>
      <FetchData request={fetchData} deps={[]} handleEmptyData={false}>
        {(data) => (
          <Slider infinite rtl speed={400} slidesToShow={3} slidesToScroll={1}>
            {docs?.map((doc) => {
              return (
                <Link
                  to={`/doc/${doc.doctorId}`}
                  className="px-4 [direction:rtl] overflow-visible mt-12 mb-5"
                >
                  <div
                    className={
                      "relative bg-white rounded-3  p-5  transition-all hover:scale-105 cursor-pointer w-full overflow-visible"
                    }
                  >
                    <img
                      alt={"profile"}
                      src={woman}
                      className={
                        "w-[70px] h-[70px] rounded-full absolute top-0  left-[20px] translate-y-[-45px] translate-x-[0px]"
                      }
                      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px " }}
                    />
                    <div className={"text-[14px] font-medium leading-7"}>
                      دکتر
                      {"  "}
                      {doc?.firstName}
                      {doc?.lastName}
                    </div>
                    <div
                      className={
                        "text-[13px] text-slate-600 font-normal leading-7 "
                      }
                    >
                      {doc?.categoryTitle}
                    </div>
                    <div
                      className={
                        "text-[13px] font-medium flex items-center gap-x-3 leading-9"
                      }
                    >
                      <LocationMarkerIcon className={"text-blue-600 w-5 h-5"} />
                      {doc?.city}
                    </div>
                    <div className={"text-[12px] text-slate-600 leading-8"}>
                      {doc?.address}
                    </div>
                  </div>
                </Link>
              );
            })}
          </Slider>
        )}
      </FetchData>
    </div>
  );
};

export default HighestDoctors;
