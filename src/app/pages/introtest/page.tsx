"use client";

import Image from "next/image";
import Link from "next/link";

export default function IntroTestPage() {
  return (
    <section className=" bg-violet-700 min-h-screen text-slate-100">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="flex justify-center mt-6">
          <Image
            src="/images/teacher(2).png"
            width={400}
            height={400}
            alt="teacher_image"
          ></Image>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold mt-2">
            En Learn With Me nos adaptamos a tu tipo de aprendizaje
          </h1>
          <p className="mt-8 text-xl">
            {" "}
            Descubramos que forma de aprendizaje se adapta a ti.
          </p>
          <button className="px-12 py-3.5 mt-12 text-xl font-medium text-center bg-violet-800 rounded-2xl hover:scale-105">
            <Link href="/pages/testaprendizaje">Test de aprendizaje</Link>
          </button>
        </div>
      </div>
      <div className="w-fit text-base flex align-middle justify-center mx-auto p-1 mt-5 text-slate-300 hover:text-slate-900">
        <a href="#">Más información de los tipos de test aquí</a>
      </div>
    </section>
  );
}
