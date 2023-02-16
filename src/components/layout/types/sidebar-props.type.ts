import { ReactNode } from "react";
import { SidebarLinkType } from "../sidebar/sidebar";

export type SidebarProps = {
  title?: ReactNode;
  links?: SidebarLinkType[];
  hide?: boolean;
};
