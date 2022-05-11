<<<<<<< HEAD
import './App.css'
import logo from './components/assets/logo.svg'
||||||| 8dc8851
import './App.css';

=======
import "./App.css";
import NavBarFooter from "./components/NavBarFooter";
import HelpPopup from "./components/HelpPopup";
import { useState } from "react";

function App() {
  const [helpButtonPopup, setHelpButtonPopup] = useState(false);

import './App.css';

>>>>>>> 0f078341d315f194772c183bb1fdfb72513d7632
function App() {
  return (
    <div className="App">
      <div id="map"></div>
<<<<<<< HEAD
      <header className='header'><img src={logo} className="logo"></img><h1 className='name'>WORLD WIDE KITCHEN</h1></header>
      <footer className='footer'></footer>
||||||| 8dc8851
=======
      <header className="header">
        <h1 className="name">WORLD WIDE KITCHEN</h1>
      </header>
      <footer className="footer">
        <NavBarFooter setHelpButtonPopup={setHelpButtonPopup} />
        <HelpPopup trigger={helpButtonPopup} setTrigger={setHelpButtonPopup} />
      </footer>
>>>>>>> 0f078341d315f194772c183bb1fdfb72513d7632
    </div>
  );
}

export default App;
