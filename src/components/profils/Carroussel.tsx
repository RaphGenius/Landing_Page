import { useEffect, useState } from "react";
import { Drawers } from "../../shared/types";
import DrawersProfil from "./DrawersProfil";

interface ResultPhoto {
  src?: {
    large?: string;
  };
}

function Carroussel() {
  const [drawers, setDrawers] = useState<Array<Drawers>>([]);
  const [allPhotos, SetAllPhotos] = useState<Array<ResultPhoto>>([]);

  //Recupere les profils
  useEffect(() => {
    fetch("https://randomuser.me/api/?nat=fr&inc=name,dob,picture&results=15")
      .then((res) => res.json())
      .then((data) => setDrawers(data.results as Array<Drawers>));
  }, []);

  useEffect(() => {
    fetch("https://api.pexels.com/v1/search?query=3D", {
      headers: {
        Authorization: import.meta.env.VITE_API_PEXEL,
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        SetAllPhotos(data.photos);
      });
  }, []);
  return (
    <article className="my-8">
      <h3 className="text-center text-4xl py-8 underline underline-offset-2 ">
        Rejoins nos artistes dans cette formidable aventure !{" "}
      </h3>
      <div className="w-full shadow-lg hidden lg:block ">
        <ul className="flex gap-8  flex-nowrap overflow-x-scroll first-of-type:rounded-none  overflow-y-hidden">
          {drawers.map((draw: Drawers, index: number) => (
            <DrawersProfil
              key={index}
              draw={draw}
              photo={allPhotos[index]?.src?.large as string}
            ></DrawersProfil>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Carroussel;
