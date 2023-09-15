// page.jsx
"use client";
import React from "react";
import CardGraphicTime from "../../../../components/CardGraphicTime";
import CardCourses from "@/app/components/CardCourses";
import image from "../../../../../../public/images/coming.webp";
import MyCalendar from "@/app/components/Calendar";
import { useState } from "react";
import DeadlineContainer from "@/app/components/CardWorks";
import CardWelcome from "@/app/components/CardWelcome";
import CardPorcentaje from "@/app/components/CardPorcentaje";

const Page = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-3">
          <CardWelcome
            fullName="Jesus Ronquillo"
            cursoCercaDeTerminar="React.js"
            proximaClase="Jueves 13"
            porcentaje={50}
          />
        </div>
        <div>
          <MyCalendar onChange={onChange} value={date} locale="es-ES" />
        </div>
        <div className="col-span-2">
          <CardGraphicTime />
        </div>
        <div>
          <CardPorcentaje porcentaje={80} />
        </div>
        <div className="row-span-2">
          <DeadlineContainer title={"holi"} deadlineTime={"12-20"} />
          <DeadlineContainer title={"holi"} deadlineTime={"12-20"} />
          <DeadlineContainer title={"holi"} deadlineTime={"12-20"} />
          <DeadlineContainer title={"holi"} deadlineTime={"12-20"} />
          <DeadlineContainer title={"holi"} deadlineTime={"12-20"} />
          <DeadlineContainer title={"holi"} deadlineTime={"12-20"} />
          <DeadlineContainer title={"holi"} deadlineTime={"12-20"} />
          {/* <DeadlineContainer title={"holi"} deadlineTime={"12-20"} /> */}
        </div>

        <div className="col-span-3 flex space-x-4">
          <CardCourses
            imageSrc={image}
            title="Título del Curso"
            subtitle="Descripción breve del curso"
          />
          <CardCourses
            imageSrc={image}
            title="Título del Curso"
            subtitle="Descripción breve del curso"
          />
          <CardCourses
            imageSrc={image}
            title="Título del Curso"
            subtitle="Descripción breve del curso"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
