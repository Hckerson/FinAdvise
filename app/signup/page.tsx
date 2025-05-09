"use client";
import clsx from "clsx";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useActionState } from "react";
import { signUp } from "@/app/api/auth/signup/actions";
import { FcGoogle } from "react-icons/fc";
import React, { useEffect, useState } from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import CircleLoader from "react-spinners/CircleLoader";
import VerificationPopup from "@/components/email_popup";
import countries from "@/lib/placeholder_data";

export type State = {
  errors?: {
    email?: string[];
    username?: string[];
    phone?: string[];
    password?: string[];
  };
  message?: string | null;
};

export default function AuthForm() {
  const initialState: State = { errors: {}, message: null };
  const [state, formAction, pending] = useActionState(signUp, initialState);
  const [exists, setExists] = useState(false);
  const [status, setStatus] = useState(false);
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [visible, setVisible] = useState(false);
  const [letter, setLetter] = useState(false);
  const [special, setSpecial] = useState(false);
  const [number, setNumber] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [showNo, setShowNo] = useState(false);
  const [length, setLength] = useState(false);
  const [selected, setSelected] = useState(countries[0]);
  const [filtered, setFiltered] = useState(countries);
  const [open, setOpen] = useState(false);

  const testPassword = (password: string) => {
    const hasNumber = /\d/;
    const hasLetter = /[a-zA-Z]/;
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const hasLength = password.length >= 8;
    setNumber(hasNumber.test(password));
    setLetter(hasLetter.test(password));
    setSpecial(hasSpecial.test(password));
    setLength(hasLength);
  };

  useEffect(() => {
    setFiltered(countries);
    if (state.errors) {
      setNumber(false);
      setLength(false);
      setSpecial(false);
      setLetter(false);
    }
    if (!pending) {
      setLoader(false);
    }
  }, [state, pending]);

  useEffect(() => {
    if (state?.message == "done") setOpen(true);
    console.log("done");
  }, [state]);

  const handleClose = () => {
    setOpen(false);
  };

  const filterCountry = (countryName: string) => {
    const filteredCountry = countries.filter((country) => {
      return [country.name, country.dialCode].some((r) =>
        r
          ?.toLowerCase()
          ?.toString()
          .includes(countryName.toLowerCase()?.toString())
      );
    });
    setFiltered(filteredCountry);
  };

  return (
    <main className="box-border min-h-screen w-full flex items-center text-stone-300 bg-[#171717]">
      <VerificationPopup isOpen={open} onClose={handleClose} />
      <div
        className="flex flex-1 h-screen"
        onClick={() => setShowNo(false)}
      ></div>
      <div className=" box-border  items-center  justify-center py-10  flex flex-auto">
        <div
          className={clsx(
            "sm:max-w-sm min-w-[300px]  sm:w-full text-center ",
            status && "px-6"
          )}
        >
          {!status && (
            <section className="grid gap-y-4">
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
                Sign up
              </h2>
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
                  // onClick={() => login()}
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
                      <IoLogoLinkedin className="size-7 text-[#0A66C2] relative"/>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex cursor-pointer flex-col  "
                >
                  <p className=" text-sm/6 font-medium text-stone-200">
                    Continue with Linkedin
                  </p>
                </button>
              </div>
              <div className="flex items-center justify-center ">
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="mx-3 text-gray-500">or</span>
                <div className="border-t border-gray-300 flex-grow"></div>
              </div>
            </section>
          )}
          <form action={formAction} className="z-30">
            <input
              type="text"
              name="prefix"
              className="h-0 w-0"
              readOnly
              value={selected.dialCode}
            />
            <div className="grid gap-y-5">
              {status && (
                <button
                  type="button"
                  className="inline-flex items-center  group justify-center gap-x-2 bg-white max-w-min text-black p-2 rounded-3xl "
                  onClick={() => {
                    setStatus(false);
                  }}
                >
                  <IoMdArrowRoundBack className="md:size-5 size-4 " />
                  <span className="text-xs md:text-sm font-normal md:font-semibold ">
                    Back
                  </span>
                </button>
              )}

              <label>
                <span className="block text-start text-xs font-medium text-stone-400 ">
                  Business email
                </span>

                <input
                  type="text"
                  className={clsx(
                    "mt-1  w-full px-3 py-2  hover:border-black  flex items-center rounded-md focus:ring-1 focus:ring-black ring-offset-1  outline-1 -outline-offset-1 outline-gray-300  text-sm   md:text-base text-stone-400  sm:text-sm/6",
                    !status ? "text-black" : "text-stone-400 "
                  )}
                  placeholder="Email address"
                  autoFocus
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setExists(false);
                    setEmail(e.target.value);
                  }}
                />
                {exists && (
                  <p className="text-xs text-start pt-1 text-indigo-600">
                    User already exists
                  </p>
                )}
              </label>
              {status && (
                <>
                  <div className="flex w-full space-x-2">
                    <label className="block">
                      <span className="block text-start text-xs font-medium text-stone-400">
                        Username
                      </span>
                      <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 hover:border-black  text-sm  items-center rounded-md  outline-1  focus:ring-1 focus:ring-black -outline-offset-1 ring-offset-2 outline-gray-300  md:text-base text-stone-400  sm:text-sm/6 "
                        autoFocus
                        placeholder="username"
                        name="username"
                      />
                      {state?.errors?.username &&
                        state.errors.username.map((error) => {
                          return (
                            <p
                              key={error}
                              className="text-[10px] pl-1 pt-1 text-start text-red-400"
                            >
                              {error}
                            </p>
                          );
                        })}
                    </label>{" "}
                  </div>
                  <label className="relative">
                    <span className="block text-start text-xs font-medium text-stone-400">
                      Phone number
                    </span>
                    <div className="outline-1 mt-1 flex  relative  -outline-offset-1 ring-offset-2 outline-gray-300 rounded-md  ">
                      <div
                        onClick={() => setShowNo((prev) => !prev)}
                        className="flex items-center min-w-min bg-[#0a0a0a] gap-x-2 px-3 justify-center "
                      >
                        <div
                          style={{ aspectRatio: 16 / 9 }}
                          className="md:shrink-0 "
                        >
                          <Image
                            src={selected.flag}
                            width={50}
                            height={30}
                            alt=""
                            className="w-[18px]"
                          ></Image>
                        </div>
                        <p className="text-xs text-nowrap">
                          {selected.dialCode}
                        </p>
                      </div>
                      <span className="w-full flex items-center">
                        <input
                          type="text"
                          placeholder="phone number"
                          className=" block w-full px-1 py-2   text-sm  items-center rounded-r-md  outline-hidden  md:text-base text-stone-400  sm:text-sm/6 "
                          name="phone"
                        />
                      </span>
                    </div>
                    {showNo && (
                      <div className="absolute w-full mt-2 z-10 bg-[#0a0a0a] px-1 h-[230px]  overflow-y-auto">
                        <div className="w-full sticky top-0  z-30 ">
                          <input
                            type="text"
                            placeholder="Search country"
                            className="sticky  p-1 w-full outline-1 focus:ring-black ring-offset-1 placeholder:text-sm -outline-offset-1 bg-[#0a0a0a] outline-gray-300"
                            onChange={(e) => {
                              filterCountry(e.target.value);
                            }}
                          />
                        </div>
                        <ul className="w-full relative space-y-1">
                          {filtered.map((country) => (
                            <li
                              key={country.name}
                              value={country.dialCode}
                              className="flex w-full gap-x-3 px-3 py-2 rounded-md bg-[#171717]"
                              onClick={() => {
                                const selected = countries.find(
                                  (place) => place.name == country.name
                                );
                                if (selected) setSelected(selected);
                                setShowNo(false);
                                setFiltered(countries);
                              }}
                            >
                              <div
                                style={{ aspectRatio: 16 / 9 }}
                                className="md:shrink-0 "
                              >
                                <Image
                                  src={country.flag}
                                  width={50}
                                  height={30}
                                  alt=""
                                  className="w-[18px]"
                                ></Image>
                              </div>
                              <p className="text-xs">
                                {" "}
                                {country.name.substring(0, 20)}
                              </p>
                              <p className="text-xs">{country.dialCode}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {state?.errors?.phone &&
                      state.errors.phone.map((error) => {
                        return (
                          <p
                            key={error}
                            className="text-[10px] pl-1 pt-1 text-start text-red-400"
                          >
                            {error}
                          </p>
                        );
                      })}
                  </label>
                  <label className="block">
                    <span className="block text-start text-xs font-medium text-stone-400">
                      Password
                    </span>
                    <div className=" relative">
                      <input
                        type={hidden ? "password" : "text"}
                        className="mt-1 block w-full px-3 py-2 hover:border-black  text-sm  items-center rounded-md  outline-1  focus:ring-1 focus:ring-black -outline-offset-1 ring-offset-2 outline-gray-300   md:text-base text-stone-400  sm:text-sm/6 "
                        name="password"
                        placeholder="password"
                        onClick={() => {
                          setVisible(true);
                        }}
                        onChange={(e) => {
                          testPassword(e.target.value);
                        }}
                      />
                      <div className="absolute top-0 right-1 h-full flex items-center justify-center ">
                        {hidden ? (
                          <button
                            type="button"
                            className="p-1 cursor-pointer"
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
                                fill="currentColor"
                                vectorEffect="non-scaling-stroke"
                              ></path>
                              <path
                                d="M20.177 11.678C20.067 11.446 17.41 6 12 6c-5.412 0-8.067 5.446-8.177 5.678L3.669 12l.153.322C3.933 12.554 6.588 18 12 18c5.411 0 8.066-5.446 8.177-5.678L20.33 12l-.154-.322ZM12 16.5c-3.77 0-6.03-3.42-6.65-4.5.62-1.081 2.878-4.5 6.65-4.5 3.771 0 6.028 3.418 6.65 4.5-.622 1.082-2.88 4.5-6.65 4.5Z"
                                fill="currentColor"
                                vectorEffect="non-scaling-stroke"
                              ></path>
                            </svg>
                          </button>
                        ) : (
                          <button
                            type="button"
                            className=" cursor-pointer"
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
                                fill="currentColor"
                                vectorEffect="non-scaling-stroke"
                              ></path>
                              <path
                                d="M12.331 16.06a6.09 6.09 0 0 1-1.091-.097L10 17.203c.71.225 1.487.358 2.331.358 5.412 0 8.067-5.446 8.177-5.678l.154-.322-.154-.323c-.052-.109-.667-1.37-1.866-2.677l-1.07 1.07c.7.77 1.173 1.519 1.409 1.93-.622 1.081-2.88 4.5-6.65 4.5Z"
                                fill="currentColor"
                                vectorEffect="non-scaling-stroke"
                              ></path>
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                    {state?.errors?.password &&
                      state.errors.password.map((error) => {
                        return (
                          <p
                            key={error}
                            className="text-[10px] pl-1 pt-1 text-start text-red-400"
                          >
                            {error}
                          </p>
                        );
                      })}
                  </label>
                  {visible && (
                    <>
                      <span className="w-full  box-border">
                        <ul className="flex space-y-1 flex-col">
                          <li className="inline-flex w-full">
                            <div className="flex items-center">
                              <div className="shrink-0">
                                {length ? (
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
                                      d="M12 4c-5.159 0-8 2.841-8 8s2.841 8 8 8 8-2.841 8-8-2.841-8-8-8Zm-1 11.56-3.03-3.03 1.06-1.06L11 13.44l3.97-3.97 1.06 1.06L11 15.56Z"
                                      fill="green"
                                      vectorEffect="non-scaling-stroke"
                                    ></path>
                                  </svg>
                                ) : (
                                  <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="dig-UIIcon dig-UIIcon--standard _password-validator-default-icon_4j67a_43"
                                    width="24"
                                    height="24"
                                    role="presentation"
                                    focusable="false"
                                  >
                                    <path
                                      d="M12 4c-5.159 0-8 2.841-8 8s2.841 8 8 8 8-2.841 8-8-2.841-8-8-8Zm3.536 10.475-1.061 1.06L12 13.06l-2.475 2.476-1.06-1.061L10.94 12 8.463 9.525l1.061-1.06L12 10.94l2.475-2.476 1.06 1.061L13.06 12l2.476 2.475Z"
                                      fill="gray"
                                      vectorEffect="non-scaling-stroke"
                                    ></path>
                                  </svg>
                                )}
                              </div>
                              <div>
                                <p className=" text-stone-400 font-light text-xs">
                                  At least 8 characters
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="inline-flex w-full">
                            <div className="flex items-center">
                              <div className="shrink-0">
                                {letter ? (
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
                                      d="M12 4c-5.159 0-8 2.841-8 8s2.841 8 8 8 8-2.841 8-8-2.841-8-8-8Zm-1 11.56-3.03-3.03 1.06-1.06L11 13.44l3.97-3.97 1.06 1.06L11 15.56Z"
                                      fill="green"
                                      vectorEffect="non-scaling-stroke"
                                    ></path>
                                  </svg>
                                ) : (
                                  <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="dig-UIIcon dig-UIIcon--standard _password-validator-default-icon_4j67a_43"
                                    width="24"
                                    height="24"
                                    role="presentation"
                                    focusable="false"
                                  >
                                    <path
                                      d="M12 4c-5.159 0-8 2.841-8 8s2.841 8 8 8 8-2.841 8-8-2.841-8-8-8Zm3.536 10.475-1.061 1.06L12 13.06l-2.475 2.476-1.06-1.061L10.94 12 8.463 9.525l1.061-1.06L12 10.94l2.475-2.476 1.06 1.061L13.06 12l2.476 2.475Z"
                                      fill="gray"
                                      vectorEffect="non-scaling-stroke"
                                    ></path>
                                  </svg>
                                )}
                              </div>
                              <div>
                                <p className=" text-stone-400 font-light text-xs">
                                  1 letter
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="inline-flex w-full">
                            <div className="flex items-center">
                              <div className="shrink-0">
                                {number ? (
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
                                      d="M12 4c-5.159 0-8 2.841-8 8s2.841 8 8 8 8-2.841 8-8-2.841-8-8-8Zm-1 11.56-3.03-3.03 1.06-1.06L11 13.44l3.97-3.97 1.06 1.06L11 15.56Z"
                                      fill="green"
                                      vectorEffect="non-scaling-stroke"
                                    ></path>
                                  </svg>
                                ) : (
                                  <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="dig-UIIcon dig-UIIcon--standard _password-validator-default-icon_4j67a_43"
                                    width="24"
                                    height="24"
                                    role="presentation"
                                    focusable="false"
                                  >
                                    <path
                                      d="M12 4c-5.159 0-8 2.841-8 8s2.841 8 8 8 8-2.841 8-8-2.841-8-8-8Zm3.536 10.475-1.061 1.06L12 13.06l-2.475 2.476-1.06-1.061L10.94 12 8.463 9.525l1.061-1.06L12 10.94l2.475-2.476 1.06 1.061L13.06 12l2.476 2.475Z"
                                      fill="gray"
                                      vectorEffect="non-scaling-stroke"
                                    ></path>
                                  </svg>
                                )}
                              </div>
                              <div>
                                <p className=" text-stone-400 font-light text-xs">
                                  1 number
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="inline-flex w-full">
                            <div className="flex items-center">
                              <div className="shrink-0">
                                {special ? (
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
                                      d="M12 4c-5.159 0-8 2.841-8 8s2.841 8 8 8 8-2.841 8-8-2.841-8-8-8Zm-1 11.56-3.03-3.03 1.06-1.06L11 13.44l3.97-3.97 1.06 1.06L11 15.56Z"
                                      fill="green"
                                      vectorEffect="non-scaling-stroke"
                                    ></path>
                                  </svg>
                                ) : (
                                  <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="dig-UIIcon dig-UIIcon--standard _password-validator-default-icon_4j67a_43"
                                    width="24"
                                    height="24"
                                    role="presentation"
                                    focusable="false"
                                  >
                                    <path
                                      d="M12 4c-5.159 0-8 2.841-8 8s2.841 8 8 8 8-2.841 8-8-2.841-8-8-8Zm3.536 10.475-1.061 1.06L12 13.06l-2.475 2.476-1.06-1.061L10.94 12 8.463 9.525l1.061-1.06L12 10.94l2.475-2.476 1.06 1.061L13.06 12l2.476 2.475Z"
                                      fill="gray"
                                      vectorEffect="non-scaling-stroke"
                                    ></path>
                                  </svg>
                                )}
                              </div>
                              <div>
                                <p className=" text-stone-400 font-light text-xs">
                                  1 special character
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </span>
                    </>
                  )}
                </>
              )}
              {!status && (
                <>
                  <button
                    type="button"
                    disabled={email.length < 1}
                    onClick={async () => {
                      setLoader(true);
                      const response = await axios.post("/api/auth/signup", {
                        email,
                      });
                      if (response?.data?.status == 200) {
                        setStatus(true);
                        setLoader(false);
                      } else if (response?.data?.message == "failed") {
                        setLoader(false);
                        setExists(true);
                      }
                    }}
                    className={clsx(
                      "w-full p-3 flex justify-center cursor-pointer rounded-xl  text-white",
                      email.length < 1 ? "bg-indigo-600/50" : "bg-indigo-600"
                    )}
                  >
                    {loader ? (
                      <CircleLoader loading={loader} size={27} />
                    ) : (
                      "Continue"
                    )}
                  </button>
                </>
              )}
              {status && (
                <>
                  <span className="font-light text-xs text-left">
                    By selecting {"Agree and sign up"} I agree to the{" "}
                    <Link className="text-indigo-600" href={""}>
                      Mail Terms
                    </Link>{" "}
                    and
                    <Link className="text-indigo-600" href={""}>
                      {" "}
                      Service agreement
                    </Link>
                    . Learn about how we use and protect your data in our{" "}
                    <Link className="text-indigo-600" href={""}>
                      Private policy
                    </Link>
                    .
                  </span>
                  <button
                    type="submit"
                    className="w-full p-3 flex cursor-pointer justify-center font-semibold rounded-xl bg-indigo-600 text-white"
                    onClick={() => {
                      setLoader(true);
                    }}
                  >
                    {loader ? (
                      <CircleLoader loading={loader} size={27} />
                    ) : (
                      "Agree and sign up"
                    )}
                  </button>
                </>
              )}
              <p className="text-center text-sm/6 text-gray-500">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div
        className="flex flex-1 h-screen"
        onClick={() => setShowNo(false)}
      ></div>
    </main>
  );
}
