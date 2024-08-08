import axios from "axios";
import RequestMethods from "./request_methods";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_DEPLOYMENT_BASE_URL;

const fetchData = async (
  route: string,
  requestMethod: string = RequestMethods.GET,
  body: any = null,
  navigationFunction: (url: string) => void = (url) => {}
) => {
  try {
    // const token = JSON.parse(localStorage.getItem("token") as string);

    // if (!token) {
    //   console.error("Token not found in localStorage. Redirecting to login.");
    //   navigationFunction("/login");
    //   return;
    // }

    // const headers = {
    //   Authorization: `Bearer ${token}`,
    // };

    const { data } = await axios.request({
      url: route,
      method: requestMethod,
      data: body,
      // headers: headers,
    });

    return data;
  } catch (err: any) {
    if (err.response?.status === 401) {
      localStorage.setItem("token", "");

      navigationFunction("/login");
    }

    console.error(err);
    throw new Error("Failed to fetch courses", {
      cause: err,
    });
  }
};

export default fetchData;
