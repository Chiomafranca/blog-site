import React from 'react'
import line1 from '../images/line1.png'


const CenterdBody = () => {
  return (
   <div>
    {/* start of body */}
   <div className='bgbody w-full md:w-full'>
  <div className='relative top-8'>
   
      <div className='flex justify-center'>
      <a className='bg-white mt-20 bg-opacity-20 px-6  text-white text-[12px] py-1 w-[100px] rounded-lg'>FASHION</a>
      </div>

   <div className='text-[35px] ml-14 mt-10 text-center tracking-tighter text-white '>
       <h1>Richird Norton photorealistic <br /> <span className='relative bottom-2'>rendering as real photos</span></h1>
  </div>
  
    <div className='text-gray-300  opacity-70  ml-10 tracking-wide'>
       <p className='text-[11px] text-center'>Progressively incentivize cooperative systems through  technically sound <br /> <span className='ml-10'> functionalities. The credibly productivate seamless data.</span></p>
    </div>

    <div className='flex justify-center'>
        <div className='w-[100px] mt-5 '>
        <img src={line1} alt="line" className='bg-white ml-32'/>
        </div>
        <div className='text-gray-300 mt-7 mr-28'>
        <h1 >08.08.2021</h1>
        </div>
    </div>
  </div>
    </div>
    {/* end of body */}


{/* start of well */}
<div className='text-left ml-12 mt-20 text-[40px] opacity-90' id='editors-pick'>
    <h1>Editor’s Pick</h1>
 </div>

<div className='back'>
 <div className='flex mt-10 lg:flex md:flex sm:flex' id='front'>
    <div className='blog1'>
     <div className='w-[100px] relative left-72 top-5 rounded-lg bg-white bg-opacity-25' id='fashion-btn'>
     <h1 className=' text-white text-center'>FASHION</h1>
</div>

<div className='mt-20'>
        
  <div className='text-white text-[20px] tracking-tight mr-[52px]'>

    <h2 className=' mr-44 text-[13px] ml-14 text-gray-300' id='number'>08.08.2021</h2>
    <p id='head1' className='ml-14'>Richird Norton photorealistic <br /> <span className='mr-10' id='head2'>rendering as real photos</span> </p>

<div className='text-white text-[13px] opacity-80 tracking-tight ml-14 mt-2  w-[330px] ' id='paras'>
    <p>Progressively incentivize cooperative systems through</p>
    <p className='mr-12'  id='last2'> technically sound functionalities. The credibly</p>
    <p className=' mr-[9rem]' id='last1'> productivate seamless data.</p>
  </div>
 </div>
        
 </div>
 </div>
 <div className='blog2'>
    <div className='w-[100px] relative left-72 top-5 rounded-lg bg-white bg-opacity-25' id='fashion-btn'>
    <h1 className=' text-white text-center'>FASHION</h1>
     </div>
 <div className='mt-20'>
        
 <div className='text-white text-[20px] tracking-tight mr-[52px]'>

  <h2 className=' mr-44 text-[13px] ml-14 text-gray-300' id='number'>08.08.2021</h2>
  <p id='head1' className='ml-14'>Richird Norton photorealistic <br /> <span className='mr-10' id='head2'>rendering as real photos</span> </p>

 <div className='text-white text-[13px] opacity-80 tracking-tight ml-14 mt-2  w-[330px] ' id='paras'>
   <p>Progressively incentivize cooperative systems through</p>
    <p className='mr-12'  id='last2'> technically sound functionalities. The credibly</p>
    <p className=' mr-[9rem]' id='last1'> productivate seamless data.</p>
 </div>
 </div>
        
</div>
 </div>

    <div className='blog3 '>
    <div className='w-[100px] relative left-72 top-5 rounded-lg bg-white bg-opacity-25' id='fashion-btn'>
     <h1 className=' text-white text-center'>FASHION</h1>
     </div>
     <div className='mt-20'>
        
 <div className='text-white text-[20px] tracking-tight mr-[52px]'>

  <h2 className=' mr-44 text-[13px] ml-14 text-gray-300' id='number'>08.08.2021</h2>
  <p id='head1' className='ml-14' >Richird Norton photorealistic <br /> <span className='mr-10' id='head2'>rendering as real photos</span> </p>

  <div className='text-white text-[13px] opacity-80 tracking-tight ml-14 mt-2  w-[330px] ' id='paras'>
   <p>Progressively incentivize cooperative systems through</p>
   <p className='mr-12' id='last2'> technically sound functionalities. The credibly</p>
   <p className=' mr-[9rem]' id='last1'> productivate seamless data.</p>
 </div>
 </div>
        
 </div>
    </div>
 </div>
 </div>
 {/* end of well */}
    </div>
    
  )
}
export default CenterdBody

