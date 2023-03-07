import useMediaQuery from "../../hooks/useMediaQuery";
import Logo from "../../assets/logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Link from "./Link";
import { SelectedSection } from "../../shared/types";
type Props = {
  isTopOfPage: boolean;
  selectedSection: SelectedSection;
  setSelectedSection: (value: SelectedSection) => void;
};

const Navbar = ({
  isTopOfPage,
  setSelectedSection,
  selectedSection,
}: Props) => {
  //STATE
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [isAnimate, setIsAnimate] = useState<boolean>(true);

  // COLORS VARIABLES
  const penAnimation = isAnimate && `animate-bounce `;
  const backgroundColor = isTopOfPage
    ? "bg-tertiary-100 drop-shadow-md"
    : "bg-primary-500 md:bg-blend-darken drop-shadow-xl  ";
  const reverseBackgroundColor = isTopOfPage
    ? "bg-primary-500 md:bg-blend-darken drop-shadow-xl "
    : "bg-tertiary-100 drop-shadow-md ";

  const isBigScreen = useMediaQuery("(min-width:1024px)");
  useEffect(() => {
    isBigScreen && setIsToggle(false);
    return;
  }, [isBigScreen]);

  useEffect(() => {
    setIsToggle(false);
  }, [setSelectedSection]);

  return (
    <nav>
      <div
        className={`fixed top-0 z-[51] transition-all w-full text-xl text-secondary-100 ${backgroundColor} `}
      >
        <div
          className={`w-full h-[100px] flex justify-between items-center px-16`}
        >
          {/* LOGO */}
          <div className="flex  items-center mr-24  ">
            <h1
              className={`font-mukta tracking-widest first-letter:text-3xl  first-letter:font-bold   `}
            >
              CRAYON
            </h1>
            <img
              onClick={() => setIsAnimate(!isAnimate)}
              className={` ${penAnimation} w-12 h-12 cursor-pointer transition 
              } `}
              src={Logo}
              alt="Logo"
            />
          </div>
          {isBigScreen ? (
            <div className="flex items-center justify-between  w-full">
              {/* LES INTITULEES  */}
              <div className="flex gap-6 font-martel  ">
                <Link
                  selectedSection={selectedSection}
                  setSelectedSection={setSelectedSection}
                  page="Home"
                />
                <Link
                  selectedSection={selectedSection}
                  setSelectedSection={setSelectedSection}
                  page="Notre démarche"
                />
                <Link
                  selectedSection={selectedSection}
                  setSelectedSection={setSelectedSection}
                  page="Les profils"
                />
              </div>
              {/* Call to action */}
              <div
                className={`border-4 border-secondary-100
                drop-shadow-sm p-2 rounded-md ${
                  isTopOfPage ? "bg-primary-500" : "bg-tertiary-100"
                }  hover:opacity-90 transition`}
              >
                <button>Devenir un membre</button>
              </div>{" "}
            </div>
          ) : (
            <div className="w-full flex justify-end ">
              <button onClick={() => setIsToggle((prev) => !prev)}>
                {isToggle ? (
                  <XMarkIcon className="h-10" />
                ) : (
                  <Bars3Icon className="h-10 " />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
      {!isBigScreen && isToggle && (
        <div
          className={`fixed h-full w-full ${reverseBackgroundColor} right-0 top-0 p-4 text-secondary-100 z-50 `}
        >
          <div className=" flex justify-end w-full">
            <button onClick={() => setIsToggle((prev) => !prev)}>
              <XMarkIcon className="h-10 text-white" />
            </button>
          </div>
          <div className="mt-24">
            {/* LES INTITULEES  */}
            <div
              className="flex flex-col items-center gap-6 text-2xl"
              onClick={() => setIsToggle(false)}
            >
              <Link
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
                page="Home"
              />
              <Link
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
                page="Notre démarche"
              />
              <Link
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
                page="Les profils"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
