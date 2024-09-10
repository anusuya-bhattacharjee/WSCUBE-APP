import React from 'react';
import laptop from "../assets/image/man-sits-office-chair-with-laptop-diagram-graphs_704913-10123.avif";

const Experts = () => {
  return (
    <div className="max-w-screen-xl my-10 mx-auto md:grid grid-cols-3">
        <div className='col-span-1 w-4/5'>
        <img src={laptop} alt=""/>
        </div>
        <div className='col-span-2 items-center content-center px-5'>
        <h4 className='text-green-400 font-bold my-2'>LEARN FROM EXPERTS</h4>
        <p className='my-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <button className='bg-black text-white p-3 mt-3 rounded font-bold'>Get Started</button>
        </div>
    </div>
  )
}

export default Experts