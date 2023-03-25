import { createContext, useContext, useEffect, useState } from "react";
import LoadingSpinner from "../components/loading/loading-spinner";
import { useCookies } from "react-cookie";

type ProviderProps = {
  children?: React.ReactNode;
};

type LoggedInUserStateType = {
  token: string | null;
};

type ContextType = {
  loggedInUser: LoggedInUserStateType | null;
  setLoggedInUser: React.Dispatch<
    React.SetStateAction<LoggedInUserStateType | null>
  >;
};

const initialValues: ContextType = {
  loggedInUser: {
    token: null,
  },
  setLoggedInUser: () => {},
};

export const LoggedInUserContext = createContext(initialValues);
export const LoggedInUserContextProvider = ({ children }: ProviderProps) => {
  const [loggedInUser, setLoggedInUser] =
    useState<LoggedInUserStateType | null>(null);

  const [cookies, setCookies] = useCookies();

  useEffect(() => {
    // HomeApi.auth
    //     .whoAmIList()
    //     .then((res) => {
    //         const userInfo = res.data;
    //         console.log("login as extension ", userInfo);
    //         if (userInfo) {
    //             setLoggedInUser({
    //                 fullname: userInfo.fullName || "",
    //                 id: userInfo.id || "",
    //                 imageUrl: userInfo.imageUrl || "",
    //                 teamId: userInfo.teamId || "",
    //                 teamName: userInfo.team || "",
    //                 userDomain: userInfo.username || "",
    //                 userPhone: userInfo.extension || "",
    //                 userPosition: userInfo.position || "",
    //                 userPositionLevel: userInfo.position || "",
    //                 permissionKeys: userInfo.permissionKeys,
    //             });
    //         }
    //     })
    //     .catch((e) => {
    //         console.log("error login", e);
    //     });
    console.log("send who am i req");
  }, [cookies]);
  return (
    <LoggedInUserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </LoggedInUserContext.Provider>
  );
};

export const useLoggedInUser = () => useContext(LoggedInUserContext);

export const LoadingLoggedIdUser = ({
  children,
  showLoading = true,
}: {
  children: React.ReactNode;
  showLoading?: boolean;
}) => {
  const { loggedInUser } = useLoggedInUser();

  if (!loggedInUser?.token) return <>{children}</>;

  return showLoading ? (
    <div className="fixed inset-0 flex items-center justify-center w-screen h-screen">
      <LoadingSpinner />
    </div>
  ) : null;
};
