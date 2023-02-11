import { ReactNode } from "react";

const links = [
  { title: "پروفایل من " },
  { title: "خروج" },
  { title: "تکمیل حساب کاربری" },
  { title: "رزرو های من" },
];

const Sidebar = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="fixed top-0 pt-navbar-height right-0 z-20 flex flex-col bg-sidebar-bg text-white h-screen w-sidebar-width pb-6 pl-7">
      <div className="mt-5 flex-1 overflow-y-auto px-8 space-y-5">
        {links.map((node) => {
          return (
            <div className={"text-[13px] font-medium leading-9"}>
              {node?.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Sidebar;
