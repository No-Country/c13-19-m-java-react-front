import Image from "next/image";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";

interface AboutUsContainer {
  imageSource: string;
  name?: string;
  subTittle?: string;
  description?: string;
  githubLink?: string;
  linkedinLink?: string;
}

const AboutUsContainer: React.FC<AboutUsContainer> = ({
    imageSource,
    name,
    subTittle,
    description,
    githubLink,
    linkedinLink,

}) => {

  return (
    <div className="w-[300px] bg-[#ffffff] flex flex-col items-center  pt-3 px-3 rounded-md mb-5">
        <Image 
        width={350}
        height={300}
        src={imageSource} 
        alt={`Developer ${name}picture`}
        className="rounded-full w-[70px] h-[70px]">
            
        </Image>
            <h2 className="text-center mt-8 text-black">{name}</h2>
            <h3 className="text-center text-sm text-[#5316B6] mt-2">{subTittle}</h3>
            <p className="text-center mt-9 mx-2 text-xs">{description}</p>
    <div className="mt-4 flex flex-row self-stretch justify-center gap-1">
        { githubLink && <a href={githubLink} target="_blank">
        <Image 
            width={350}
            height={300}
            src={"/images/githubIcon.svg"}
            className="rounded-full w-[25px] h-[25px]" 
            alt={"GitHub Icon"}/>
        </a> }
        {linkedinLink && <a href={linkedinLink} target="_blank">
        <Image 
            width={350}
            height={300}
            src={"/images/linkedinIcon.svg"}
            className="w-[50px] h-[30px]" 
            alt={"Linkedin Icon"}/>  
        </a>}
    </div>

    </div>
  );
}

export default AboutUsContainer;