import { openLoginModal } from "@/data/redux/modalSlice/slice";
import { UserProp } from "@/interfaces/userData";
import request from "@/utils/request";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../structural/Footer";
import Navbar from "../structural/Navbar";
import getData from "@/hooks/useData";
import { setToken } from "@/data/redux/tokenSlice/slice";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.token.token);

  const handle401 = useCallback(() => {
    dispatch(openLoginModal());
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(setToken(localStorage.getItem("token")));
    }
    if (!token) {
      handle401();
      return;
    }
    const fetchData = async () => {
      const userData = await request("/users", "GET", token, null, handle401);
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
