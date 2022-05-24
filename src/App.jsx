import logo from "./components/assets/logo.svg";
import "./App.css";
import { useState } from "react";
// Footer
import NavBarFooter from "./components/NavBarFooter";
// Popups
import HelpPopup from "./components/HelpPopup";
import ContactUsPopup from "./components/ContactUsPopup";
import AboutUsPopup from "./components/AboutUsPopup";
import DonatePopup from "./components/DonatePopup";
// Css
import "./components/style/footer.css";
import "./components/style/header.css";
import "./components/style/popup.css";
import "./components/style/recipeCard.css";

function App() {
  const [helpButtonPopup, setHelpButtonPopup] = useState(false);
  const [contactUsButtonPopup, setContactUsButtonPopup] = useState(false);
  const [aboutUsButtonPopup, setAboutUsButtonPopup] = useState(false);
  const [donateButtonPopup, setDonateButtonPopup] = useState(false);

  return (
    <div className="App">
      <div className="screen">
        <div id="map"></div>
      </div>

      <footer className="footer">
        <NavBarFooter
          setHelpButtonPopup={setHelpButtonPopup}
          setContactUsButtonPopup={setContactUsButtonPopup}
          setAboutUsButtonPopup={setAboutUsButtonPopup}
          setDonateButtonPopup={setDonateButtonPopup}
        />
        <AboutUsPopup
          trigger={aboutUsButtonPopup}
          setTrigger={setAboutUsButtonPopup}
        />
        <ContactUsPopup
          trigger={contactUsButtonPopup}
          setTrigger={setContactUsButtonPopup}
        />
        <HelpPopup trigger={helpButtonPopup} setTrigger={setHelpButtonPopup} />
        <DonatePopup
          trigger={donateButtonPopup}
          setTrigger={setDonateButtonPopup}
        />
      </footer>
    </div>
  );
}

export default App;
