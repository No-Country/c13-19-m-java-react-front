// page.jsx
"use client";
import React from "react";
import CardGraphicTime from "../../../../components/CardGraphicTime";
import CardCourses from "@/app/components/CardCourses";
import image from "../../../../../../public/images/coming.webp";
import MyCalendar from "@/app/components/Calendar";
import { useState } from "react";
import DeadlineContainer from "@/app/components/CardWorks";

const Page = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <>
      <CardGraphicTime />
      <CardCourses
        imageSrc={image}
        title="Título del Curso"
        subtitle="Descripción breve del curso"
      />
      <MyCalendar onChange={onChange} value={date} locale="es-ES" />
      <DeadlineContainer title={"holi"} deadlineTime={"12-20"} />
    </>
  );
};

export default Page;
