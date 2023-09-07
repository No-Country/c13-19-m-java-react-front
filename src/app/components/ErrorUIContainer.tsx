import Link from "next/link";
import Image from "next/image";

export default function ErrorContainer() {
  return (
    <section className="m-3">
      <div className="container min-h-screen px-8 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="w-full lg:w-1/2">
          <p className="text-2xl font-medium text-purple-500 dark:text-purple-600">
            - Error
          </p>
          <h1 className="text-4xl font-semibold mt-3 text-gray-800">Oops!</h1>
          <p className="text-slate-500 text-xl mt-4">
            Lo sentimos, la pagina que estabas buscando no se encuentra o no
            esta disponible.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <Link
              className="w-1/2 px-5 py-2 font-semibold text-base text-center tracking-wide text-gray-800 transition-colors duration-200 border rounded-lg  hover:bg-slate-600 hover:border border-violet-500 hover:text-white sm:w-auto shrink-0"
              href={"/"} //*especificar la ruta//
            >
              Volver atrás
            </Link>

            <Link
              className="w-1/2 px-5 py-2 font-bold text-base text-center tracking-wide text-white transition-colors duration-200 bg-violet-500 rounded-lg hover:bg-purple-700 sm:w-auto shrink-0"
              href={"/"}
            >
              Ir al inicio
            </Link>
          </div>
        </div>

        <div className="flex justify-center w-full mt-12 lg:w-1/2 lg:mt-0">
          <Image
            alt="error_image"
            src={"/images/error.webp"}
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
}
