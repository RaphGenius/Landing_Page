import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Accueil from "./components/accueil";
import { SelectedSection } from "./shared/types";
import Demarche from "./components/demarche";
import Profils from "./components/profils";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [selectedSection, setSelectedSection] = useState<SelectedSection>(
    SelectedSection.Accueil
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
      <Demarche setSelectedSection={setSelectedSection} />
      <Profils setSelectedSection={setSelectedSection} />
    </div>
  );
}

export default App;
