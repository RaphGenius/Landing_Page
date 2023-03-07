import { SelectedSection } from "../../shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedSection: SelectedSection;
  setSelectedSection: (value: SelectedSection) => void;
};

const Link = ({ page, selectedSection, setSelectedSection }: Props) => {
  const lowerCasePage = page.toLowerCase() as SelectedSection;

  return (
    <AnchorLink
      className={`${
        page.toLowerCase() === selectedSection
          ? "text-secondary-300 font-bold"
          : ""
      }  `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedSection(lowerCasePage)}
    >
      <p className="transition hover:underline">{page} </p>
    </AnchorLink>
  );
};

export default Link;
