import { openLoginModal } from "@/data/redux/modalSlice/slice";
import request from "@/utils/request";
import Footer from "../structural/Footer";
import Navbar from "../structural/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  const handle401Error = () => {
    dispatch(openLoginModal());
  };

  useEffect(() => {
    const fetchData = async () => {
      const userData = await request("/users", "GET", null, handle401Error);
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
