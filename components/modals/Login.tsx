"use client";

import Button from "@/components/buttons/submit";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment, useEffect, useRef, useState } from "react";

type LoginModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  register: any;
  errors: any;
  isLogin: boolean;
  toggleForm: () => void;
};

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  closeModal,
  handleSubmit,
  register,
  errors,
  isLogin,
  toggleForm,
}) => {
  const [nameHeight, setNameHeight] = useState(0);
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (nameRef.current) {
      if (!isLogin) {
        setNameHeight(nameRef.current.scrollHeight);
      } else {
        setNameHeight(0);
      }
    }
  }, [isLogin]);

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-indigo-300 bg-opacity-45 backdrop-blur-md" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto text-black">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="relative bg-white rounded-lg shadow-xl transform transition-all max-w-sm w-full p-6">
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={closeModal}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <DialogTitle className="text-2xl font-bold text-gray-900 mb-4">
                  {isLogin ? "Login" : "Register"}
                </DialogTitle>
                <div
                  className="transition-all duration-300 overflow-hidden"
                  style={{ height: isLogin ? "15rem" : "21rem" }}
                >
                  <form onSubmit={handleSubmit}>
                    <div
                      ref={nameRef}
                      style={{ height: `${nameHeight}px` }}
                      className="transition-all duration-300 overflow-hidden"
                    >
                      {!isLogin && (
                        <>
                          <label
                            htmlFor="name"
                            className="flex text-sm font-medium text-gray-700"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="pl-4 p-2 mt-1 mb-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            {...register("name")}
                            placeholder="Name"
                          />
                          <p className="text-red-500 text-sm h-4">
                            {errors.name?.message}
                          </p>
                        </>
                      )}
                    </div>

                    <>
                      <label
                        htmlFor="email"
                        className="flex text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="pl-4 p-2 mt-1 mb-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...register("email")}
                        placeholder="Email"
                      />
                      <p className="text-red-500 text-sm h-4">
                        {errors.email?.message}
                      </p>
                    </>

                    <>
                      <label
                        htmlFor="password"
                        className="flex text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="pl-4 p-2 mt-1 mb-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...register("password")}
                        placeholder="Password"
                      />
                      <p className="text-red-500 text-sm h-4 mb-4">
                        {errors.password?.message}
                      </p>
                    </>

                    <Button text={isLogin ? "Login" : "Register"} />
                  </form>
                </div>

                <div className="mt-4 text-sm">
                  <span>
                    {isLogin
                      ? "Don't have an account?"
                      : "Already have an account?"}
                    <button
                      onClick={toggleForm}
                      className="text-indigo-600 hover:text-indigo-400 font-semibold transition-all duration-300 px-2 py-1 rounded focus-visible:outline-0"
                    >
                      {isLogin ? "Register" : "Login"}
                    </button>
                  </span>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default LoginModal;
