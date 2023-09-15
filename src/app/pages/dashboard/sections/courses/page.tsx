import CardCourse from "@/app/components/CardCourse";
import PlayIcon from "@/app/icons/PlayIcon";

const carereasData = [
    {
        id: 1,
        title: "HTML y CSS",
        subtitle: [
            { name: "Introducción" },
            { name: "Etiquetas semánticas" },
            { name: "Box Model" }
        ]
    },
    {
        id: 2,
        title: "Responsive Web Design",
        subtitle: [
            { name: "Flexbox" },
            { name: "CSS Grid" }
        ]
    },
    {
        id: 3,
        title: "Controlador de versiones",
        subtitle: [
            { name: "Git" },
            { name: "GitHub" },
            { name: "GitFlow" }
        ]
    },
    {
        id: 4,
        title: "Framework CSS",
        subtitle: [

            { name: "Bootstrap" },
            { name: "Sass" }
        ]
    },
    {
        id: 5,
        title: "JavaScript",
        subtitle: [

            { name: "Introducción" },
            { name: "DOM" },
            { name: "Eventos" },
            { name: "Promesas" }
        ]
    }
]

const CoursesPage = () => {
    return (
        <section className="w-full p-2">
            <div className="w-full flex">
                <button className="border-2 rounded-sm px-5 w-32">Todos</button>
                <button className="border-2 rounded-sm px-5 w-32">Diseño</button>
                <button className="border-2 rounded-sm px-5 w-32">Programación</button>
                <button className="border-2 rounded-sm px-5 w-32">Producto</button>
                <button className="border-2 rounded-sm px-5 w-32">Metodologías</button>

            </div>

            <section className="flex mt-12 px-2 gap-6">
                <div className="w-full ">
                    <h2>Todos los cursos / Mis cursos</h2>
                    <div className="w-full flex mt-5 justify-start items-center gap-10 flex-wrap">
                        <CardCourse
                            image="../../../../../../images/developer.png"
                            title="Desarrollo web"
                            subtitle="Frontend"
                            porcentage={10}
                        />
                        <CardCourse
                            image="../../../../../../images/scrum.png"
                            title="ReactJS"
                            subtitle="Frontend"
                            porcentage={10}
                        />
                        <CardCourse
                            image="../../../../../../images/developer.png"
                            title="JavaScript"
                            subtitle="Frontend"
                            porcentage={67}
                        />
                        <CardCourse
                            image="../../../../../../images/developer.png"
                            title="Python"
                            subtitle="Frontend"
                            porcentage={0}
                        />
                        <CardCourse
                            image="../../../../../../images/scrum.png"
                            title="UI Desing"
                            subtitle="Diseño"
                            porcentage={100}
                        />
                        <CardCourse
                            image="../../../../../../images/developer.png"
                            title="Scrum"
                            subtitle="Metodologías"
                            porcentage={30}
                        />
                    </div>
                </div>
                <div className="max-w-xs w-full">
                    <h2>Desarrollo web</h2>
                    <div className="w-full before:content-[''] before:top-5 max-h-max  before:w-1 before:h-full before:bg-[#5316B6] before:absolute before:-left-3 relative">
                        {
                            carereasData.map((item, index) => (
                                <div className="mt-2 ">
                                    <div className="w-full before:content-[''] before:absolute before:rounded-full before:w-5 before:h-5 before:bg-[#5316B6] before:-left-5">
                                        <h2 className="text-2xl border-b-2 pb-2 border-b-gray-400 px-2">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <div className=" flex flex-col gap-5 px-4 mt-3">
                                        {
                                            item.subtitle?.map((course, index) => (
                                                <div className="flex justify-between">
                                                    <span>{index + 1} {course.name} </span>
                                                    <div className="flex gap-3">
                                                        <PlayIcon />
                                                        <input type="checkbox" />
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

            </section>
        </section>
    );
};

export default CoursesPage;
