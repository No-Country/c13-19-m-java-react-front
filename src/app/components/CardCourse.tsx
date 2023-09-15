import Image from "next/image"
import CardProgressCourse from "./CardProgressCourse"

type CardProps = {
    subtitle: string,
    title: string,
    porcentage: number,
    image: string
}
const CardCourse = ({ subtitle, title, porcentage, image }: CardProps) => {
    return (
        <div className="w-60 h-80 rounded-lg overflow-hidden">
            <Image src={`/${image}`} className="w-60 h-40" width={246} height={168} alt="course_image" />
            <div className="w-60  h-32 rounded-b-md  bg-[#F2F2F7]">
                <div className="w-52 m-auto flex flex-col gap-2">
                    <span className="text-gray-400">{subtitle}</span>
                    <h2 className="text-xl">{title}</h2>
                    <div className="bg-[#E5E5EA] p-2 rounded-md m-auto w-52 h-14">
                        <CardProgressCourse porcentage={porcentage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCourse