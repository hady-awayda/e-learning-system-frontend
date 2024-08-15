import { openLoginModal } from "@/data/redux/modalSlice/slice";
import request from "@/utils/request";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "@/data/redux/tokenSlice/slice";
import { addCourse } from "@/data/redux/courseSlice/slice";
import {
  setCourses,
  setCreatedAt,
  setEmail,
  setName,
  setRole,
  setWithdrawals,
} from "@/data/redux/userSlice/slice";
import { UserProp } from "@/interfaces/userData";
import { CoursesProps } from "@/interfaces/courses";
import store from "@/data/redux/store";

const useInitialData = (courses: CoursesProps) => {
  store.dispatch(addCourse(courses));

  const handle401 = useCallback(() => {
    store.dispatch(openLoginModal());
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      store.dispatch(setToken(token));
    }

    if (!token) {
      handle401();
      return;
    }

    const fetchData = async () => {
      const userData: UserProp = await request(
        "/users",
        "GET",
        token,
        null,
        handle401
      );

      if (userData) {
        store.dispatch(setName(userData.name));
        store.dispatch(setEmail(userData.email));
        store.dispatch(setRole(userData.role));
        store.dispatch(setCourses(userData.courses));
        store.dispatch(setWithdrawals(userData.withdrawals));
        store.dispatch(setCreatedAt(userData.createdAt));
      }
    };

    fetchData();
  }, [handle401]);
};

export default useInitialData;
