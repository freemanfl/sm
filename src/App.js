import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';



function App() {
  return (
    <div className="App w-full px-4 flex flex-col  ">
       
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
