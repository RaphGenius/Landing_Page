import { motion } from "framer-motion";
import { SelectedSection } from "../../shared/types";

import Illustration2 from "../../assets/illutration1.jpg";
import Illustration3 from "../../assets/illustration3.jpg";

import Buttons from "../../shared/Buttons";
type Props = {
  setSelectedSection: (value: SelectedSection) => void;
};

function Accueil({ setSelectedSection }: Props) {
  const style = {
    containerImg: `w-2/5 rounded-lg overflow-hidden `,
  };

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
      className="mt-[100px] px-8 "
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className=" w-full flex items-center justify-center relative   "
      >
        {titleInteract.map((lettre, index) => {
          return (
            <motion.span
              key={index}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.1 }}
              variants={item}
              className={`sm:text-8xl mt-24  mb-8 font-bold tracking-wide uppercase animation cursor-pointer text-7xl `}
            >
              {lettre}
            </motion.span>
          );
        })}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        // L'animation ne se joue qu'une fois
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 3 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="w-4/6 mx-auto text-center text-tertiary-300 font-mukta text-xl "
      >
        <p className="font-bold">
          Apprendre à dessiner n'aura jamais autant été un jeu d'enfant !
        </p>
        <p className=" my-2">
          Crayon met en relation dessinateur{" "}
          <span className="font-bold"> professionnel </span>et{" "}
          <span className="font-bold">amateur</span> afin de créer une
          communauté d'entraide. <br />
        </p>

        <div className="my-12">
          <Buttons
            setSelectedSection={setSelectedSection}
            text="Nous contacter ! "
          />
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        // L'animation ne se joue qu'une fois
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 3 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        className=" md:flex flex-nowrap  gap-4 justify-center rounded-lg overflow-hidden w-full max-w-screen-xl mx-auto hidden "
      >
        <div className={style.containerImg}>
          <img className="w-full" src={Illustration2} alt="Illustration" />
        </div>
        <div className={style.containerImg}>
          <img className="w-full" src={Illustration3} alt="Illustration" />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Accueil;
