"use client";
import React, { useState } from "react";
import axios from "axios";

const Registro: React.FC = () => {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [apellidoCompleto, setApellidoCompleto] = useState("");
  const [dni, setDni] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [pais, setPais] = useState("");
  const [estado, setEstado] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !nombreCompleto ||
      !apellidoCompleto ||
      !dni ||
      !mail ||
      !password ||
      !fechaNacimiento ||
      !pais ||
      !estado
    ) {
      setError("Por favor, rellena todos los campos");
      return;
    }

    try {
      const response = await axios.post(
        "https://learn-with-me-develop.up.railway.app/Api/v1/alumno/registro",
        {
          nombreCompleto: nombreCompleto,
          apellidoCompleto: apellidoCompleto,
          dni: dni,
          mail: mail,
          password: password,
          fechaNacimiento: fechaNacimiento,
          pais: pais,
          estado: estado,
        }
      );

      if (response.status === 200) {
        // Registro exitoso
        console.log("Registro exitoso");
      } else {
        // Error en el registro
        setError("Error en el registro");
        console.error("Error en el registro:", response);
      }
    } catch (error) {
      setError("Error en el registro");
      console.error("Error en el registro:", error);
    }
  };

  return (
    <div className="flex flex-col justify-around bg-[#6D23F5] w-full h-screen items-center">
      <div className="h-6 w-[360px] bg-white rounded-full h-2.5 ">
        <div
          className="h-6 bg-[#5316B6] h-2.5 rounded-full relative"
          style={{ width: "55%" }}
        >
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            50%
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center w-96 gap-5">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="nombreCompleto" className="text-white">
              Nombre Completo
            </label>
            <input
              type="text"
              id="nombreCompleto"
              placeholder="Nombre Completo"
              value={nombreCompleto}
              onChange={(e) => setNombreCompleto(e.target.value)}
              className="rounded-lg px-3 py-2 bg-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="apellidoCompleto" className="text-white">
              Apellido Completo
            </label>
            <input
              type="text"
              id="apellidoCompleto"
              placeholder="Apellido Completo"
              value={apellidoCompleto}
              onChange={(e) => setApellidoCompleto(e.target.value)}
              className="rounded-lg px-3 py-2 bg-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="dni" className="text-white">
              DNI
            </label>
            <input
              type="text"
              id="dni"
              placeholder="DNI"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              className="rounded-lg px-3 py-2 bg-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="mail" className="text-white">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="mail"
              placeholder="Correo Electrónico"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className="rounded-lg px-3 py-2 bg-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-white">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg px-3 py-2 bg-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="fechaNacimiento" className="text-white">
              Fecha de Nacimiento
            </label>
            <input
              type="text"
              id="fechaNacimiento"
              placeholder="Fecha de Nacimiento (YYYY-MM-DD)"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              className="rounded-lg px-3 py-2 bg-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pais" className="text-white">
              País
            </label>
            <input
              type="text"
              id="pais"
              placeholder="País"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
              className="rounded-lg px-3 py-2 bg-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="estado" className="text-white">
              Estado
            </label>
            <input
              type="text"
              id="estado"
              placeholder="Estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              className="rounded-lg px-3 py-2 bg-white"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            className="w-[364px] h-[53px] rounded-2xl bg-black text-white" // Cambia bg-[#5316B6] a bg-black
            type="submit"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registro;
