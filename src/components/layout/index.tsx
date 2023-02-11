import cx from "classnames";
import Sidebar from "../sidebar";
import { ReactNode } from "react";

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div
      className={cx(
        " overflow-x-hidden min-h-screen pt-navbar-height pr-sidebar-width min-h-screen "
      )}
    >
      <div className="flex ">
        <Sidebar />

        <div className="px-6 w-full flex-1 ">{children}</div>
      </div>
    </div>
  );
};
export default Layout;
