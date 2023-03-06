import useMediaQuery from "../../hooks/useMediaQuery";
import Logo from "../../assets/logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

type Props = {
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage }: Props) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const backgroundColor = isTopOfPage
    ? "bg-tertiary-100"
    : "bg-primary-500 md:bg-blend-darken drop-shadow-xl  ";

  const isBigScreen = useMediaQuery("(min-width:1024px)");
  useEffect(() => {
    isBigScreen && setIsToggle(false);
    console.log(isBigScreen);
    return;
  }, [isBigScreen]);

  return (
    <nav>
      <div
        className={`fixed transition-all w-full text-xl text-secondary-100 ${backgroundColor} `}
      >
        <div
          className={`w-full h-[100px] flex justify-between items-center px-16`}
        >
          {/* LOGO */}
          <div className="flex relative items-center w-12 h-12 mr-12">
            <img src={Logo} alt="Logo" />
            {/* <h1 className=" absolute -left-5 -bottom-6 font-mukta tracking-widest ">
              CRAYON
            </h1> */}
          </div>
          {isBigScreen ? (
            <div className="flex items-center justify-between  w-full">
              {/* LES INTITULEES  */}
              <div className="flex gap-6">
                <a href="">Accueil</a>
                <a href="">Notre démarche</a>
                <a href="">Les profils</a>
              </div>
              {/* Call to action */}
              <div className="border border-secondary-300 bg-secondary-300 p-2 rounded-md">
                <button>Nous contacter </button>
              </div>{" "}
            </div>
          ) : (
            <div className="w-full flex justify-end ">
              <button onClick={() => setIsToggle((prev) => !prev)}>
                <Bars3Icon className="h-10 " />
              </button>
            </div>
          )}
        </div>
      </div>
      {!isBigScreen && isToggle && (
        <div className="fixed h-full w-full bg-secondary-300 right-0 top-0 p-4 text-secondary-100 ">
          <div className=" flex justify-end w-full">
            <button onClick={() => setIsToggle((prev) => !prev)}>
              <XMarkIcon className="h-10 text-white" />
            </button>
          </div>
          <div className="mt-10">
            {/* LES INTITULEES  */}
            <div className="flex flex-col items-center gap-6 text-2xl">
              <a href="">Accueil</a>
              <a href="">Notre démarche</a>
              <a href="">Les profils</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
