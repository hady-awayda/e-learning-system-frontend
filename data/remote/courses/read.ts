import axios from "axios";

const fetchCourses = async () => {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_DEPLOYMENT_BASE_URL;

  const { data } = await axios.get("/courses");

  return data;
};

export default fetchCourses;
