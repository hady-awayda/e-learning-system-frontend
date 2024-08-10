import axios from "axios";
import RequestMethods from "./request_methods";
import { useSelector } from "react-redux";
import { clearToken } from "@/data/redux/tokenSlice/slice";
import store from "@/data/redux/store";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_DEPLOYMENT_BASE_URL;

const fetchData = async (
  route: string,
  requestMethod: string = RequestMethods.GET,
  body: any = null,
  navigationFunction: () => void = () => {}
) => {
  try {
    // const token = useSelector((state: any) => state.token.token);
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const { data } = await axios.request({
      url: route,
      method: requestMethod,
      data: body,
      headers: headers,
    });

    // console.log(data);
    return data;
  } catch (err: any) {
    if (err.response?.status === 401) {
      localStorage.setItem("token", "");
      navigationFunction();
    }

    console.error(
      err.response?.data?.message ||
        err?.response?.data ||
        err?.message ||
        err.resonse ||
        err
    );

    throw new Error("Failed to fetch courses", {
      cause:
        err.response?.data?.message ||
        err?.response?.data ||
        err?.message ||
        err.resonse ||
        err,
    });
  }
};

export default fetchData;
