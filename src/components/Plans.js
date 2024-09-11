import React from 'react';
import { FcApproval } from "react-icons/fc";

const Plans = () => {
  return (
    <div className="py-24 px-2">
        <div className="md:grid grid-cols-3 max-w-screen-xl mx-auto gap-5 text-center">
            <div className="shadow-xl my-2 hover:scale-105 duration-300 h-96">
                <h1 className='font-bold text-2xl mt-8'>Web development</h1>
                <h1 className='font-bold text-2xl my-4'>$149</h1>
                <p className='my-4'>Lorem Ipsum is simply</p>
                <p className='my-4'>Lorem Ipsum is simply dummy text of the printing</p>
                <p>Lorem Ipsum is simply dumm</p>
                <button className='bg-green-400 py-2 px-9 rounded font-bold mt-6'>Start Trial</button>
            </div>
            <div className="shadow-xl my-2 bg-gray-100 hover:scale-105 duration-300 h-96">
                <h1 className='font-bold text-2xl mt-8'>Digital Marketing</h1>
                <h1 className='font-bold text-2xl my-4'>$149</h1>
                <p className='my-4'>Lorem Ipsum is simply</p>
                <p className='my-4'>Lorem Ipsum is simply dummy text of the printing</p>
                <p className='my-4'>Lorem Ipsum is simply dumm</p>
                <button className='bg-black text-green-600 py-2 px-9 mt-6 rounded font-bold'>Start Trial</button>
            </div>
            <div className="shadow-xl my-2 hover:scale-105 duration-300 h-96">
                <div className='font-bold text-2xl mt-8'>App development</div>
                <h1 className='font-bold text-2xl my-4'>$149</h1>
                <p className='my-4'>Lorem Ipsum is simply</p>
                <p className='my-4'>Lorem Ipsum is simply dummy text of the printing</p>
                <p className='my-4'>Lorem Ipsum is simply dumm</p>
                <button className='bg-green-400 py-2 px-9 mt-6 rounded font-bold'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Plans