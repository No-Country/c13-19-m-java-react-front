"use client";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";
import CardCtainerProgress from "@/app/components/CardCtainerProgress";

interface CardWelcome {
  fullName: string;
  cursoCercaDeTerminar: string;
  proximaClase: string;
  porcentaje: number;
}

const CardWelcome: React.FC<CardWelcome> = ({
  fullName,
  cursoCercaDeTerminar,
  proximaClase,
  porcentaje,
}) => {
  const ImageGood = (
    <Image
      alt="coming-soon"
      src={"/images/CardContainer1.svg"}
      width={88}
      height={50}
      className="max-md:hidden lg:block"
    />
  );

  const RadialProgress = (
    <div
      className="radial-progress"
      style={{ "--value": porcentaje, "--size": "6rem", "--thickness": "1rem" }}
    >{`${porcentaje}%`}</div>
  );

  // const porcentaje = <Radial progress={15}></Radial>

  const buttonCard = (
    <button className=" text-white border-[#FFFFFF] border-[1.5px] py-1 px-2 rounded-xl text-xs mt-3">
      Ver mas
    </button>
  );

  return (
    <CardCtainerProgress
      title={`¡Buen dia, ${fullName}!`}
      subtitle={`Estas por terminar tu curso ${cursoCercaDeTerminar}`}
      direction={"horizontal"}
      button={buttonCard}
      iconOrImg={ImageGood}
      reactElement={RadialProgress}
      text={`Tu proxima clase ${proximaClase}`}
      width={400}
    ></CardCtainerProgress>
  );
};

export default CardWelcome;
