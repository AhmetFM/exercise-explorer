import LoginForm from "@/components/LoginForm";
import { verifySession } from "@/lib/session";
import React from "react";

const LoginPage = async () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
