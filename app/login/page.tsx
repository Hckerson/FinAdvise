"use client";
import { Suspense } from "react";
import { ScaleLoader } from "react-spinners";
import LoginPage from "@/components/loginPage";
export default function Login() {
  return (
    <>
      <Suspense fallback={<ScaleLoader/>}>
        <LoginPage />
      </Suspense>
    </>
  );
}
