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
      className="bg-slate-500 text-slate-50 text-lg font-normal border rounded-sm p-4"
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
      <>
        <div className="w-fit font-normal text-xl rounded-md bg-slate-300 shadow-xl p-8 gap-3 mt-10 m-auto">
          <div>
            <Results totalPoints={totalPoints} isMajorityA={isMajorityA} />
          </div>
          {/* <ul className="text-zinc-800 grid grid-cols-1 p-2 gap-3">
            {answers.map((answer) => (
              <li className="p-1" key={answer.id}>
                {answer.id}. {answer.texto} 👉 {answer.points}
              </li>
            ))}
          </ul> */}

          <div className="flex justify-center gap-4 p-4">
            <Link
              href="/"
              className="bg-purple-500 text-slate-50 border border-slate-800 rounded-md px-3 py-1 hover:scale-105"
            >
              Ir al dashboard
            </Link>
            {/* La idea es que esta ruta te lleve al dashbord */}
          </div>
        </div>
      </>
    );
  }

  return (
    <div
      className="container flex flex-col items-center justify-center text-zinc-800"
      style={{ height: "calc(100vh - 1rem)" }}
    >
      <div className="flex flex-col justify-around p-7 rounded-lg shadow-lg shadow-slate-300 w-[600px] h-[480px]">
        <h1 className="font-bold text-3xl text-center">
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
