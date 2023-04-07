import bg from "./assets/header.jpg";
import SearchBox from "./components/SearchBox";
import HighestDoctors from "./components/HighestDoctorsCarousel";

const HomePage = () => {
  return (
    <>
      <div className={"h-screen w-screen overflow-hidden"}>
        <div
          className={" absolute top-0 left-0 right-0 overflow-x-hidden "}
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
          <SearchBox />
        </div>
      </div>

      <HighestDoctors />
    </>
  );
};
export default HomePage;
