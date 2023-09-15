import Image from "next/image";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";
<<<<<<< HEAD

function CarrouselCard({ source, tittle, children, itemNum }: any) {
=======
import Link from "next/link";
interface CarrouselCard {
  source: string;
  tittle: string;
  children: string;
  itemNum: number;
}

const CarrouselCard: React.FC<CarrouselCard> = ({
  source,
  tittle,
  children,
  itemNum
}) => {
>>>>>>> 3c14860462f3eb2679c60c92182f9ecac95cd1d2
  const numItem = `item${itemNum}`;

  const styles = (num: number) => {
    if (itemNum === num) {
      return "btn-circle btn-xs opacity-40 bg-slate-800";
    } else {
      return "btn-circle btn-xs bg-[#D9D9D9]";
    }
  };

  const goTo = `#item${itemNum + 1}`;

  return (
    <div
      id={numItem}
      className="carousel-item w-full flex justify-center gap-32 max-lg:flex-col items-center my-10 max-2xl:gap-8 "
    >
      <Image
        alt="coming-soon"
        src={source}
        width={800}
        height={400}
        className="w-[1000px] max-2xl:w-[400px] max-sm:w-[200px]"
      />
      <div className="flex flex-col align-center justify-center">
        <div className="w-96 flex flex-col max-sm:w-80">
          <h2 className="font-black text-4xl mb-10 text-[#000000] max-2xl:text-3xl max-sm:text-center max-sm:text-2xl max-xl:text-[#F2F2F2]">
            {tittle}
          </h2>
          <p className="text-[#F2F2F2] text-xl max-2xl:text-base max-sm:text-center ">
            {" "}
            {children}{" "}
          </p>
        </div>
        <div className="flex justify-center w-full py-2 gap-2 mt-16 max-2xl:mt-7 max-xl:mt-20">
          <a href="#item1" className={styles(1)}></a>
          <a href="#item2" className={styles(2)}></a>
          <a href="#item3" className={styles(3)}></a>
        </div>
        <div className="flex justify-between mt-10 max-2xl:mt-4 max-sm:justify-around">
          <Link href='/pages/introtest' className=" text-white py-1 px-7 rounded-lg">Saltar</Link>
          <a
            href={goTo}
            className="bg-[#272727] text-white py-1 px-7 rounded-lg max-sm:bg-transparent max-sm:border-2 max-sm:py-3 max-sm:rounded-2xl"
          >
            Continuar
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarrouselCard;
