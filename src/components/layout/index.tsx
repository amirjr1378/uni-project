import cx from "classnames";
import React, { FC, useEffect, useState } from "react";

// import Navbar from './navbar'
import { NavbarProps } from "./types/nav-bar-prop.type";
import { SidebarProps } from "./types/sidebar-props.type";
import { Sidebar } from "./sidebar/sidebar";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import Navbar from "../../pages/layout/navbar";

export type LayoutConfigProps = {
  title?: string;
  sidebarProps?: SidebarProps;
  navbarProps?: NavbarProps;
  children: React.ReactNode;
};

const Layout: FC<LayoutConfigProps> = ({
  children,
  title,
  sidebarProps,
  navbarProps,
}) => {
  const location = useLocation();
  const [showSidebar, setShowSideBar] = useState<boolean>(false);
  // const [showNavbar,setShowNavbar]=useState(false)
  const [cookies, setCookies] = useCookies();

  useEffect(() => {
    console.log("location .pathname", location.pathname, cookies.Auth);
    if (location.pathname === "/" || location.pathname === "/login")
      setShowSideBar(false);
    else setShowSideBar(true);
  }, [location.pathname]);

  return (
    <div
      className={cx(
        "overflow-x-hidden bg-[#f5f5f7] max-w-[1920] ",
        showSidebar && "pr-sidebar-width"
      )}
    >
      <Navbar />

      {showSidebar && <Sidebar {...sidebarProps} />}

      <div className="flex flex-col">
        {title ? (
          <p className="text-[#0D062D] text-3xl leading-[50px] pt-20 font-bold ">
            {title}
          </p>
        ) : null}
        <>{children}</>
      </div>
    </div>
  );
};

export default Layout;
