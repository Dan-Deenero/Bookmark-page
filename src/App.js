import Download from './Components/Download';
import FAQ from './Components/FAQ';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App bg-neutral-100">
      <Navbar/>
      <Hero/>
      <Features/>
      <Download/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
