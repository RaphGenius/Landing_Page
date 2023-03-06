import useMediaQuery from "../../hooks/useMediaQuery";
import Logo from "../../assets/logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
type Props = {
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage }: Props) => {
  const backgroundColor = isTopOfPage
    ? "bg-tertiary-100"
    : "bg-primary-500 md:bg-blend-darken drop-shadow-xl  ";

  const isLittleScreen = useMediaQuery("(min-width:1024px)");
  console.log(isLittleScreen);

  return (
    <nav>
      <div
        className={`fixed transition-all w-full text-xl text-secondary-100 ${backgroundColor} `}
      >
        <div
          className={`w-full h-[100px] flex justify-between items-center px-16`}
        >
          {/* LOGO */}
          <div className="w-12 h-12 mr-12">
            <img src={Logo} alt="Logo" />
          </div>
          {isLittleScreen ? (
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
              <button>
                <Bars3Icon className="h-10 " />
              </button>
            </div>
          )}
          <div className="flex items-center"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
