import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { routes } from "./constants/routes";
import { Slide, ToastContainer } from "react-toastify";
import { CookiesProvider } from "react-cookie";
import CheckForAuth from "./constants/checkForAuth";
import Layout from "./components/layout";
import { LoadingLoggedIdUser } from "./context/useLoggedInUser";
import { SidebarProps } from "./components/layout/types/sidebar-props.type";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sidebarPrp: SidebarProps = {
  links: [
    { path: "/register-doc", title: "تکمیل اطلاعات کاربری" },
    { path: "/my-reservation", title: "وقت دکتر" },
    { path: "/my-article", title: "مقاله های من" },
  ],
};

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <ToastContainer
          autoClose={2000}
          rtl
          transition={Slide}
          position={"top-center"}
          toastClassName="text-[13px]"
          className={"z-[100000]"}
          toastStyle={{
            width: "300px",
            boxShadow:
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
          }}
        />
        <React.Suspense
          fallback={
            <>
              <div className="flex">
                <div className="m-auto">loading</div>
              </div>
            </>
          }
        >
          <CheckForAuth>
            <>
              <Layout
                sidebarProps={sidebarPrp}
                // sidebarProps={{
                //   hide:
                //     location.pathname === "/" || location.pathname === "/login",
                // }}
              >
                <LoadingLoggedIdUser>
                  <Routes>
                    {routes.map((node) => (
                      <Route key={node.path} {...node} />
                    ))}
                  </Routes>
                </LoadingLoggedIdUser>
                {/*</div>*/}
              </Layout>
            </>
          </CheckForAuth>
        </React.Suspense>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
