"use client";
import { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../utils/animation_llu51y9u.json";

export default function Splash() {
  const style = {
    height: 300,
  };

  useEffect(() => {
    // Establecer un temporizador para redirigir después de 5 segundos (5000 milisegundos)
    const redirectTimer = setTimeout(() => {
      // Redirigir a la página deseada después de 5 segundos
      window.location.href = "/pages/login";
    }, 5000);

    // Limpieza del temporizador en caso de que el componente se desmonte antes de que se complete
    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className="min-h-screen p-20 gap-2 bg-[#6D23F5] flex flex-col items-center justify-center text-amber-400">
      <h1 className="text-4xl font-bold text-center font-sansita animate-fadeIn">
        Learn with me
      </h1>

      <Lottie style={style} animationData={animationData} />
    </div>
  );
}
