"use client";

import { z, infer as zodInfer } from "zod";
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

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormSchema = zodInfer<typeof loginSchema>;

const LoginModal = () => {
  const isOpen = useSelector(
    (state: RootState) => state.modal.isLoginModalOpen
  );
  const router = useRouter();
  const dispatch = useDispatch();
  const closeModal = () => dispatch(closeLoginModal());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormSchema> = (data) => {
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
      isOpen={isOpen}
      closeModal={closeModal}
      handleSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
    />
  );
};

export default LoginModal;
