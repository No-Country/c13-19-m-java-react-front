"use client";

import { useState } from "react";
import Link from "next/link";
import { preguntas } from "@/app/data/preguntas.json";
import Results from "@/app/components/ResultsContainer";

export interface Question {
  id: number;
  texto: string;
  options: {
    a: {
      text: string;
    };
    b: {
      text: string;
    };
  };
}

interface Answer extends Question {
  points: 0 | 1 | 2;
}

const questions: Question[] = preguntas;

function Rating({
  value,
  onChange,
}: {
  value: Answer["points"];
  onChange: (value: Answer["points"]) => void;
}) {
  function handleRate(event: React.ChangeEvent<HTMLSelectElement>) {
    onChange(Number(event.target.value) as Answer["points"]);
  }

  return (
    <select
      value={value}
      onChange={handleRate}
      className="bg-slate-500 text-slate-50 text-lg font-normal border rounded-sm p-2"
    >
      <option value="0">Elegí una opción</option>
      <option value="1">A</option>
      <option value="2">B</option>
    </select>
  );
}

///
///

export default function Quiz() {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const currentQuestion = questions[answers.length];

  function handleRate(rating: Answer["points"]) {
    setAnswers((answers) =>
      answers.concat({
        ...currentQuestion,
        points: rating,
      })
    );
  }

  function calculateTotalPoints(answers: Answer[]): [number, boolean] {
    const totalPoints = answers.reduce(
      (total, answer) => total + answer.points,
      0
    );
    const countA = answers.filter((answer) => answer.points === 1).length;
    const countB = answers.filter((answer) => answer.points === 2).length;

    const isMajorityA = countA > countB;

    return [totalPoints, isMajorityA];
  }

  const [totalPoints, isMajorityA] = calculateTotalPoints(answers);

  if (!currentQuestion) {
    return (
      <section className="min-h-screen bg-violet-700 p-10">
        <div className="w-fit font-normal text-xl text-zinc-900 rounded-2xl bg-violet-400 shadow-xl p-8 gap-3 mx-auto">
          <div>
            <Results totalPoints={totalPoints} isMajorityA={isMajorityA} />
          </div>
        </div>
        <div className="flex flex-row justify-center align-middle mt-6 p-4">
          <Link
            href="/pages/dashboard/sections/courses"
            className="bg-violet-800 text-slate-50 text-center text-lg border border-slate-600 rounded-md w-[300px] h-[50px] p-3 hover:scale-105"
          >
            Comenzar
          </Link>
          {/* La idea es que esta ruta te lleve al dashbord */}
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-zinc-800 bg-violet-700">
      <div className="mx-auto flex flex-col justify-around gap-4 p-6 md:p-11 rounded-lg shadow-lg shadow-slate-600 w-full sm:w-[400px] md:w-[600px] md:h-[500px] bg-slate-50">
        <h1 className="font-bold text-2xl md:text-3xl text-center">
          {" "}
          Test de aprendizaje 🤯
        </h1>

        <div className="text-lg">
          <p className="font-bold">{currentQuestion.texto}</p>
          <p>{currentQuestion.options.a.text}</p>
          <p>{currentQuestion.options.b.text}</p>
        </div>

        <Rating value={0} onChange={handleRate} />
      </div>
    </div>
  );
}
