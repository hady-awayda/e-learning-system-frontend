"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginDataProps } from "@/interfaces/loginForm";
import { RootState } from "@/data/redux/store";
import LoginModalContent from "../modals/Login";
import handleAuth from "@/data/remote/auth/auth";
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

  const handleData = (loginData: LoginDataProps) => {
    dispatch(setToken(loginData.token));
    dispatch(setRole(loginData.role));
    dispatch(closeLoginModal());
    localStorage.setItem("token", loginData.token);

    loginData.role === "admin" ? router.push("/admin") : router.push("/");
  };

  const onSubmit: SubmitHandler<LoginFormSchema | RegisterFormSchema> = (
    data
  ) => {
    handleAuth(
      data.email,
      data.password,
      handleData,
      (data as RegisterFormSchema).name
    );
  };

  return (
    <LoginModalContent
      handleSubmit={handleSubmit(onSubmit)}
      {...{ closeModal, errors, isLogin, isOpen, register, toggleForm }}
    />
  );
};

export default LoginForm;
