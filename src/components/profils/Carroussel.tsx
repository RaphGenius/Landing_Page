import { useEffect, useState } from "react";
import { createClient } from "pexels";
import { Drawers } from "../../shared/types";
import DrawersProfil from "./DrawersProfil";

type Props = {};

interface PhotoTypes {
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
}

const client = createClient(
  "54d8pFwsznbbD0P0Lxu1yL7gjFyeFBpC1XYus5CgHkXOtA2VYBipqpib"
);
const query = "3D";
function Carroussel({}: Props) {
  const [drawers, setDrawers] = useState<Array<Drawers>>([]);
  const [allPhotos, SetAllPhotos] = useState<Array<PhotoTypes>>([]);

  //Recupere les profils
  useEffect(() => {
    fetch("https://randomuser.me/api/?nat=fr&inc=name,dob,picture&results=5")
      .then((res) => res.json())
      .then((data) => setDrawers(data.results as Array<Drawers>));
  }, []);

  //Recupere les photos
  useEffect(() => {
    try {
      client.photos
        .search({ query, per_page: 5 })
        .then((photo) => SetAllPhotos(photo.photos));

      console.log(allPhotos);
    } catch (err) {
      console.log("Err de chargement photo " + err);
    }
  }, []);

  return (
    <article className="my-8">
      <h3 className="text-center text-4xl py-8 underline underline-offset-2">
        Rejoins nos artistes dans cette formidable aventure !{" "}
      </h3>
      <div className="w-full shadow-lg ">
        <ul className="flex gap-8  flex-nowrap overflow-x-scroll first-of-type:rounded-none ">
          {drawers.map((draw, index) => (
            <DrawersProfil key={index} draw={draw} photo={allPhotos[index]} />
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Carroussel;
