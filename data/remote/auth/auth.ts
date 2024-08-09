import { LoginData } from "@/interfaces/loginForm";
import request from "@/utils/request";

const handleAuth = async (
  email: string,
  password: string,
  navigationFunction: (loginData: LoginData) => void,
  name: string | null = null
) => {
  const data: LoginData = await request(
    name ? "/auth/register" : "/auth/login",
    "POST",
    {
      name,
      email,
      password,
    }
  );

  if (data.token) {
    navigationFunction(data);
  }
};

export default handleAuth;
