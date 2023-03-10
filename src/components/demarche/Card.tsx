import { useState } from "react";
import { CardTypes } from "../../shared/types";
import { motion } from "framer-motion";
type Props = {
  card: CardTypes;
  index: number;
};

const Card = ({ card, index }: Props) => {
  const [isHover, setIsHover] = useState<number | null>();

  const hoverEffectCard = `${
    typeof isHover === "number" && isHover === index
      ? "scale-100 "
      : " group-hover:scale-90 group-hover:opacity-40 "
  } `;

  return (
    <motion.div
      className={`border-2 shadow-xl    border-tertiary-300 h-auto rounded-lg flex flex-col  gap-8 py-12 px-4   duration-500 transition   opacity-100 ${hoverEffectCard} `}
      onMouseEnter={() => setIsHover(index)}
      onMouseLeave={() => setIsHover(null)}
    >
      {/* ICON */}
      <div className="w-full  flex justify-center">
        <div
          className=" rounded-full overflow-hidden p-4 w-16 border-tertiary-300
           border-4 bg-tertiary-100
         text-white "
        >
          {card.icon}
        </div>
      </div>
      {/* TITLE */}
      <h3 className="text-center font-bold underline underline-offset-2 text-tertiary-300 text-xl ">
        {card.title}{" "}
      </h3>
      {/* Description */}
      <div>
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
          distinctio. Non nostrum minima doloremque ipsam?
        </p>{" "}
      </div>
    </motion.div>
  );
};

export default Card;
