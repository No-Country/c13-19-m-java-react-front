import React from "react";

interface CardContainerProps {
  title: string;
  subtitle: string;
  textList?: string[];
  iconOrImg?: React.ReactElement;
  direction: "horizontal" | "vertical";
  textListDecoration?: "numbers" | "squares" | "circles";
}

const CardContainer: React.FC<CardContainerProps> = ({
  title,
  subtitle,
  textList,
  iconOrImg,
  direction = "vertical",
  textListDecoration = "numbers",
}) => {
  const containerClasses =
    "p-4 border rounded-xl shadow bg-white w-[150px] md:w-[320px]"; // Cambia el ancho a 150px en pantallas pequeñas
  const titleClasses = "mb-2 font-bold text-xl";
  const subtitleClasses = "mb-2 text-gray-500";
  const iconOrImgContainerClasses = "mb-4";
  const textListClasses = "space-y-2";
  const listItemClasses = "flex items-center";

  return (
    <div className={containerClasses}>
      {iconOrImg && (
        <div className={iconOrImgContainerClasses}>{iconOrImg}</div>
      )}
      {title && <h3 className={titleClasses}>{title}</h3>}
      {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
      {textList && (
        <ul className={textListClasses}>
          {textList.map((item, index) => (
            <li key={index} className={listItemClasses}>
              {textListDecoration === "numbers" && (
                <span className="mr-2 text-gray-700">{index + 1}.</span>
              )}
              {textListDecoration === "circles" && (
                <span className="mr-2">○</span>
              )}
              {textListDecoration === "squares" && (
                <span className="mr-2">■</span>
              )}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CardContainer;
