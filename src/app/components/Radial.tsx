import React from 'react';

const RadialProgressBar = ({ progress }) => {
  const outerCircleSize = 100; // Tamaño del círculo exterior
  const borderWidth = 10; // Grosor de la línea de progreso

  return (
    <div
      className={`w-${outerCircleSize} h-${outerCircleSize} relative`}
    >
      <div
        className={`w-full h-full absolute rounded-full bg-white dark:bg-gray-800`}
      ></div>
      <div
        className={`w-full h-full absolute rounded-full bg-transparent border-${borderWidth} border-blue-500 border-solid`}
        style={{
          clipPath: `polygon(0 0, 100% 0, 100% ${100 - progress}%, 0 ${100 - progress}%)`,
        }}
      ></div>
      <div className="flex items-center justify-center w-full h-full absolute">
        <span className="text-xl font-semibold">{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default RadialProgressBar;
