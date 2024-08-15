import { CoursesProps } from "@/interfaces/courses";
import axios from "axios";

console.log("Logged");
const fetchCourses = async () => {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const { data }: { data: CoursesProps } = await axios.get("/courses");
  return data;
};

export default fetchCourses;
