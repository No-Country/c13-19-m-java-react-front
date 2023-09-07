import Image from "next/image";

interface ResultsProps {
  totalPoints: number;
  isMajorityA: boolean;
}

export default function Results({ isMajorityA }: ResultsProps) {
  return (
    <div className="text-center flex flex-col justify-center items-center p-4 gap-5">
      <h2 className="text-center text-4xl font-bold text-purple-700">
        ¡Gracias por realizar el test!
      </h2>
      <p>Disfruta de una experiencia personalizada de aprendizaje</p>

      <div className="p-4 border rounded-md border-slate-600">
        <h3 className="font-semibold">Tus resultados son:</h3>
        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            alt="celebration"
            src={"/images/test_final.png"}
            width={100}
            height={100}
          />
          <p>
            {" "}
            {isMajorityA ? (
              <p className="font-semibold">
                Tenes un tipo de aprendizaje visual.
              </p>
            ) : (
              <p className="font-semibold">
                Tenes un tipo de aprendizaje auditivo.
              </p>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
