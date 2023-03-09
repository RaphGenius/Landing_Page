export enum SelectedSection {
  Accueil = "accueil",
  Demarche = "notredemarche",
  Profils = "lesprofils",
  Contact = "contact",
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
