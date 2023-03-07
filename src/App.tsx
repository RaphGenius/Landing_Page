import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Accueil from "./components/accueil";
import { SelectedSection } from "./shared/types";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [selectedSection, setSelectedSection] = useState<SelectedSection>(
    SelectedSection.Home
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App  ">
      <Navbar
        isTopOfPage={isTopOfPage}
        setSelectedSection={setSelectedSection}
        selectedSection={selectedSection}
      />
      <Accueil setSelectedSection={setSelectedSection} />
    </div>
  );
}

export default App;
