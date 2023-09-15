"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const CardGraphicTime = () => {
  const data = {
    labels: [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
    ],
    datasets: [
      {
        label: "Tareas Realizadas",
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.8)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [3, 5, 4, 6, 7, 8, 2], // Datos ficticios de tareas realizadas por día
      },
    ],
  };

  return (
    <div className="card" style={{ width: "600px", height: "400px" }}>
      <div className="card-header">
        <h3>Gráfico de Tareas Realizadas por Día</h3>
      </div>
      <div className="card-body">
        <Bar
          data={data}
          options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Cantidad de Tareas",
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Días de la Semana",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default CardGraphicTime;
