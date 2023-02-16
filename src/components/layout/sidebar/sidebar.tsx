import classNames from "classnames";
import { FC, ReactNode } from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { SidebarProps } from "../types/sidebar-props.type";

export type SidebarLinkType = {
  path: string;
  title: string;
  icon?: ReactNode;
};

const Sidebar: FC<SidebarProps> = ({ title, links }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isCurrentPath = (pathnamePattern: string) =>
    !!matchPath(pathnamePattern, pathname)?.pathname;

  return (
    <div className="fixed top-0 pt-navbar-height right-0 z-20 flex flex-col bg-[#2E2E48] h-screen w-sidebar-width pb-6 pr-6 pl-7">
      <div className="mt-5 flex-1 overflow-y-auto">
        {title}
        <div className="space-y-4 pb-5">
          {links &&
            links?.length > 0 &&
            links.map((item) => (
              <div
                onClick={() => navigate(item.path)}
                key={item.title}
                className={classNames(
                  "gap-2 w-full py-3 flex items-center font-semibold text-3.25 leading-5 cursor-pointer pr-2  rounded-[6px]",
                  isCurrentPath(item.path)
                    ? "bg-[#FFFFFF14] text-white"
                    : "text-[#A3AED0] hover:bg-[#FFFFFF14] hover:text-white"
                )}
              >
                {item.icon}
                {item.title}
              </div>
            ))}
        </div>
        <div className="h-[1px] w-full bg-[#A3AED0] bg-opacity-20 -mr-6 absolute pl-4 w-[14.56rem]" />
      </div>
    </div>
  );
};

export { Sidebar };
