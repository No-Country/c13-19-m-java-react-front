"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-calendar/dist/Calendar.css";
import "date-fns/locale/es";

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate: any) => {
    setDate(newDate);
  };

  return (
    <div>
      <h1>Calendario</h1>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

export default MyCalendar;
