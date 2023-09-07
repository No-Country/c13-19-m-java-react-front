import Image from "next/image"

const UserProfile = ({ }) => {
    return (
        <div className="w-36 flex gap-4 items-center">
            {/* <Image className="rounded-full" src={} width={50} height={50}/> */}
            <div className="w-10 h-10 rounded-full p-3 bg-red-600" />
            <div>
                <h2>Rafael Díaz</h2>
                <span>Profesor</span>
            </div>
        </div>
    )
}

export default UserProfile