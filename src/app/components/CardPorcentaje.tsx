import Image from "next/image";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";
import CardCtainerProgress from "@/app/components/CardCtainerProgress";
import './card.css'

declare module 'react' {
  interface CSSProperties {
    '--value'?: number;
    '--size'?: string;
    '--thickness'?: string
  }
}

interface CardPorcentaje {
  porcentaje: number;
}

const CardPorcentaje: React.FC<CardPorcentaje> = ({ porcentaje }) => {
  const RadialProgress = (
    <div
      className="radial-progress text-primary"
      style={{ "--value": porcentaje, "--size": "6rem", "--thickness": "1rem" }}
    >{`${porcentaje}%`}</div>
  );

  return (
    <CardCtainerProgress
      topTittle={"Tu progreso"}
      direction={"vertical"}
      width={100}
      reactElement={RadialProgress}
    />
  );
};

export default CardPorcentaje;
