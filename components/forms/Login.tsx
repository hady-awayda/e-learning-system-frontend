"use client";

import { useRouter } from "next/navigation";
import { LoginData } from "@/interfaces/data";
import { RootState } from "@/data/redux/store";
import LoginModalContent from "../modals/Login";
import handleLogin from "@/data/remote/auth/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "@/data/redux/userSlice/slice";
import { setToken } from "@/data/redux/tokenSlice/slice";
import { SubmitHandler, useForm } from "react-hook-form";
import { closeLoginModal } from "@/data/redux/modalSlice/slice";
import {
  LoginFormSchema,
  loginSchema,
  RegisterFormSchema,
  registerSchema,
} from "@/schemas/auth";
import { useState } from "react";

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const isOpen = useSelector(
    (state: RootState) => state.modal.isLoginModalOpen
  );
  const router = useRouter();
  const dispatch = useDispatch();
  const closeModal = () => dispatch(closeLoginModal());
  const toggleForm = () => setIsLogin(!isLogin);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema | RegisterFormSchema>({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema),
  });

  const onSubmit: SubmitHandler<LoginFormSchema | RegisterFormSchema> = (
    data
  ) => {
    handleLogin(data.email, data.password, (loginData: LoginData) => {
      localStorage.setItem("token", loginData.token);
      dispatch(setToken(loginData.token));
      dispatch(setRole(loginData.role));

      loginData.role === "admin" ? router.push("/admin") : router.push("/");
      dispatch(closeLoginModal());
    });
  };

  return (
    <LoginModalContent
      handleSubmit={handleSubmit(onSubmit)}
      {...{ closeModal, errors, isLogin, isOpen, register, toggleForm }}
    />
  );
};

export default LoginForm;
