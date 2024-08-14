import { openLoginModal } from "@/data/redux/modalSlice/slice";
import { UserProp } from "@/interfaces/userData";
import request from "@/utils/request";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "../structural/Footer";
import Navbar from "../structural/Navbar";
import getData from "@/hooks/useData";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  const handle401 = useCallback(() => {
    dispatch(openLoginModal());
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await request("/users", "GET", null, handle401);
      userData && getData(userData, dispatch);
    };

    fetchData();
  }, [dispatch, handle401]);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default ReduxProvider;
