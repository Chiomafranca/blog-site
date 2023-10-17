import React, { useState } from 'react';
import { PiFacebookLogoDuotone, PiTwitterLogoDuotone, PiYoutubeLogoDuotone } from 'react-icons/pi';
import { BsPCircle } from 'react-icons/bs';
import { AiOutlineBehance } from 'react-icons/ai';
import line from './images/line.png';
import { CiSearch } from 'react-icons/ci';
import line1 from './images/line1.png';
import './App.css';
import NavbarBody from './components/NavbarBody1';


function App() {
  const [slideIndex, setSlideIndex] = useState(0);


  const slides = [
    [
      <PiFacebookLogoDuotone key={1} />,
      <PiTwitterLogoDuotone key={2} />,
      <BsPCircle key={3} />,
      <AiOutlineBehance key={4} />,
      <CiSearch key={5} />,
      <PiYoutubeLogoDuotone key={6} />,
    ],
    [
      <PiFacebookLogoDuotone key={1} />,
      <PiTwitterLogoDuotone key={2} />,
      <BsPCircle key={3} />,
      <AiOutlineBehance key={4} />,
      <CiSearch key={5} />,
      <PiYoutubeLogoDuotone key={6} />,
    ],
    [
      <PiFacebookLogoDuotone key={1} />,
      <PiTwitterLogoDuotone key={2} />,
      <BsPCircle key={3} />,
      <AiOutlineBehance key={4} />,
      <CiSearch key={5} />,
      <PiYoutubeLogoDuotone key={6} />,
    ]
    // Add other slide content here
  ];

  const backgrounds = ['background1', 'background2', 'background3'];

  const handleBackgroundChange = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
      <div className={` max-sm:w-[100%] w-full md:w-full ${backgrounds[slideIndex]}`} >
      
     <div>
      {/* START OF BACKGROUND 1 */}
    {slideIndex === 0 && (
     <div className={`slide slide-${slideIndex}`} >
       <div className='bg-black 
        py-7 bg-opacity-20  h-[40px] w-full md:w-full'>

      <div className='flex justify-between mt-[-15px] '>
      <div className='text-white ml-7 runo  sm:text-[15px] text-center'>
         <h1>RUNO</h1>
      </div>

  <div className='flex text-white mr-7 gap-3 items-center navitems'>

   <div className='flex gap-3  justify-center'>
      <div className='flex sm:flex gap-2  md:flex '>
        <p>Home</p>
        <p>About</p>
       <p>Articles</p>
       <p>Contact Us</p>
   </div>
   <div className='sm:hidden hidden md:flex'>
       <img src={line} alt="line" />
   </div>
   <div className='flex gap-2 mt-1'>
        {slides[slideIndex]}
     </div>
     <div className='sm:hidden hidden md:flex '>
    <img src={line} alt="line" className='ml-3'/>
</div>
   </div>

</div>

 </div>
   <div className='text-left pt-20 ml-10 body1'>
     <div className='bg-gray-700  bg-opacity-50 w-28 mb-5 text-center text-[12px]  text-white p-1 rounded-lg btn'>
    <h5>ADVENTURE</h5>
   </div>
     <div className='text-[27px] text-white header'>
        <h1><b>Richard Norton photorealistic <br /> rendering as real photos</b></h1>
  </div>

   <div className='flex gap-2 text-gray-300 p-2 body2'>
      <p>08.08.2021</p>
     <div className='mt-2'>
       <img src={line1} alt="line" />
     </div>
   <div className='text-[13px] text-white'>
      <p>Progressively incentivize cooperative systems through technically sound  <br /><span>functionalities. The credibly productivate seamless data.</span></p>
  </div>
 </div>
 <div className='flex text-white ml-10 text-[70px] mt-[-2rem]' id='btn'>
     <button onClick={() => handleBackgroundChange(0)} className={`text-white border-none outline-none ${slideIndex === 0 ? 'active' : ''}`}>.</button>
     <button onClick={() => handleBackgroundChange(1)} className={`text-gray-400 border-none outline-none ${slideIndex === 1 ? 'active' : ''}`}>.</button>
       <button onClick={() => handleBackgroundChange(2)} className={`text-gray-400 border-none outline-none ${slideIndex === 2 ? 'active' : ''}`}>.</button>
 </div>
 </div>

   <NavbarBody/>
   </div>
</div>
        )}
    {/* START OF BACKGROUND 1 */}
    

    {/* START OF BACKGROUND 2 */}
    {slideIndex === 1 && (
     <div className={`slide slide-${slideIndex}`} >
       <div className='bg-black 
        py-7 bg-opacity-20  h-[40px] w-full md:w-full'>

      <div className='flex justify-between mt-[-15px] '>
      <div className='text-white ml-7 runo  sm:text-[15px] text-center'>
         <h1>RUNO</h1>
      </div>

  <div className='flex text-white mr-7 gap-3 items-center navitems'>

   <div className='flex gap-3  justify-center'>
      <div className='flex sm:flex gap-2  md:flex '>
        <p>Home</p>
        <p>About</p>
       <p>Articles</p>
       <p>Contact Us</p>
   </div>
   <div className='sm:hidden hidden md:flex'>
       <img src={line} alt="line" />
   </div>
   <div className='flex gap-2 mt-1'>
        {slides[slideIndex]}
     </div>
     <div className='sm:hidden hidden md:flex '>
    <img src={line} alt="line" className='ml-3'/>
</div>
   </div>

</div>

 </div>
   <div className='text-left pt-20 ml-10 body1'>
     <div className='bg-gray-700  bg-opacity-50 w-28 mb-5 text-center text-[12px]  text-white p-1 rounded-lg btn'>
    <h5>ADVENTURE</h5>
   </div>
     <div className='text-[27px] text-white header' >
        <h1><b>Richard Norton photorealistic <br /> rendering as real photos</b></h1>
  </div>

   <div className='flex gap-2 text-gray-300 p-2 body2'>
      <p>08.08.2021</p>
     <div className='mt-2'>
       <img src={line1} alt="line" />
     </div>
   <div className='text-[13px] text-white'>
      <p>Progressively incentivize cooperative systems through technically sound  <br /><span>functionalities. The credibly productivate seamless data.</span></p>
  </div>
 </div>
 <div className='flex text-white ml-10 text-[70px] mt-[-2rem]' id='btn'>
     <button onClick={() => handleBackgroundChange(0)} className={`text-white border-none outline-none ${slideIndex === 0 ? 'active' : ''}`}>.</button>
     <button onClick={() => handleBackgroundChange(1)} className={`text-gray-400 border-none outline-none ${slideIndex === 1 ? 'active' : ''}`}>.</button>
       <button onClick={() => handleBackgroundChange(2)} className={`text-gray-400 border-none outline-none ${slideIndex === 2 ? 'active' : ''}`}>.</button>
 </div>
 </div>
 <NavbarBody/>
   </div>
</div>
        )}
  {/* START OF BACKGROUND 2 */}

      {/* START OF BACKGROUND 3 */}
{slideIndex === 2 && (
   <div className={`slide slide-${slideIndex}`}>
      <div className='flex  bg-black 
        py-10 bg-opacity-20  h-[40px] justify-between mt-[-10px] '>
      <div className='text-white ml-7 mt-[-8px] runo  sm:text-[15px] text-center'>
         <h1>RUNO</h1>
      </div>

  <div className='flex text-white mr-7 gap-3 items-center navitems'>

   <div className='flex gap-3  justify-center'>
      <div className='flex sm:flex gap-2  md:flex '>
        <p>Home</p>
        <p>About</p>
       <p>Articles</p>
       <p>Contact Us</p>
   </div>
   <div className='sm:hidden hidden md:flex'>
       <img src={line} alt="line" />
   </div>
   <div className='flex gap-2 mt-1'>
        {slides[slideIndex]}
     </div>
     <div className='sm:hidden hidden md:flex '>
    <img src={line} alt="line" className='ml-3'/>
</div>
   </div>

</div>

 </div>
 <div>
    <section className="flex flex-col items-center justify-center mt-20">
 <div className='bg-gray-700 bg-opacity-50 mb-5 w-28 rounded-lg'>
     <h5 >FASHION</h5>
 </div>

 <div className='text-[27px] text-white text-center tracking-wider header1'>
     <h1><b>Richird Norton photorealistic <br /> <span> rendering as real photos</span></b></h1>
</div>
<div className=' p-2 text-center'>
   <div className='text-[13px]'>
    <p className='text-gray-300 tracking-wide'>Progressively incentivize cooperative systems through technically <br /> <span className='ml-7'>sound functionalities. The credibly productivate seamless data.</span></p>

     <h1 className='text-white mt-5 text-[14px]'>By Jennifer Lawrence</h1>
    </div>
    <div className='flex text-white ml-10 text-[70px] mt-[-2rem]' id='btn'>
     <button onClick={() => handleBackgroundChange(0)} className={`text-white border-none outline-none ${slideIndex === 0 ? 'active' : ''}`}>.</button>
     <button onClick={() => handleBackgroundChange(1)} className={`text-gray-400 border-none outline-none ${slideIndex === 1 ? 'active' : ''}`}>.</button>
       <button onClick={() => handleBackgroundChange(2)} className={`text-gray-400 border-none outline-none ${slideIndex === 2 ? 'active' : ''}`}>.</button>
 </div>
     </div>
  </section>
  <NavbarBody/>
    </div>
     </div>
    )}
    {/* END OF  BACKGROUND 3 */}

      </div>
      </div>
    </>
  );
}

export default App;

