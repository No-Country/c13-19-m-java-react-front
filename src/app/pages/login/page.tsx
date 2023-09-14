"use client";
import React, { useState } from "react";
import login_image from "../../../../public/images/login_image.png";
import Image from "next/image";
import { useAuth } from "@/app/hooks/useAuth";
import { useFormik } from "formik";
import { basicSchema } from "@/app/schemas";
import LearnWithMe from "@/app/icons/LearnWithMe";
import Visibility from "@/app/icons/Visibility";
import ProfileLoginIcon from "@/app/icons/ProfileLoginIcon";
import Link from "next/link";

const Login = () => {
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [visibilityPassword, setVisibilityPassword] = useState<boolean>(false);

  const onSubmit = async (values: any) => {
    const { mail, password } = values;
    const response = await login({ mail, password });
    if (response === undefined) {
      setError("error de credenciales");
    }
  };
  const formik = useFormik({
    initialValues: {
      mail: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div className="flex justify-around bg-[#6D23F5] w-full h-screen items-center">
      <Image
        src={login_image}
        width={500}
        className="sm:max-w-lg lg:block hidden"
        height={500}
        alt="logo_image"
      />
      <div className="flex flex-col items-center w-96 gap-5">
        <LearnWithMe />
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4 max-w-sm m-auto px-2 w-full  "
        >
          {error ? (
            <span className="text-center font-medium text-red-500">
              {error}
            </span>
          ) : (
            <span className="py-3"></span>
          )}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-white">
              E-Mail
            </label>
            <div className="flex justify-between w-full items-center bg-white rounded-2xl px-3">
              <input
                type="email"
                onChange={formik.handleChange}
                value={formik.values.mail}
                placeholder="damilolajohn@gmail.com"
                name="mail"
                className="max-w-[260px] w-full h-[53px] p-1 bg-transparent text-black focus:outline-none"
              />
              <ProfileLoginIcon />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white">Contraseña</label>
            <div className="flex justify-between w-full items-center bg-white rounded-2xl px-3">
              <input
                type={visibilityPassword ? "text" : "password"}
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="1234wss_dd"
                name="password"
                className="max-w-[270px] w-full bg-transparent h-[53px] p-1 text-black focus:outline-none "
              />
              <Visibility
                setState={setVisibilityPassword}
                state={visibilityPassword}
              />
            </div>
          </div>
          <button
            style={{ backgroundColor: "#5316B6" }}
            type="submit"
            className="max-w-[364px] m-auto w-full h-[53px] rounded-2xl mt-4  text-white"
          >
            Iniciar sesión
          </button>
        </form>
        <Link className=" text-white block" href="/pages/register">
          ¿No tienes cuenta? Crea una aquí
        </Link>
      </div>
    </div>
  );
};
export default Login;
