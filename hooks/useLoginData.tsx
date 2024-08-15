import { closeLoginModal } from "@/data/redux/modalSlice/slice";
import { setToken } from "@/data/redux/tokenSlice/slice";
import { setRole } from "@/data/redux/userSlice/slice";
import { LoginDataProps } from "@/interfaces/loginForm";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const useLoginData = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLoginData = (loginData: LoginDataProps) => {
    dispatch(setToken(loginData.token));
    dispatch(setRole(loginData.role));
    dispatch(closeLoginModal());
    localStorage.setItem("token", loginData.token);

    loginData.role === "admin" ? router.push("/admin") : router.push("/");
  };

  return handleLoginData;
};

export default useLoginData;
