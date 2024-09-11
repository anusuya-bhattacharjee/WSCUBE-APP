import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-500 w-full p-4 md:flex justify-around">
        <div>
            <h1 className='text-2xl font-bold'>WsCube Tech</h1>
            <p className="text-white mt-2">Lorem Ipsum is simply dummy text<br /> of the printing and typesetting industry.<br />
           Lorem Ipsum has been the industry's standard </p>
            <div className='flex gap-8 mt-3 text-white mb-4'>
            <FaFacebookSquare className='h-6'/>
            <FaInstagram className='h-6'/>
            <FaTwitter className='h-6'/>
            <FaGithub className='h-6'/>
            </div>
        </div>
        <div className='mb-4'>
            <h1 className='text-black mb-2 font-bold'>Solutions</h1>
            <h1 className='text-white mb-2'>Analytics</h1>
            <h1 className='text-white mb-2'>Marketing</h1>
            <h1 className='text-white mb-2'>Commerce</h1>
            <h1 className='text-white mb-2'>Insights</h1>
        </div>
        <div className='mb-4'>
            <h1 className='text-black mb-2 font-bold'>Support</h1>
            <h1 className='text-white mb-2'>Pricing</h1>
            <h1 className='text-white mb-2'>Documentation</h1>
            <h1 className='text-white mb-2'>Guides</h1>
            <h1 className='text-white mb-2'>API Status</h1>
        </div>
        <div className='mb-4'>
            <h1 className='text-black mb-2 font-bold'>Company</h1>
            <h1 className='text-white mb-2'>About</h1>
            <h1 className='text-white mb-2'>Blog</h1>
            <h1 className='text-white mb-2'>Jobs</h1>
            <h1 className='text-white mb-2'>Press</h1>
            <h1 className='text-white mb-2'>Careers</h1>
        </div>
    </div>
  )
}

export default Footer;