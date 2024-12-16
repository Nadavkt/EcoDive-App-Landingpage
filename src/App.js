import NavBar from './Header/NavBar/navbar';
import Plate from './Header/Plate/plate';
import About from './Content/About/about';
import Contact from './Content/Contact-Us/contact_us';
import Download from './Download/download';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Plate />
      <About />
      <Contact />
      <Download />
    </div>
  );
}

export default App;
