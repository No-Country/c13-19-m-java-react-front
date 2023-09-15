import React from "react";

interface CardCtainerProgress {
  topTittle?: string;
  title?: string;
  width: number;
  subtitle?: string;
  direction: "horizontal" | "vertical";
  text?: string;
  button?: React.ReactElement;
  textList?: string[];
  iconOrImg?: React.ReactElement;
  textListDecoration?: "numbers" | "squares" | "circles";
  reactElement?: React.ReactElement;
}

const CardCtainerProgress: React.FC<CardCtainerProgress> = ({
  topTittle,
  width,
  title,
  subtitle,
  textList,
  text,
  button,
  iconOrImg,
  direction = "vertical",
  textListDecoration = "numbers",
  reactElement,
}) => {
  const widthBig =
    "w-[360px] max-sm:gap-1 max-md:gap-2 md:w-[480px] lg:w-[100%] ";
  const widthSmall =
    "w-[170px] max-sm:hidden max-sm:gap-1 max-md:gap-2 md:w-[180px] lg:w-[190px]";
  const containerClasses = `flex ${
    direction === "vertical" ? "flex-col" : "flex-row"
  } items-center justify-center gap-5 p-15 border rounded-xl shadow w-[360px] ${
    width >= 350 ? widthBig : widthSmall
  } border-none bg-[#B993FF]`; // Cambia el ancho a 150px en pantallas pequeñas
  const titleClasses = "mb-2 font-bold text-xl font-";
  const subtitleClasses = "mb-2 text-[#000000] text-sm";
  const textClasses = "mb-2 text-[#FFFFFF] text-sm";
  const iconOrImgContainerClasses = "mb-4";
  const textListClasses = "space-y-2";
  const listItemClasses = "flex items-center";

  return (
    <div className={containerClasses}>
      {topTittle && <h3 className={titleClasses}>{topTittle}</h3>}
      {reactElement && reactElement}
      <div>
        {title && <h3 className={titleClasses}>{title}</h3>}
        {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
        {text && <p className={textClasses}>{text}</p>}
        {button && button}
      </div>
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
      {iconOrImg && (
        <div className={iconOrImgContainerClasses}>{iconOrImg}</div>
      )}
    </div>
  );
};

export default CardCtainerProgress;
