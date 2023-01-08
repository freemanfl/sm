import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';



function App() {
  return (
    <div className="App w-5/6  md:w-4/6 flex justify-center ">
       <div className="w-full h-full flex flex-col items-center">
         <Navbar />
         <Hero />
         <Tabs />
         <About />
         <Contact />
         <Footer />
       </div>
        
    </div>
  );
}

export default App;
