import './App.css'
import logo from './components/assets/logo.svg'
function App() {
  return (
    <div className="App">
      <div id="map"></div>
      <header className='header'><img src={logo} className="logo"></img><h1 className='name'>WORLD WIDE KITCHEN</h1></header>
      <footer className='footer'></footer>
    </div>
  );
}

export default App;
