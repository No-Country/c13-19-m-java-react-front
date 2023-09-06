'use client'

import React, { useState } from "react"
import login_image from '../../../../public/images/login_image.png'
import learn_logo from '../../../../public/images/learn_logo.png'
import Image from "next/image"
import { useAuth } from "@/app/hooks/useAuth"
import IconGoogle from "@/app/constants/IconGoogle"
import IconApple from "@/app/constants/IconApple"
import { useFormik } from "formik"
import { basicSchema } from "@/app/schemas"


const Login = () => {

  const { login } = useAuth()
  const [error, setError] = useState('')

  const onSubmit = async (values: any) => {
    const { mail, password } = values
    try {
      await login({ mail, password })
    } catch (error) {
      setError('credenciales incorrectas')
      console.log('error al intentar iniciar secion: ', error)
    }
  }
  const formik = useFormik({
    initialValues: {
      mail: '',
      password: ''
    },
    validationSchema: basicSchema,
    onSubmit
  })

  return (
    <div className="flex justify-around bg-[#6D23F5] w-full h-screen items-center">
      <Image src={login_image} width={500} className="sm:max-w-lg sm:block hidden" height={500} alt="logo_image" />
      <div className="flex flex-col items-center w-96 gap-5">
        <Image src={learn_logo} width={268} height={135} alt="learn_with_me_logo" />
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          {error ? <span className="text-red-400">{error}</span> : ''}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-white">usuario o correo</label>
            <input onChange={formik.handleChange} value={formik.values.mail} placeholder="damilolajohn@gmail.com" name="mail" style={{ width: '364px', height: '53px' }} type="email" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white">contraseña</label>
            <input type="password" onChange={formik.handleChange} value={formik.values.password} placeholder="1234wss_dd" name="password" style={{ width: '364px', height: '53px' }} />
          </div>
          <button type="submit" className="w-[364px] h-[53px] rounded-2xl bg-[#5316B6] text-white">Iniciar seción</button>
        </form>
        <button className="w-[364px] h-[53px] rounded-2xl bg-[#5316B6] flex justify-center items-center gap-3 text-white"><IconGoogle />  Continuar con Google</button>
        <button className="w-[364px] h-[53px] rounded-2xl bg-[#5316B6] flex justify-center items-center gap-3 text-white"><IconApple /> Continuar con Apple ID</button>
      </div>
    </div>
  )
}
export default Login