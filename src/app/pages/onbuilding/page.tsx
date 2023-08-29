import Link from "next/link";
import Image from "next/image";

export default function OnBuilding() {
    return (
        <div className="container min-h-screen p-6 mx-auto lg:flex lg:items-center">
            <div className="flex flex-col items-center w-full lg:w-1/2">
                <h1 className="text-purple-500 font-semibold text-4xl p-5">
                Proxímamente grandes novedades
                </h1>
                <p className="text-gray-600 font-normal text-lg">
                Estamos construyendo algo nuevo para ti, sé el primero en enterarte.
                </p>

                <div className="flex flex-col p-1 mt-6 rounded border border-slate-500 space-y-3 lg:space-y-0 lg:flex-row">
                    <input 
                        type="text"
                        placeholder="Ingrese un correo"
                        className="text-center bg-transparent "
                    />

                    <button className="text-1xl tracking-wider font-medium px-5 py-2 text-white bg-purple-500 hover:bg-purple-600 rounded">
                        Notifícarme
                    </button>
                </div>

                <Link 
                    href={"/"}
                    className="font-bold m-6 px-5 py-2 text-sm text-center tracking-wide text-slate-600 bg-slate-50 hover:text-white hover:border-purple-500 hover:bg-slate-700 border rounded-lg border-slate-500"
                >
                    Ir al inicio
                </Link>
            </div>

            <div className="flex justify-center w-full lg:w-1/2">
                <Image
                    alt="coming-soon"
                    src={"/images/coming.png"}
                    width={400}
                    height={400}
                />
            </div>
        </div>
    );
}