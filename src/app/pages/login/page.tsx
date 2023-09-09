"use client";

import React, { useState } from "react";
import login_image from "../../../../public/images/login_image.png";
import learn_logo from "../../../../public/images/learn_logo.png";
import Image from "next/image";
import { useAuth } from "@/app/hooks/useAuth";
import InputContainer from "@/app/components/InputContainer";
import IconGoogle from "@/app/constants/iconGoogle";
import IconApple from "@/app/constants/IconApple";
import Link from "next/link";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("porfavor, rellena todos los campos");
      return;
    }

    try {
      await login({ email, password });
    } catch (error) {
      setError("credenciales incorrectas");
      console.log("error al intentar iniciar secion: ", error);
    }
  };

  return (
    <div className="flex justify-around bg-[#6D23F5] w-full h-screen items-center">
      <Image src={login_image} width={500} height={500} alt="logo_image" />
      <div className="flex flex-col items-center w-96 gap-5">
        <Image
          src={learn_logo}
          width={268}
          height={135}
          alt="learn_with_me_logo"
        />
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-white">
              usuario o correo
            </label>
            <InputContainer
              style={{ width: "364px", height: "53px" }}
              type="email"
              placeholder="damilolajohn@gmail.com"
              valueContainerName="input_gmail"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white">contraseña</label>
            <InputContainer
              style={{ width: "364px", height: "53px" }}
              placeholder="1234567"
              type="password"
              valueContainerName="input_paswword"
            />
            <a>Olvide la contraseña</a>
          </div>
          <button className="w-[364px] h-[53px] rounded-2xl bg-[#5316B6] text-white">
            Iniciar seción
          </button>
          <Link href="/pages/register" passHref>
            <div className="w-[364px] h-[53px] rounded-2xl bg-[#5316B6] text-white flex justify-center items-center">
              Registrarse
            </div>
          </Link>
        </form>
        <button className="w-[364px] h-[53px] rounded-2xl bg-[#5316B6] flex justify-center items-center gap-3 text-white">
          <IconGoogle /> Continuar con Google
        </button>
        <button className="w-[364px] h-[53px] rounded-2xl bg-[#5316B6] flex justify-center items-center gap-3 text-white">
          <IconApple /> Continuar con Apple ID
        </button>
      </div>
    </div>
  );
};

export default Login;
