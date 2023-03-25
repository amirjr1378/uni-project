import { Api } from "./ApiGlobals";
import { Cookies } from "react-cookie";

const BaseApi = new Api({
  baseURL: "https://api.drjavaherchian.ir/",
  timeout: 30000,
  // headers: { Authorization: "Bearer" + Cookies },
});

// @ts-ignore
// BaseApi.instance.defaults.paramsSerializer.serialize=function (params) {
//   return stringify(params)
// }
export default BaseApi;
