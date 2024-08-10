import {
  setCourses,
  setCreatedAt,
  setEmail,
  setName,
  setRole,
  setWithdrawals,
} from "@/data/redux/userSlice/slice";
import { UserProp } from "@/interfaces/userData";

const getData = (userData: UserProp, dispatch: any) => {
  dispatch(setName(userData.name));
  dispatch(setEmail(userData.email));
  dispatch(setRole(userData.role));
  dispatch(setCourses(userData.courses));
  dispatch(setWithdrawals(userData.withdrawals));
  dispatch(setCreatedAt(userData.createdAt));
};

export default getData;
