import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedSection } from "./types";

type Props = {
  setSelectedSection: (value: SelectedSection) => void;
  text: string;
};

function Buttons({ setSelectedSection, text }: Props) {
  return (
    <AnchorLink
      onClick={() => setSelectedSection(SelectedSection.Contact)}
      href={`#${SelectedSection.Contact}`}
    >
      <button
        className={`border-black bg-tertiary-100 p-4 rounded-md text-2xl text-white hover:scale-110 transition hover:shadow-lg  `}
      >
        {text}
      </button>
    </AnchorLink>
  );
}

export default Buttons;
