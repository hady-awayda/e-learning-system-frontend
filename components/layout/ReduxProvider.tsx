import { openLoginModal } from "@/data/redux/modalSlice/slice";
import { UserProp } from "@/interfaces/userData";
import request from "@/utils/request";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "../structural/Footer";
import Navbar from "../structural/Navbar";
import useData from "@/hooks/useData";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  const handle401 = () => {
    dispatch(openLoginModal());
  };

  useEffect(() => {
    const fetchData = async () => {
      const userData = await request("/users", "GET", null, handle401);
      userData && useData(userData, dispatch);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default ReduxProvider;