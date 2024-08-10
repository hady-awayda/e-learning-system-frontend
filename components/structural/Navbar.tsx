"use client";

import Link from "next/link";
import Button from "../buttons/submit";
import LoginModal from "../forms/Login";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal } from "@/data/redux/modalSlice/slice";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleLoginClick = () => dispatch(openLoginModal());
  const name = useSelector((state: any) => state.user.email);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-lg">
          MyApp
        </Link>
        {name && <p className="text-white">Hello, {name}</p>}
        <Button handleOpen={handleLoginClick} text="Login" />
        <LoginModal />
      </div>
    </nav>
  );
};

export default Navbar;
