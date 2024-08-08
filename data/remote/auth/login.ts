import { LoginData } from "@/interfaces/data";
import request from "@/utils/request";

const handleLogin = async (
  email: string,
  password: string,
  navigationFunction: (loginData: LoginData) => void
) => {
  const data: LoginData = await request("/auth/login", "POST", {
    email,
    password,
  });

  if (data.token) {
    navigationFunction(data);
  }
};

export default handleLogin;
