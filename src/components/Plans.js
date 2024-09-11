import React from 'react'

const Plans = () => {
  return (
    <div className="py-24 px-2">
        <div className="md:grid grid-cols-3 max-w-screen-xl mx-auto gap-5 text-center">
            <div className="shadow-xl my-2 hover:scale-105 duration-300 h-96">
                <h1 className='font-bold text-2xl'>Web development</h1>
                <h1 className='font-bold text-2xl'>$149</h1>
                <p>Lorem Ipsum is simply</p>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
                <p>Lorem Ipsum is simply dumm</p>
                <button className='bg-green-400 py-2 px-9 mt-3 rounded font-bold'>Start Trial</button>
            </div>
            <div className="shadow-xl my-2 bg-gray-100 hover:scale-105 duration-300 h-96">
                <h1 className='font-bold text-2xl'>Digital Marketing</h1>
                <h1 className='font-bold text-2xl'>$149</h1>
                <p>Lorem Ipsum is simply</p>
                <p>Lorem Ipsum is simply dumm</p>
                <button className='bg-black text-green-600 py-2 px-9 mt-3 rounded font-bold'>Start Trial</button>
            </div>
            <div className="shadow-xl my-2 hover:scale-105 duration-300 h-96">
                <div className='font-bold text-2xl'>App development</div>
                <h1 className='font-bold text-2xl'>$149</h1>
                <p>Lorem Ipsum is simply</p>
                <p>Lorem Ipsum is simply dumm</p>
                <button className='bg-green-400 py-2 px-9 mt-3 rounded font-bold'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Plans