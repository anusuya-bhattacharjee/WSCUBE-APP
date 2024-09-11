import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-blue-500 w-full p-4'>
    <div className='max-w-screen-xl md:flex justify-around mx-auto py-12'>
    <div className='mt-2'>
        <h1 className='text-xl md:text-3xl text-white font-bold'>Want to learn latest I.T skills?</h1>
        <p className='text-white'>Sign up to our newsletter and stay up to date.</p>
      </div>
      <div className='mt-2'>
        <input className='p-2 rounded text-slate-500 mb-2 mr-2' type="text" placeholder='Enter Email'/>
        <button className='bg-black text-white p-2 rounded font-bold'>Notify Me</button>
        <p className='text-white'>We care about the protection of your data. Read Our</p>
        <button>Privacy Policy</button>
      </div>
    </div>
    </div>
  )
}

export default NewsLetter