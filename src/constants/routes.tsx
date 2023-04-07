import React, { ReactNode } from "react";
import LoginRegister from "../pages/login-register";
import Home from "../pages/home";
import NotFoundPage from "../pages/404";
import RegisterDoc from "../pages/register-doc";
import DocInfo from "../pages/doc-info";

export type RouteType = {
  path: string;
  element?: ReactNode;
};

export const routes: RouteType[] = [
  {
    path: "*",
    element: (
      <>
        {/*<Helmet>*/}
        <title>Page Not Found</title>
        {/*</Helmet>*/}
        <NotFoundPage />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        {/*<Helmet>*/}
        {/*</Helmet>*/}
        <Home />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        {/*<Helmet>*/}
        <title>ورود / ثبت نام</title>
        {/*</Helmet>*/}
        <LoginRegister />
      </>
    ),
  },
  {
    path: "/register-doc",
    element: (
      <>
        {/*<Helmet>*/}
        <title>ثبت اطلاعات</title>
        <RegisterDoc />
        {/*</Helmet>*/}
        {/*< />*/}
      </>
    ),
  },
  {
    path: "/doc/:id",
    element: (
      <>
        {/*<Helmet>*/}
        <title>مشخصات دکتر</title>
        <h1>amir</h1>
        <DocInfo />
        {/*</Helmet>*/}
        {/*< />*/}
      </>
    ),
  },
];
