import "./App.css";
import NavBarFooter from "./components/NavBarFooter";
import HelpPopup from "./components/HelpPopup";
import { useState } from "react";

function App() {
  const [helpButtonPopup, setHelpButtonPopup] = useState(false);

import './App.css';

function App() {
  return (
    <div className="App">
      <div id="map"></div>
      <header className="header">
        <h1 className="name">WORLD WIDE KITCHEN</h1>
      </header>
      <footer className="footer">
        <NavBarFooter setHelpButtonPopup={setHelpButtonPopup} />
        <HelpPopup trigger={helpButtonPopup} setTrigger={setHelpButtonPopup} />
      </footer>
    </div>
  );
}

export default App;
