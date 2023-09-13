import axios from "axios";
import React, { useState, useEffect } from "react";

interface ResultsProps {
  totalPoints: number;
  isMajorityA: boolean;
}

export default function Results({ isMajorityA }: ResultsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    sendResponseToAPI();
  }, []);

  const sendResponseToAPI = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://learn-with-me-production.up.railway.app/Api/v1/test/guardarTest/1"
      );
    } catch (error) {
      setError("Un error ocurrió mientras enviábamos tus resultados.");
    }

    setIsLoading(false);
  };

  return (
    <div className="text-center flex flex-col justify-center items-center p-4 gap-5">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-zinc-900">
        ¡Gracias por realizar el test!
      </h2>
      <p>Disfruta de una experiencia personalizada de aprendizaje.</p>
      <h3 className="font-semibold">Tus resultados son:</h3>

      <div className="w-full max-w-xs overflow-hidden bg-violet-300 rounded-lg shadow-lg">
        <img
          className="object-contain object-center w-full h-56"
          src="/images/celebracion.webp"
          alt="celebration"
        />

        <div className="py-5 text-center bg-slate-50">
          <p className="text-lg text-zinc-800 font-bold">
            {" "}
            {isMajorityA ? (
              <p>Tenes un tipo de aprendizaje visual</p>
            ) : (
              <p>Tenes un tipo de aprendizaje auditivo</p>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
