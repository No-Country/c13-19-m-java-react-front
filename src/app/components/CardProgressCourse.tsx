
type CardProgressProps = {
    porcentage: number
}

const CardProgressCourse = ({ porcentage }: CardProgressProps) => {

    return (
        <div>
            <progress className="bg-white w-full rounded-lg" max='100' value={porcentage}>32</progress>
            <div className="flex justify-between">
                <span className="text-sm">Completado: %{porcentage}</span>
            </div>
        </div>
    )
}



export default CardProgressCourse