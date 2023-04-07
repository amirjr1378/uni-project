import cx from "classnames";
import React, { FC } from "react";
import { SidebarProps } from "./types/sidebar-props.type";
import { Sidebar } from "./sidebar/sidebar";
import Navbar from "../../pages/layout/navbar";

export type LayoutConfigProps = {
  title?: string;
  sidebarProps?: SidebarProps;
  children: React.ReactNode;
  showSidebar?: boolean;
};

const Layout: FC<LayoutConfigProps> = ({
  children,
  title,
  sidebarProps,
  showSidebar,
}) => {
  return (
    <div
      className={cx(
        "overflow-x-hidden max-w-[1920] ",
        showSidebar && "pr-sidebar-width"
      )}
    >
      <Navbar />

      {showSidebar && <Sidebar {...sidebarProps} />}

      <div className="flex flex-col pt-navbar-height">
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
