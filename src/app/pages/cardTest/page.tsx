"use client"
import Image from "next/image";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";
import CardCtainerProgress from "@/app/components/CardCtainerProgress";
import Radial from "@/app/components/Radial";
import CardWelcome from "@/app/components/CardWelcome";
import CardPorcentaje from "@/app/components/CardPorcentaje";
import CardWelcomeStatic from "@/app/components/CardWelcomeStatic";

export default function CardTest() {


    const name = "Roberto";
    const cursoPorTerminar = "Angular";


    const ImageGood = <Image
        alt="coming-soon"
        src={"/images/CardContainer1.svg"}
        width={88}
        height={50}
        className="max-md:hidden lg:block"
    />

    const porcentaje =
          <div className="radial-progress" style={{ "--value": "70", "--size": "6rem", "--thickness": "1rem" }}>70%</div>

     // const porcentaje = <Radial progress={15}></Radial>

    const buttonCard = <button className=" text-white border-[#FFFFFF] border-[1.5px] py-1 px-2 rounded-xl text-xs mt-3" >Ver mas</button>


    return (
        <div>
            {/* <CardCtainerProgress 
                title={ `¡Buen dia, ${name}!` } 
                subtitle={`Estas por terminar tu curso ${cursoPorTerminar}` } 
                direction={"horizontal"} 
                button={buttonCard} 
                iconOrImg={ImageGood} 
                reactElement={porcentaje} 
                text="Tu proxima clase Jueves 12 de Marzo"
                width={400}></CardCtainerProgress> */}
                
                {/* <CardPorcentaje porcentaje={80}></CardPorcentaje> */}
                {/* <CardWelcome fullName={"Eitan Sanarbia"} cursoCercaDeTerminar={"asdas"} proximaClase={"asdasd"} porcentaje={0}></CardWelcome> */}
                <CardWelcomeStatic fullName={"Eitan Sanarbia"}></CardWelcomeStatic>
        </div>
                


    );
}

