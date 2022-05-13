import logo from "./components/assets/logo.svg"
import "./App.css";
import NavBarFooter from "./components/NavBarFooter";
import HelpPopup from "./components/HelpPopup";
import { useState } from "react";
import "./components/style/footer.css"
import "./components/style/header.css"
import "./components/style/popup.css"
import "./components/style/recipeCard.css"

function App() {
  const [helpButtonPopup, setHelpButtonPopup] = useState(false);


  return (
    <div className="App">
      <div className="screen"><div id="map"></div></div>

      <header className='header'><img src={logo} className="logo"></img><h1 className='name'>WORLD WIDE KITCHEN</h1></header>
      <footer className="footer">
        <NavBarFooter setHelpButtonPopup={setHelpButtonPopup} />
        <HelpPopup trigger={helpButtonPopup} setTrigger={setHelpButtonPopup} />
      </footer>

    </div>
  );
}

export default App;
