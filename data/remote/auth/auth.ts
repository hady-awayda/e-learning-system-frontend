import { LoginDataProps } from "@/interfaces/loginForm";
import request from "@/utils/request";

const handleAuth = async (
  email: string,
  password: string,
  navigationFunction: (loginData: LoginDataProps) => void,
  name: string | null = null
) => {
  const data: LoginDataProps = await request(
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
