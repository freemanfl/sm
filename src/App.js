import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';



function App() {
  return (
    <div className="App w-5/6 md:w-3/5 flex flex-col items-start scroll-smooth ">
       
         <Navbar />
         <Hero />
         <Tabs />
         <About />
          <Contact />
        <Footer />
        
    </div>
  );
}

export default App;
