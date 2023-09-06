import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";
import Link from "next/link";
import OnBuilding from "./pages/onbuilding/onBuildingPage";
import Splash from "./pages/splash/splashPage";
import Login from "./pages/login/loginPage";
import Carrousel from "./pages/carrousel/carrouselPage";
import Registro from "./pages/register/registerPage";
import CardContainer from "./components/CardContainer";

export default function Home() {
  return (
    <>
      <Registro />
    </>
  );
}
