export enum SelectedSection {
  Accueil = "accueil",
  Demarche = "notredemarche",
  Profils = "lesprofils",
  Contact = "nouscontacter",
}

export interface CardTypes {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ProfilTypes {
  title: string;
  imageSrc: string;
}
export interface Drawers {
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  dob: {
    age: number;
    date: string;
  };
  photo: object;
}

export interface FormType {
  role: "amateur" | "professionnel";
  prenom: string;
  nom: string;
  message: string;
}
