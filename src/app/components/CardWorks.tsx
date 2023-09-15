import React from "react";
import { FaBook } from "react-icons/fa"; // Importa el ícono de libro desde react-icons
// Asumiendo que tienes un componente Button personalizado

interface DeadlineContainerProps {
  title: string;
  deadlineTime: string;
}

const DeadlineContainer: React.FC<DeadlineContainerProps> = ({
  title,
  deadlineTime,
}) => {
  return (
    <div className="flex items-center border p-5 rounded-lg space-x-4 w-360 bg-[#F2F2F7]">
      <FaBook className="text-[#5316B6] text-2xl" /> {/* Ícono de libro */}
      <div>
        <h2 className="text-xl font-semibold">{title}</h2> {/* Título */}
        <p className="text-gray-600">Hora límite: {deadlineTime}</p>{" "}
        {/* Hora de tiempo límite */}
      </div>
    </div>
  );
};

export default DeadlineContainer;
