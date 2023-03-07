import React from "react";
import { motion } from "framer-motion";
import { SelectedSection } from "../../shared/types";
type Props = {
  setSelectedSection: (value: SelectedSection) => void;
};

function Accueil({ setSelectedSection }: Props) {
  const titleInteract = ["C", "R", "A", "Y", "O", "N"];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      onViewportEnter={() => setSelectedSection(SelectedSection.Home)}
      id="home"
      className="mt-[100px] px-8 z-[-5]"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className=" w-full flex justify-center mt-24 overflow-hidden "
      >
        {titleInteract.map((lettre, index) => {
          return (
            <motion.span
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              key={index}
              variants={item}
              transition={{ delay: index / 2 }}
              className="text-7xl block  text-center mt-24 mb-8 font-bold tracking-widest uppercase animation cursor-pointer "
            >
              {lettre}
            </motion.span>
          );
        })}
      </motion.div>{" "}
      <p className="text-center">
        Apprendre à dessiner n'aura jamais autant été un jeu d'enfant !{" "}
      </p>
    </motion.section>
  );
}

export default Accueil;
<p>
  Crayon met en relation dessinateur professionnel et amateur afin de créer une
  communauté d'entraide.{" "}
</p>;
