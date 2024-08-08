import LoginForm from "@/components/forms/Login";

const Login = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-60 mt-20">
      <h1 className="text-3xl font-bold">Login Please</h1>
      <LoginForm />
    </main>
  );
};

export default Login;
