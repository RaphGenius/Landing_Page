import { useState } from "react";
import Title from "../../shared/Title";
import { SelectedSection } from "../../shared/types";
import { motion } from "framer-motion";
import ProfilBox from "./ProfilBox";
import illutration3 from "../../assets/illustration2-mini.png";
import illutration4 from "../../assets/illustration4-resized.jpg";
import { DrawBox } from "./DrawBox";
import CarrousselProfil from "./Carroussel";
type Props = {
  setSelectedSection: (value: SelectedSection) => void;
};

function Profils({ setSelectedSection }: Props) {
  const [chosenProfil, setChosenProfil] = useState<string>("pro");
  const btnSelect = `border-2 transition  duration-500 border-primary-500 p-4 rounded-md font-bold text-xl`;
  const btnIsSelected = `bg-tertiary-300 text-white shadow-lg `;

  return (
    <section id="lesprofils" className="   px-8 py-6 mx-auto max-w-screen-2xl ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        // L'animation ne se joue qu'une fois
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
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
            className={`hidden lg:block ${btnSelect} ${
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
              title={"Le dessin n'aura plus de secret pour vous !"}
              imageSrc={illutration3}
            />
          )}{" "}
          {chosenProfil === "pro" && (
            <ProfilBox
              title={"J'ai envie de transmettre ma passion!"}
              imageSrc={illutration4}
            />
          )}
          {chosenProfil === "dessin" && <DrawBox />}
        </div>
        <CarrousselProfil />
      </motion.div>
    </section>
  );
}

export default Profils;
