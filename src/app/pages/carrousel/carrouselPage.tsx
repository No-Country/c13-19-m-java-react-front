import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";
import CarrouselCard from "@/app/components/CarrouselCard";


export default function Carrousel() {
    
    
    return (
        <div className="bg-[#6D23F5] w-full h-screen flex justify-center">
            <div className="carousel w-full">
                <CarrouselCard source={"/images/ilustracion01.svg"} tittle={"Listos para empezar"} itemNum={1}>Empieza a cambiar tu manera de aprender, crea cosas nuevas e innova. Serás parte del cambio revolucionario en la educacion y podras explotar todo tu talento.</CarrouselCard>

                <CarrouselCard source={"/images/ilustracion02.svg"} tittle={"Se parte de nuestros estudiantes"} itemNum={2}>Siendo nuestro estudiante tendras acceso ilimitado a tu ruta de aprendizaje personalizada y asesoramiento especializado.</CarrouselCard>

                <CarrouselCard source={"/images/ilustracion03.svg"} tittle={"Se parte de nuestro equipo"} itemNum={3}>Se parte del primer equipo de docentes personalizados, con capacitaciones material educativo y la mejor manera de conectar con tu alumno.</CarrouselCard>
            </div>
        </div>
    );
}
