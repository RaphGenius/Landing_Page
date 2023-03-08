import { motion } from "framer-motion";
import { SelectedSection } from "../../shared/types";
import Illustration2 from "../../assets/illutration1-resized.png";
import Illustration3 from "../../assets/illustration2-resized.png";

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
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.5 },
    },
  };
  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="accueil" className="mt-[50px] px-8 ">
      <motion.div
        onViewportEnter={() => setSelectedSection(SelectedSection.Accueil)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className=" w-full flex items-center justify-center relative gap-2 "
        >
          {titleInteract.map((lettre, index) => {
            return (
              <motion.span
                variants={childVariant}
                key={index}
                className={`sm:text-8xl mt-24  bg-white  mb-8 font-bold tracking-wide uppercase animation text-5xl shadow-md p-2 `}
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
          transition={{ duration: 0.8, delay: 2.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
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
          transition={{ duration: 1, delay: 2.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
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
      </motion.div>
    </section>
  );
}

export default Accueil;
