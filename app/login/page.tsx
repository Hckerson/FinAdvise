import LoginPage from "@/app/login/loginPage";
import { enable2FA } from "@/app/api/features/2fa/enable_2fa";
export const metadata = {
  title: "Login | FinAdvise Financial Services",
  description:
    "Login to your account to access your account information.",
};
export default function Login() {
  return (
    <>
      <LoginPage />
    </>
  );
}
