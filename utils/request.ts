import axios from "axios";
import RequestMethods from "./request_methods";
import { useSelector } from "react-redux";
import { clearToken } from "@/data/redux/tokenSlice/slice";
import store from "@/data/redux/store";

let baseURL;
baseURL = process.env.NEXT_PUBLIC_DEPLOYMENT_BASE_URL;
baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchData = async (
  route: string,
  requestMethod: string = RequestMethods.GET,
  token: string | null = null,
  body: any = null,
  navigationFunction: () => void = () => {}
) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios.defaults.baseURL = baseURL;

    console.log(body);
    const { data } = await axios.request({
      url: route,
      method: requestMethod,
      data: body,
      headers: headers,
    });

    console.log(data.token);
    return data;
  } catch (err: any) {
    if (err.response?.status === 401 || err.response?.status === 403) {
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
    console.log(`Failed to fetch ${route}`);
    throw new Error(`Failed to fetch`, {
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
