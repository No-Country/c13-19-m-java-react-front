import Image from "next/image";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";
import CardCtainerProgress from "@/app/components/CardCtainerProgress";

export default function CardTest() {


    const name = "Roberto";
    const cursoPorTerminar = "Angular";


    const ImageGood = <Image
        alt="coming-soon"
        src={"/images/CardContainer1.svg"}
        width={88}
        height={50}
    />

    const porcentaje =
        <div className="radial-progress" style={{ "--value": "70", "--size": "8rem", "--thickness": "1.2rem" }}>70%</div>

    const buttonCard = <button className=" text-white border-[#FFFFFF] border-[1.5px] py-1 px-4 rounded-xl text-xs mt-3" >Ver mas</button>


    return (
        <div>
                <CardCtainerProgress title={ `¡Buen dia, ${name}!` } subtitle={`Estas por terminar tu curso ${cursoPorTerminar}` } direction={"horizontal"} button={buttonCard} iconOrImg={ImageGood} reactElement={porcentaje} text="Tu proxima clase Jueves 12 de Marzo"></CardCtainerProgress>
        </div>
    );
}

