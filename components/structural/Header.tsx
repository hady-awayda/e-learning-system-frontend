import { RootState } from "@/data/redux/store";
import { useSelector } from "react-redux";

const Header = () => {
  const role = useSelector((state: RootState) => state.user.role);

  return (
    <>
      Navbar
      <h1>{role}</h1>
    </>
  );
};

export default Header;
