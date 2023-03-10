import { Drawers } from "../../shared/types";
import { useEffect, useState } from "react";

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

  console.log(photo);
  const imageArtiste = photo?.src?.small;

  return (
    <li className="bg-tertiary-100  rounded-lg h-[400px] p-8 first-of-type:rounded-l-none last-of-type:rounded-r-none">
      <div className="w-[300px] h-full flex flex-col justify-between  overflow-y-hidden  ">
        <div className=" w-[200px] h-[200px] mx-auto py-  rounded-full  overflow-hidden ">
          <img
            className="w-full h-full object-cover scale-100  "
            src={large}
            alt={`Photo de ${NameCreator}`}
          />
        </div>
        <div className=" text-secondary-100 w-full text-center  border-4 border-secondary-100 py-4 px-6 rounded-md font-bold  text-xl  ">
          <p className="">{NameCreator}</p>
          <p>{profilStatut} </p>
        </div>
        {/* <div>
          <img className="" src={imageArtiste} alt="" />
        </div> */}
      </div>
    </li>
  );
}

export default DrawersProfil;
