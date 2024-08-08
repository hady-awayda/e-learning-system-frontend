import request from "@/utils/request";
import storeToken from "@/helpers/storeToken";

const handleLogin = async (
  email: string,
  password: string,
  navigationFunction: () => void
) => {
  const data = await request("/auth/login", "POST", {
    email,
    password,
  });

  if (data.token) {
    storeToken(data.authorization);
    navigationFunction();
  }
};

export default handleLogin;
