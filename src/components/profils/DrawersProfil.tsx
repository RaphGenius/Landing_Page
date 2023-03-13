import { Drawers } from "../../shared/types";
type Props = {
  draw: Drawers;

  photo: {
    alt: string;
    avg_color: string;
    height: number;
    id: number;
    liked: boolean;
    photographer: string;
    photographer_id: string;
    photographer_url: string;
    src: {
      small: string;
    };
    url: string;
    width: number;
  };
};

function DrawersProfil({ draw, photo }: Props) {
  const {
    dob: { age },
    name: { first, last },
    picture: { large },
  } = draw;
  const NameCreator = first + " " + last;
  const profilStatut = age < 55 ? "Amateur" : "Enseignant";

  const imageArtiste = photo?.src?.small;

  return (
    <li className="  cursor-pointer bg-tertiary-100  rounded-lg h-[400px] p-8 first-of-type:rounded-l-none last-of-type:rounded-r-none relative   ">
      <div className="lg:w-[300px] w-screen h-full flex flex-col justify-between    ">
        {/* PHOTO ARTISTE */}
        <div className=" h-[200px] mx-auto rounded-full  overflow-hidden  overflow-x-hidden flex justify-center   ">
          <img
            className="w-full h-full object-cover scale-100  "
            src={large}
            alt={`Photo de ${NameCreator}`}
          />
        </div>
        {/* NOM ET PRENOM ARTISTE */}
        <div className=" text-secondary-100 w-full text-center  border-4 border-secondary-100 py-4 px-6 rounded-md font-bold  text-xl  ">
          <p className="">{NameCreator}</p>
          <p>{profilStatut} </p>
        </div>
        <div className="opacity-0 translate-y-14 hover:translate-y-0 hover:opacity-100 duration-500 absolute w-full h-full  top-0 left-0  ">
          <img
            className="  translate-y-64 hover:translate-y-0  duration-500  w-full h-full object-cover"
            src={imageArtiste}
            alt={`Illustration de ${NameCreator}`}
          />
        </div>
      </div>
    </li>
  );
}

export default DrawersProfil;
