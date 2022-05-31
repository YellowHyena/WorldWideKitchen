import './App.css';
import { useState } from 'react';
// Footer
import NavBarFooter from './components/NavBarFooter';
// Popups
import HelpPopup from './components/HelpPopup';

import ContactUsPopup from './components/ContactUsPopup';
import AboutUsPopup from './components/AboutUsPopup';
// Css
import './components/style/footer.css';
import './components/style/header.css';
import './components/style/popup.css';
import './components/style/recipeCard.css';
import './components/style/search.css'

function App() {
  const [helpButtonPopup, setHelpButtonPopup] = useState(false);
  const [contactUsButtonPopup, setContactUsButtonPopup] = useState(false);
  const [aboutUsButtonPopup, setAboutUsButtonPopup] = useState(false);

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
      </footer>
    </div>
  );
}

export default App;
  