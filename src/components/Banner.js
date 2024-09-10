import React from 'react';
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
<div className='bg-blue-500 w-full py-[100px]'>
<div className='max-w-[1240px] mx-auto text-center font-bold'>
{/* <div className='grid justify-items-center'> */}
<div className='text-xl md:text-3xl md:mb-5'>Learn With Us</div>
<div className=' text-3xl md:text-5xl text-white md:mb-5'>Grow With Us</div>
<div className='text-xl md:text-3xl text-white'>Learn 
<ReactTyped 
className='pl-2'
strings={["Web Development", "Digital Marketing", "JavaScript", "Node", "React", "Tailwind", "TypeScript"]} 
typeSpeed={40} 
loop={true} 
backSpeed={50}
/>
</div>
<button className='bg-black text-white p-3 mt-3 rounded font-bold'>Get Started</button>
{/* // </div> */}
</div>
    </div>
  )
}

export default Banner