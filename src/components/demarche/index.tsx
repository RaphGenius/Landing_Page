import { motion } from "framer-motion";
import { CardTypes, SelectedSection } from "../../shared/types";
import {
  RocketLaunchIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Title from "../../shared/Title";
import Card from "./Card";
type Props = {
  setSelectedSection: (value: SelectedSection) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const cards: Array<CardTypes> = [
  {
    icon: <UserIcon />,
    title: "Un accompagnement personnalisé",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatum excepturi! Possimus hic perferendis quidem!",
  },
  {
    icon: <RocketLaunchIcon />,
    title: "Une progression rapide",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatum excepturi! Possimus hic perferendis quidem!",
  },
  {
    icon: <StarIcon />,
    title: "Mise en avant de son art",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatum excepturi! Possimus hic perferendis quidem!",
  },
];

const Demarche = ({ setSelectedSection }: Props) => {
  return (
    <section id="notredemarche" className=" px-8 py-6">
      <motion.div
        onViewportEnter={() => setSelectedSection(SelectedSection.Demarche)}
      >
        <div>
          <Title title="Notre démarche" />

          <div className="my-4 w-full text-center lg:text-start">
            <h3 className=" font-bold text-tertiary-300 text-2xl my-4">
              Notre but ? Faire de vous les nouveaux Pablos Picasso !
            </h3>
            <p className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda quisquam aut eveniet harum labore nesciunt accusantium
              libero voluptatibus asperiores? Accusantium?
            </p>
          </div>
        </div>
        {/* LES CARTES  */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={container}
          className="mt-5 group  flex-col  lg:flex-row  justify-between gap-8 flex  "
        >
          {cards.map((card: CardTypes, index) => (
            <Card key={index} card={card} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Demarche;
