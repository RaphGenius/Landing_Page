import { useEffect, useState } from "react";
import { createClient } from "pexels";
import { Drawers } from "../../shared/types";
import DrawersProfil from "./DrawersProfil";

type Props = {};

interface ResultPhoto {
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

const client = createClient(import.meta.env.VITE_API_PEXEL);

const query = "3D";
function Carroussel({}: Props) {
  const [drawers, setDrawers] = useState<Array<Drawers>>([]);
  const [allPhotos, SetAllPhotos] = useState<Array<ResultPhoto>>([]);

  //Recupere les profils
  useEffect(() => {
    fetch("https://randomuser.me/api/?nat=fr&inc=name,dob,picture&results=15")
      .then((res) => res.json())
      .then((data) => setDrawers(data.results as Array<Drawers>));
  }, []);

  //Recupere les photos
  useEffect(() => {
    try {
      client.photos
        .search({ query, per_page: 15 })
        .then((photo) => SetAllPhotos(photo?.photos));
    } catch (err) {
      console.log("Err de chargement photo " + err);
    }
  }, []);

  return (
    <article className="my-8">
      <h3 className="text-center text-4xl py-8 underline underline-offset-2 ">
        Rejoins nos artistes dans cette formidable aventure !{" "}
      </h3>
      <div className="w-full shadow-lg hidden lg:block ">
        <ul className="flex gap-8  flex-nowrap overflow-x-scroll first-of-type:rounded-none  overflow-y-hidden">
          {drawers.map((draw, index) => (
            <DrawersProfil
              key={index}
              draw={draw}
              photo={allPhotos[index] as ResultPhoto}
            />
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Carroussel;
