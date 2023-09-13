import Image from "next/image";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";
import AboutUsContainer from "@/app/components/AboutUsContainer";

const developers = [
    {name: "Evelyn Carvajal",
    subTittle: "Project Manager",
    description: "Project Manager y Scrum Master especializada en agilismo, cuenta con más de 10 años liderando proyectos de gran escala.",
    githubLink: "https://github.com/eitan230/eitan230.github.io/blob/main/encriptador.html",
    },

    {name: "Leonardo Vargas",
    subTittle: "Java Developer",
    description: "Ingeniero Mecánico con experiencia trabajando en Java, JPA, Springboot, además de Javascript y HTML.",
    githubLink: "https://github.com/eitan230/eitan230.github.io/blob/main/encriptador.html",
    },

    {name: "Ignacio Varela",
    subTittle: "Java Developer",
    description: "Desarrollador Java con experiencia trabajando en Springboot, JPA, MySQL, Javascript y React.",
    githubLink: "https://github.com/eitan230/eitan230.github.io/blob/main/encriptador.html",
    },

    {name: "Daniel Ramos",
    subTittle: "Frontend Developer",
    description: "Fullstack Developer con experiencia trabajando en React, Next.js, Node.js y Typescript.",
    githubLink: "https://github.com/eitan230/eitan230.github.io/blob/main/encriptador.html",
    },

    {name: "Paula Velez",
    subTittle: "Frontend Developer",
    description: "Técnica en Desarrollo de Software, cuenta con experiencia en Reactjs, Nextjs, JavaScript así como Typescript y Tailwind CSS, actualmente implementando librerías como Three.js, React Three Fiber y GSAP.",
    githubLink: "https://github.com/eitan230/eitan230.github.io/blob/main/encriptador.html",
    },

    {name: "Eitan Sanabria",
    subTittle: "Frontend Developer",
    description: "Técnico en Programación con experiencia en React, JS, React Native y conocimientos en C#, .Net, C y Java, entre otras tecnologías.",
    githubLink: "",
    },

    {name: "Jesús Ronquillo",
    subTittle: "Frontend Developer",
    description: "Ingeniero de Software con 3 años de experiencia trabajando en React, Node, Typescript.y Python entre otras tecnologías.",
    githubLink: "",
    },

    {name: "Nicolàs Guerrero",
    subTittle: "QA Automation",
    description: "Quality Assurance Specialist con experiencia en Automation. Con más de 8 años de experiencia, trabajó con Postman, Jira Qmetry y Jenkins entre otras.",
    githubLink: "",
    },

    {name: "Emely Noelia Arteaga",
    subTittle: "UX/UI Designer",
    description: "Diseñadora UX/UI y Arquitecta con experiencia trabajando en proyectos digitales, realizó actividades de mentoring y tutorías en Coderhouse.",
    githubLink: "",
    },
    {name: "Florencia Bonduel",
    subTittle: "UX/UI Designer",
    description: "Diseñadora UX/UI con experiencia trabajando en Figma, asi como en docencia en Psicología.",
    githubLink: "",
    },
    {name: "Mariano Obligado",
    subTittle: "Product Manager",
    description: "Product Manager con experiencia trabajando con herramientas No-Code, y conocimientos de desarrollo en iOS (Swift, SwiftUI), JS y Java.",
    githubLink: "",
    },

]


const AboutUs = () => {

  return (
    
    <div className="bg-[#6D23F5] py-10 px-32">
        <h2 className="text-center text-black text-2xl font-bold py-6" >Conoce a al equipo de LearnWithMe</h2>
        <p className="text-center pb-4 text-lg">LearnWithMe fue desarrollado por un equipo interdisciplinario de profesionales, cubriendo los campos del research. diseño y desarrollo garantizando las mejores prácticas para obtener una plataforma user-centric, segura y escalable.</p>
        <div className="flex flex-wrap justify-evenly bg-[#6D23F5]" >
            {
            developers.map(developer => {
                const {name, subTittle, githubLink, description } = developer
                return(
                    <AboutUsContainer
                    key={name}
                    name={name}
                    subTittle={subTittle}
                    githubLink={githubLink}
                    description={description}
                    />
                )

            }  )
        }
        </div>
        
        {/* <AboutUsContainer githubLink="https://github.com/eitan230/eitan230.github.io/blob/main/encriptador.html" ></AboutUsContainer> */}
    </div>
  );
}

export default AboutUs;