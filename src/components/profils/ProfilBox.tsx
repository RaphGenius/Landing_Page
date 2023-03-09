import { useRef } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  title: string;
  imageSrc: string;
  description?: string;
};

const ProfilBox = ({ title, imageSrc }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);

  const scrolltoTop = () => {
    divRef?.current?.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        ref={divRef as React.RefObject<HTMLDivElement>}
        className="px-14 py-8 w-full rounded-lg overflow-auto scrollbar scrollbar-thumb-tertiary-100 scrollbar-track-gray-100 
           border-t-2 border-primary-300 border-l-2 rounded-tr-none "
      >
        <h3 id="top" className=" text-4xl  text-center">
          {title}
        </h3>
        <p className="text-justify my-4">
          {title === "J'ai envie d'enseigner" &&
            "etipsaet iectet uectetuec tetuectetups dolorem errora et ipsdolorem erroraet ipsa "}{" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          optio iusto ipsa quisquam laboriosam non. Eaque obcaecati qui, rerum
          consequuntur quas ullam adipisci eveniet ipsam laborum officiis
          molestias pariaturto ipsa quisquam laboriosam non. Eaque obcaecati
          qui, rerum consequuntur quas ullam adipisci eveniet ipsam laborum
          officiis molestias pariatur ullam adipisci eveniet ipsam laborum
          officiis molestias pariaturto ipsa quisquam laboriosam non. Eaque
          obcaecati qui, rerum consequuntur quas ulto ipsa quisquam laboriosam
          non. Eaque obcaecati qui, rerum consequuntur quas ullam adipisci
          eveniet ipsam laborum officiis molestias pariatu ullam adipisci
          eveniet ipsam laborum officiis molestias pariaturto ipsa quisquam
          laboriosam non. Eaque obcaecati qui, rerum consequuntur quas ulr vel
          et. Repudiandae magni corporis fuga deleniti quisquam maiores
          recusandae unde facere, dolorem error, placeat iusto quis excepturi
          ab, fugit modi. Lorem ipsum dolor sit amet consectetur
        </p>
        <div className="text-center">
          <button
            className="hover:scale-125 transition "
            onClick={() => scrolltoTop()}
          >
            <ArrowUpCircleIcon className="h-12" />
          </button>
        </div>
      </div>
      {/* AFFICHAGE IMAGE */}
      <div className="w-2/5 overflow-hidden rounded-tr-lg rounded-bl-lg bg-red-600">
        <img
          className="h-full w-full object-cover"
          src={imageSrc}
          alt="illustration"
        />
      </div>
    </>
  );
};

export default ProfilBox;
