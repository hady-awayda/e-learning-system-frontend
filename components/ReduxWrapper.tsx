"use client";

import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "@/data/redux/store";
import Footer from "./structural/Footer";
import Header from "./structural/Header";
import { addCourse } from "@/data/redux/courseSlice/slice";
import { useRouter } from "next/navigation";
import request from "@/utils/request";
import axios from "axios";

type Course = {
  id: string;
  name: string;
};

type ReduxWrapperProps = {
  children: React.ReactNode;
  courses: Course[];
};

const ReduxWrapper: React.FC<ReduxWrapperProps> = ({ children, courses }) => {
  const [userData, setUserData] = useState(null);

  const redirect = () => {
    useRouter().push("/login");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // axios.defaults.baseURL = process.env.NEXT_PUBLIC_DEPLOYMENT_BASE_URL;

        const response = await request("/courses", "GET", null, redirect);
        // const { data } = await axios.get("/courses");
        // const withdrawals = await request("/withdrawals", "GET", null, redirect);
        console.log(response);
        setUserData(response);
      } catch (err: any) {
        console.log(err);
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
