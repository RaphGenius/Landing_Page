import { useRef } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
type Props = {
  title: string;
  imageSrc: string;
  description?: string;
};

const ProfilBox = ({ title, imageSrc }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);
  console.log(divRef);
  const scrolltoTop = () => {
    divRef?.current?.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const truc = () => {
    if (title === "Le dessin n'aura plus de secret pour vous !") {
      return { opacity: 0.2, y: 150 };
    } else {
      return { opacity: 0.2, y: 150 };
    }
  };
  return (
    <>
      <motion.div
        ref={divRef as React.RefObject<HTMLDivElement>}
        className="px-14 py-8 w-full rounded-lg overflow-y-auto scrollbar overflow-x-hidden scrollbar-thumb-tertiary-100 scrollbar-track-gray-100 
           border-t-2 border-primary-300 border-l-2 rounded-tr-none "
      >
        <AnimatePresence>
          <motion.div
            initial={truc()}
            transition={{ duration: 0.5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 id="top" className=" text-4xl  text-center">
              {title}
            </h3>
            <p className="text-justify my-4">
              {title === "Le dessin n'aura plus de secret pour vous !" &&
                "etipsaet iectet uectetuec tetuectetups dolorem errora et ipsdolorem erroraet ipsa  "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis optio iusto ipsa quisquam laboriosam non. Eaque
              obcaecati qui, rerum consequuntur quas ullam adipisci eveniet
              ipsam laborum officiis molestias pariaturto ipsa quisquam
              laboriosam non. Eaque obcaecati qui, rerum consequuntur quas ullam
              adipisci eveniet ipsam laborum officiis molestias pariatur ullam
              adipisci eveniet ipsam laborum officiis molestias pariaturto ipsa
              quisquam laboriosam non. Eaque obcaecati qui, rerum consequuntur
              quas ulto ipsa quisquam laboriosam non. Eaque obcaecati qui, rerum
              consequuntur quas ullam adipisci eveniet ipsam laborum officiis
              molestias pariatu ullam adipisci eveniet ipsam laborum officiis
              molestias pariaturto ipsa quisquam laboriosam non. Eaque obcaecati
              qui, rerum consequuntur quas ulr vel et. Repudiandae magni
              corporis fuga deleniti quisquam maiores recusandae unde facere,
              dolorem error, placeat iusto quis excepturi ab, fugit modi. Lorem
              ipsum dolor sit amet consectetur
            </p>
          </motion.div>
        </AnimatePresence>
        <div className="text-center">
          <button
            className="hover:scale-125 transition "
            onClick={() => scrolltoTop()}
          >
            <ArrowUpCircleIcon className="h-12" />
          </button>
        </div>
      </motion.div>

      {/* AFFICHAGE IMAGE */}
      <motion.div
        key="modal"
        initial={{ y: -100 }}
        transition={{ duration: 1, type: "spring", stiffness: 200 }}
        animate={{ opacity: 1, y: 0 }}
        className=" hidden lg:block w-2/5 overflow-hidden rounded-tr-lg rounded-bl-lg bg-red-600"
      >
        <img
          className="h-full w-full object-cover"
          src={imageSrc}
          alt="illustration"
        />
      </motion.div>
    </>
  );
};

export default ProfilBox;
