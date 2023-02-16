import cx from "classnames";
import React, { FC, useEffect, useState } from "react";

// import Navbar from './navbar'
import { NavbarProps } from "./types/nav-bar-prop.type";
import { SidebarProps } from "./types/sidebar-props.type";
import { Sidebar } from "./sidebar/sidebar";
import { useLocation } from "react-router-dom";

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

  useEffect(() => {
    console.log("location .pathname", location.pathname);
    if (location.pathname === "/" || location.pathname === "/login")
      setShowSideBar(false);
    else setShowSideBar(true);
  }, [location.pathname]);

  return (
    <div
      className={cx(
        "bg-[#E5E5E5] overflow-x-hidden min-h-screen pt-navbar-height min-h-screen bg-[#f5f5f7]",
        showSidebar && "pr-sidebar-width"
      )}
    >
      {/*<Navbar {...navbarProps} />*/}

      <div className="flex ">
        {showSidebar && <Sidebar {...sidebarProps} />}

        <div className="  flex-1 mx-6 ">
          {title ? (
            <p className="text-[#0D062D] text-3xl leading-[50px] pt-20 font-bold ">
              {title}
            </p>
          ) : null}
          <div className="  ">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
