import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import StickyIcon from './components/StickyIcon';


function App() {
  return (
    <div className="App  w-full flex justify-around bg-prim ">
        
        <div className="left hidden md:flex flex-col items-center w-5 h-[50vh] fixed bottom-0 left-8 text-[#A8B2D1]">
              <ul className='h-full w-full py-6 flex flex-col justify-between'>
                <li className='relative w-full  h-4'><StickyIcon /></li>
                <li className='relative w-full h-4'><StickyIcon /></li>
                <li className='relative w-full h-4'><StickyIcon /></li>
                <li className='relative w-full h-4'><StickyIcon /></li>
                <li className='relative w-full h-4'><StickyIcon /></li>
              </ul>
             

              <div className="w-[1px] h-24 bg-[#A8B2D1]"></div>
        </div>

        <Main />
        
        <div className="right hidden md:flex flex-col items-center  w-5 h-[60vh]  fixed bottom-0 right-8 text-[#A8B2D1]">
              <div className="h-full w-full py-6">
                  <div className=' w-full h-full relative flex justify-center  items-end -translate-y-1/3   hover:text-sec'>
                      <div className='absolute leading-none rotate-90 text-sm tracking-widest transition hover:-translate-y-0.5'>helloasdsad.@asdsa.com</div>
                  </div>
              </div>


              <div className="w-[1px] h-24 bg-[#A8B2D1]"></div>
        </div>
        
    </div>
  );
}

export default App;
