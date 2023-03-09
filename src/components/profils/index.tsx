import { useRef, useState } from "react";
import Title from "../../shared/Title";
import { SelectedSection } from "../../shared/types";
import { motion } from "framer-motion";
import ProfilBox from "./ProfilBox";
import illutration3 from "../../assets/illustration2-mini.png";
import illutration4 from "../../assets/illustration4-resized.jpg";
import DrawBox from "./DrawBox";
type Props = {
  setSelectedSection: (value: SelectedSection) => void;
};

function Profils({ setSelectedSection }: Props) {
  const [chosenProfil, setChosenProfil] = useState<string>("pro");
  const btnSelect = `border-2 transition  duration-500 border-primary-500 p-4 rounded-md font-bold text-xl`;
  const btnIsSelected = `bg-tertiary-300 text-white shadow-lg `;

  const divRef = useRef<HTMLDivElement>(null);

  return (
    <section id="lesprofils" className="   px-8 py-6 mx-auto max-w-screen-xl ">
      <motion.div
        onViewportEnter={() => setSelectedSection(SelectedSection.Profils)}
      >
        <Title title="Les profils" />

        {/* Amateur pro BOUTTON*/}
        <div className="flex w-full justify-center gap-4 ">
          <button
            onClick={() => setChosenProfil("amateur")}
            className={`${btnSelect} ${
              chosenProfil === "amateur" && btnIsSelected
            }  `}
          >
            Je souhaite apprendre
          </button>
          <button
            onClick={() => setChosenProfil("pro")}
            className={`${btnSelect} ${
              chosenProfil === "pro" && btnIsSelected
            }    `}
          >
            Je souhaite enseigner
          </button>
          <button
            onClick={() => setChosenProfil("dessin")}
            className={`${btnSelect} ${
              chosenProfil === "dessin" && btnIsSelected
            }    `}
          >
            Je souhaite dessiner maintenant !
          </button>
        </div>

        {/* AFFICHAGE */}
        <div className="flex overflow-hidden justify-between h-[300px] w-full mt-8 rounded-lg shadow-xl ">
          {/* AFFICHAGE BOITE */}
          {chosenProfil === "amateur" && (
            <ProfilBox
              title={"J'ai envie d'apprendre"}
              imageSrc={illutration3}
            />
          )}
          {chosenProfil === "pro" && (
            <ProfilBox
              title={"J'ai envie d'enseigner"}
              imageSrc={illutration4}
            />
          )}
          {chosenProfil === "dessin" && <DrawBox />}
        </div>
      </motion.div>
    </section>
  );
}

export default Profils;
