"use client";

import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "@/data/redux/store";
import Footer from "./structural/Footer";
import Header from "./structural/Header";
import { addCourse } from "@/data/redux/courseSlice/slice";
import { useRouter } from "next/navigation";
import request from "@/utils/request";

type Course = {
  id: string;
  name: string;
};

type ReduxWrapperProps = {
  children: React.ReactNode;
  courses: Course[];
};

const ReduxWrapper: React.FC<ReduxWrapperProps> = ({ children, courses }) => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  const redirect = () => {
    router.push("/login");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // axios.defaults.baseURL = process.env.NEXT_PUBLIC_DEPLOYMENT_BASE_URL;

        const userData = await request("/users", "GET", null, redirect);
        // const withdrawals = await request("/withdrawals", "GET", null, redirect);
        setUserData(userData);
      } catch (err: any) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    store.dispatch(addCourse(courses));
  }, [courses]);

  return (
    <Provider store={store}>
      <Header />
      {children}
      <Footer />
    </Provider>
  );
};

export default ReduxWrapper;
