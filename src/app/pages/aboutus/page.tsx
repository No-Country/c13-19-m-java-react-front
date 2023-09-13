import Image from "next/image";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";
import AboutUsContainer from "@/app/components/AboutUsContainer";
import { developers } from "@/app/constants/developersInfo"


const AboutUs = () => {

  return (
    
    <div className="bg-[#6D23F5] py-10 px-32 max-sm:px-6 max-md:px-16">
        <h2 className="text-center text-2xl font-bold py-6 text-[#FFFFFF]" >Conoce a al equipo de LearnWithMe</h2>
        <p className="text-center pb-10 text-lg text-[#FFFFFF]">LearnWithMe fue desarrollado por un equipo interdisciplinario de profesionales, cubriendo los campos del research. diseño y desarrollo garantizando las mejores prácticas para obtener una plataforma user-centric, segura y escalable.</p>
        <div className="flex flex-wrap justify-evenly bg-[#6D23F5]" >
            {
            developers.map(developer => {
                const {name, subTittle, description, imageSource ,githubLink, linkedinLink} = developer
                return(
                    <AboutUsContainer
                    key={name}
                    name={name}
                    subTittle={subTittle}
                    githubLink={githubLink}
                    description={description}
                    linkedinLink={linkedinLink}
                    imageSource={imageSource}
                    />
                )

            }  )
        }
        </div>
        
    </div>
  );
}

export default AboutUs;