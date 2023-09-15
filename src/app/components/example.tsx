import React from "react";
import { Bar } from "react-chartjs-2";
import { ChartData } from "chart.js";

const BarChart: React.FC = () => {
  // Datos de ejemplo para el gráfico
  const data: any = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
    datasets: [
      {
        label: "Ventas",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Gráfico de Ventas</h2>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
