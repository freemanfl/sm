import {useState, useRef} from 'react'
import Projects from './Projects';

const Tabs = () => {

  const [active, setActive] = useState(0); 
  const tabsRef = useRef(null);

  const handleClick = (e)=> {
    tabsRef.current.childNodes.forEach(node=> node.classList.remove('tab-active'));
    tabsRef.current.childNodes.forEach(node=> node.childNodes[0].classList.remove('tab-active'));
    console.log(tabsRef.current.childNodes);
    e.target.classList.add('tab-active');
    setActive(e.target.dataset.index);
    
  }

  return (
    <section id='work' className=' py-8 flex flex-col items-start space-y-8 '>
        <ul ref={tabsRef} className='tabs flex space-x-4 md:space-x-8'>
            <li onClick={handleClick} data-index='0' className='relative font-mon md:text-base text-sm text-grey2 cursor-pointer tab-active'><a data-index='0'>PROJECTS</a></li>
            <li onClick={handleClick} data-index='1' className='relative font-mon md:text-base text-sm text-grey2 cursor-pointer'><a data-index='1'>UI WORK</a></li>
            <li onClick={handleClick} data-index='2' className='relative font-mon md:text-base text-sm text-grey2 cursor-pointer'><a data-index='2'>UX CASE STUDIES</a></li>
        </ul>
        <div className="w-full h-full flex py-8">
          <Projects />
        </div>
    </section>
  )
}

export default Tabs