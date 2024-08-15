"use client";

import { closeLoginModal } from "@/data/redux/modalSlice/slice";
import { RootState } from "@/data/redux/store";
import useAuth from "@/hooks/useAuth";
import {
  LoginFormSchema,
  loginSchema,
  RegisterFormSchema,
  registerSchema,
} from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import LoginModalContent from "../modals/Login";

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const isOpen = useSelector(
    (state: RootState) => state.modal.isLoginModalOpen
  );
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

  const handleAuth = useAuth();

  const onSubmit: SubmitHandler<LoginFormSchema | RegisterFormSchema> = (
    data
  ) => {
    handleAuth(data.email, data.password, (data as RegisterFormSchema).name);
  };

  return (
    <LoginModalContent
      handleSubmit={handleSubmit(onSubmit)}
      {...{ closeModal, errors, isLogin, isOpen, register, toggleForm }}
    />
  );
};

export default LoginForm;
