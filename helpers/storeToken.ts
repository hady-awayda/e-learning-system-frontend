// import decodeJwtToken from "./decodeJWT";
// import { useDispatch } from "react-redux";
// import { setToken } from "../../data/redux/authSlice/slice";

function storeToken(data: any) {
  // console.log(data.token);
  // const dispatch = useDispatch();

  try {
    if (data.token) {
      const decodedToken = decodeJwtToken(data.token);

      if (decodedToken) {
        const tokenObject = {
          token: data.token,
          data: decodedToken,
        };

        // dispatch(setToken(tokenObject));

        localStorage.setItem("jwtData", JSON.stringify(tokenObject));

        decodedToken.role === "admin"
          ? (window.location.href = "/admin")
          : (window.location.href = "/profile");
      } else {
        throw new Error("Invalid token structure");
      }
    } else {
      throw new Error("No token received");
    }
  } catch (error) {
    console.log(error);
  }
}

export default storeToken;
