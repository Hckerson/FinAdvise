"use client";
import clsx from "clsx";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { IoLogoLinkedin } from "react-icons/io5";
import { useSearchParams } from "next/navigation";
import CircleLoader from "react-spinners/CircleLoader";
import { ToastContainer, toast } from "react-toastify";
import { login } from "@/lib/actions/google/auth_actions";
import { login as t_login } from "@/lib/actions/linkedin/auth_actions";

type State = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  provider: string | null;
  message?: string | null;
};
export default function LoginPage() {
  const searchParams = useSearchParams();
  const errors = searchParams.get("error");
  useEffect(() => {
    if (errors) {
      toast.info("Google Sign-In is not allowed for this account", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  },[errors] );

  const initialState: State = { errors: {}, message: null, provider: null };
  const [state, formAction, pending] = useActionState(signIn, initialState);
  const [email, setEmail] = useState("");
  const [hidden, setHidden] = useState(true);
  const [password, setPassword] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (state?.message == "failed") {
      timeoutId = setTimeout(() => {
        redirect("/signup");
      }, 3000);
    } else if (state?.message == "success") {
      redirect("/dashboard");
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [state]);
  return (
    <main className="box-border min-h-screen w-full flex items-center text-stone-300 bg-[#171717]">
      <ToastContainer />
      <div className="flex flex-1 h-screen"></div>
      <div className=" box-border  items-center  justify-center py-10  flex md:flex-row flex-col flex-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/*Company logo */}
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="sm:max-w-sm min-w-[300px] mt-5 sm:w-full text-center ">
          <form action={formAction} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 text-start font-medium text-stone-400"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md  px-3 py-1.5  outline-1 text-sm   md:text-base text-stone-400  sm:text-sm/6 -outline-offset-1 outline-gray-300   focus:ring-1 focus:ring-black ring-offset-2"
                />
              </div>
              {state?.errors?.email &&
                state.errors.email.map((error) => {
                  return (
                    <p
                      key={error}
                      className="text-xs pt-1 text-start text-red-400"
                    >
                      {error}
                    </p>
                  );
                })}
              {state?.message == "failed" && (
                <p className="text-xs text-start pt-1 text-indigo-600">
                  Email not registered, redirecting{" "}
                  <span>
                    <PulseLoader color="#4f39f6" size={5} />
                  </span>
                </p>
              )}
              {state?.message == "not_local" && (
                <p className="text-xs text-start pt-1 text-indigo-600">
                  Email is registered with {state?.provider}, Continue with{" "}
                  {state?.provider}
                </p>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-stone-400"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    href="#"
                    className="font-semibold text-stone-600 hover:text-stone-300"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  placeholder="password"
                  type={hidden ? "password" : "text"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="block w-full rounded-md text-sm   md:text-base text-stone-400  sm:text-sm/6 px-3 py-1.5  outline-1 -outline-offset-1 outline-gray-300   focus:ring-1 focus:ring-black ring-offset-2 "
                />
                <div className="absolute top-0 right-1 h-full w-[32px]  flex items-center justify-center ">
                  {hidden ? (
                    <button
                      type="button"
                      className="p-1 hover:bg-stone-700"
                      onClick={() => {
                        setHidden(false);
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="dig-UIIcon dig-UIIcon--standard"
                        width="24"
                        height="24"
                        role="presentation"
                        focusable="false"
                      >
                        <path
                          d="M12 9.5A2.321 2.321 0 0 0 9.5 12a2.321 2.321 0 0 0 2.5 2.5 2.32 2.32 0 0 0 2.5-2.5A2.322 2.322 0 0 0 12 9.5Z"
                          fill="white"
                          vectorEffect="non-scaling-stroke"
                        ></path>
                        <path
                          d="M20.177 11.678C20.067 11.446 17.41 6 12 6c-5.412 0-8.067 5.446-8.177 5.678L3.669 12l.153.322C3.933 12.554 6.588 18 12 18c5.411 0 8.066-5.446 8.177-5.678L20.33 12l-.154-.322ZM12 16.5c-3.77 0-6.03-3.42-6.65-4.5.62-1.081 2.878-4.5 6.65-4.5 3.771 0 6.028 3.418 6.65 4.5-.622 1.082-2.88 4.5-6.65 4.5Z"
                          fill="white"
                          vectorEffect="non-scaling-stroke"
                        ></path>
                      </svg>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="p-1 hover:bg-stone-700"
                      onClick={() => {
                        setHidden(true);
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="dig-UIIcon dig-UIIcon--standard"
                        width="24"
                        height="24"
                        role="presentation"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 19.203 20.142 5.06 19.082 4l-2.697 2.696a7.809 7.809 0 0 0-4.054-1.135c-5.411 0-8.066 5.446-8.177 5.677L4 11.561l.154.322c.068.143 1.106 2.273 3.163 3.882l-2.378 2.377L6 19.202Zm2.398-4.52c-1.443-1.077-2.356-2.495-2.717-3.122.62-1.081 2.878-4.5 6.65-4.5 1.114 0 2.096.298 2.943.746L13.703 9.38a2.32 2.32 0 0 0-1.372-.318 2.321 2.321 0 0 0-2.5 2.5 2.321 2.321 0 0 0 .318 1.371l-1.751 1.752Z"
                          fill="white"
                          vectorEffect="non-scaling-stroke"
                        ></path>
                        <path
                          d="M12.331 16.06a6.09 6.09 0 0 1-1.091-.097L10 17.203c.71.225 1.487.358 2.331.358 5.412 0 8.067-5.446 8.177-5.678l.154-.322-.154-.323c-.052-.109-.667-1.37-1.866-2.677l-1.07 1.07c.7.77 1.173 1.519 1.409 1.93-.622 1.081-2.88 4.5-6.65 4.5Z"
                          fill="white"
                          vectorEffect="non-scaling-stroke"
                        ></path>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={email.length < 1}
                className={clsx(
                  "flex w-full justify-center cursor-pointer rounded-md  px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                  email.length < 1 ? "bg-indigo-600/50" : "bg-indigo-600"
                )}
              >
                {pending ? <CircleLoader size={30} /> : "sign in"}
              </button>
            </div>
            {state?.message == "unAuthorized" && (
              <p className="text-xs text-start pt-1 text-indigo-600">
                Invalid credentials, password and email do not match
              </p>
            )}
          </form>

          <section className="grid gap-y-6 mt-4">
            <div className="flex items-center justify-center ">
              <div className="border-t border-gray-300 flex-grow"></div>
              <span className="mx-3 text-gray-500">or</span>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            <div className="flex items-center justify-center cursor-pointer w-full rounded-md  text-base text-stone-400 outline-1 focus:ring-1 focus:ring-black ring-offset-2 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  sm:text-sm/6">
              <div className="shrink-0">
                <div style={{ zIndex: 2 }} className=" w-10 h-10 ">
                  <div
                    style={{
                      aspectRatio: 1,
                      cursor: "pointer",
                      overflow: "unset",
                    }}
                    className="m-0 inline-flex pr-2 relative items-center justify-center p-0 w-full box-border"
                  >
                    <FcGoogle className="size-7 relative" />
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="flex  flex-col cursor-pointer "
                onClick={() => login()}
              >
                <p className="block text-sm/6 font-medium text-stone-200">
                  Continue with Google
                </p>
              </button>
            </div>
            <div className="flex items-center justify-center cursor-pointer w-full rounded-md  text-base text-stone-400 outline-1 focus:ring-1 focus:ring-black -outline-offset-1 ring-offset-2 outline-gray-300 placeholder:text-gray-400   sm:text-sm/6">
              <div className="shrink-0">
                <div style={{ zIndex: 2 }} className=" w-10 h-10 ">
                  <div
                    style={{
                      aspectRatio: 1,
                      cursor: "pointer",
                      overflow: "unset",
                    }}
                    className="m-0 inline-flex pr-2 relative items-center justify-center p-0 w-full box-border"
                  >
                    <IoLogoLinkedin className="size-7 text-[#0A66C2] relative" />
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="flex cursor-pointer flex-col"
                onClick={() => t_login()}
              >
                <p className=" text-sm/6 font-medium text-stone-200">
                  Continue with Linkedin
                </p>
              </button>
            </div>
          </section>
          <p className="mt-5 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <Link
              href="/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </Link>
          </p>
        </div>
      </div>

      <div className="flex flex-1 h-screen"></div>
    </main>
  );
}
