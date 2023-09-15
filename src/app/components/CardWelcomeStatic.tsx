"use client"
import Image from "next/image";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";
import CardCtainerProgressStatic from "@/app/components/CardCtainerProgressStatic";


interface CardWelcomeStatic {
    fullName: string;
}

const CardWelcomeStatic: React.FC<CardWelcomeStatic> = ({
    fullName

}) => {

    const ImageGood = <Image
        alt="coming-soon"
        src={"/images/CardContainer1.svg"}
        width={88}
        height={50}
        className="max-md:hidden lg:block"
    />

    const buttonCard = <button className=" text-white border-[#FFFFFF] border-[1.5px] py-1 px-2 rounded-xl text-xs mt-3" >Ver mas</button>


    return (
            <CardCtainerProgressStatic 
                title={ `¡Buen dia, ${fullName}!` } 
                subtitle="¿Estas listo para comenzar a aprender?"
                text="Verás tus clases aquí una vez iniciada tu primer cursada"
                direction={"horizontal"} 
                button={buttonCard} 
                iconOrImg={ImageGood} 
                width={600}></CardCtainerProgressStatic>
    );
}

export default CardWelcomeStatic;

