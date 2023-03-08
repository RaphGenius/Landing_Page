export enum SelectedSection {
  Accueil = "accueil",
  Demarche = "notredemarche",
  Profils = "profils",
  Contact = "contact",
}

export interface CardTypes {
  icon: JSX.Element;
  title: string;
  description: string;
}
