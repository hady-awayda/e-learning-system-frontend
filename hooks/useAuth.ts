import { LoginDataProps } from "@/interfaces/loginForm";
import request from "@/utils/request";
import useLoginData from "./useLoginData";

const useAuth = () => {
  const handleLoginData = useLoginData();

  const handleAuth = async (
    email: string,
    password: string,
    name: string | null = null
  ) => {
    const data: LoginDataProps = await request(
      name ? "/auth/register" : "/auth/login",
      "POST",
      null,
      {
        name,
        email,
        password,
      }
    );

    if (data.token) {
      handleLoginData(data);
    }
  };

  return handleAuth;
};

export default useAuth;
