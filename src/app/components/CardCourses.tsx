import React from "react";

// Definición del tipo de las propiedades del componente
type CardCoursesProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
};

const CardCourses: React.FC<CardCoursesProps> = ({
  imageSrc,
  title,
  subtitle,
}) => {
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md w-64">
      <img src={imageSrc} alt="Curso" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{subtitle}</p>
        <div className="flex items-center">
          <span className="bg-yellow-400 text-white py-1 px-2 rounded-full text-xs">
            Descuento
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardCourses;
