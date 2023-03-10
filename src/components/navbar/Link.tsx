import { SelectedSection } from "../../shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedSection: SelectedSection;
  setSelectedSection: (value: SelectedSection) => void;
};

const Link = ({ page, selectedSection, setSelectedSection }: Props) => {
  const lowerCasePage = page
    .toLowerCase()
    .replace(/ /g, "")
    .replace("é", "e") as SelectedSection;

  return (
    <AnchorLink
      offset="100"
      className={`${
        selectedSection === lowerCasePage ? "text-secondary-300 font-bold" : ""
      }  `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedSection(lowerCasePage)}
    >
      <p className="transition hover:underline">{page} </p>
    </AnchorLink>
  );
};

export default Link;
