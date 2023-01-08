import {useState, useRef} from 'react'
import Projects from './Projects';

const Tabs = () => {

  const [active, setActive] = useState(0); 
  const tabsRef = useRef(null);

  const handleClick = (e)=> {
    tabsRef.current.childNodes.forEach(node=> node.classList.remove('tab-active'));
    e.target.classList.add('tab-active');
    setActive(e.target.dataset.index);
  }

  return (
    <section className='py-8 flex flex-col items-start leading-[96px]'>
        <ul ref={tabsRef} className='flex space-x-4 md:space-x-24'>
            <li onClick={handleClick} data-index='0' className='relative font-mon text-[16px] md:text-[27px] text-grey2 cursor-pointer tab-active'>PROJECTS</li>
            <li onClick={handleClick} data-index='1' className='relative font-mon text-[16px] md:text-[27px] text-grey2 cursor-pointer'>UI WORK</li>
            <li onClick={handleClick} data-index='2' className='relative font-mon text-[16px] md:text-[27px] text-grey2 cursor-pointer'>UX CASE STUDIES</li>
        </ul>
        <div className="w-full h-full flex ">
          <Projects />
        </div>
    </section>
  )
}

export default Tabs