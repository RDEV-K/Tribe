import React, { useState } from 'react';
import Img from '../assets/Ellipse1.svg';
import Img2 from '../assets/Ellipse2.svg';
import Img3 from '../assets/Group 1000006053.png';
const OTP = () => {
    return (
        <>
            <div className="bg-gradient-to-b from-blue-900 to-black h-[100vh]">
                <div className="px-6 pt-24">
                    <div className="grid md:grid-cols-2 grid-cols-1  items-center">
                        <div className='colum1'>
                            <div className="text-white font-semibold text-6xl text-center">
                                <img className='pl-20' src={Img3} alt='img' />

                            </div>
                            {/* <div className='relative md:block hidden'>
                                <img className='absolute' src={Img2} alt='buble' />
                            </div> */}
                        </div>
                        <div className='column2'>
                            <div className='relative md:block hidden'>
                                <img className='absolute z-1' src={Img} alt='buble' />
                            </div>
                            <div className='flex justify-center relative z-[999]'>
                                <div className='border border-white rounded-xl py-4 px-24 mt-12'>
                                    <div className='content'>
                                        <h1 className='text-white font-bold text-3xl mt-5 pt-12 text-center'>OTP Verification</h1>
                                        <h1 className='text-white mt-2 text-center pt-8'>We've sent a verificaton code to your email -</h1>
                                        <h1 className='text-white text-center'>codingnepalweb@gmail.com</h1>
                                        <div className="flex justify-between">
  <input className="rounded-xl bg-transparent border border-white text-white placeholder-white py-2 px-2 mt-2" />
  {/* <input className="rounded-xl bg-transparent border border-white text-white placeholder-white" />
  <input className="rounded-xl bg-transparent border border-white text-white placeholder-white" />
  <input className="rounded-xl bg-transparent border border-white text-white placeholder-white" />
  <input className="rounded-xl bg-transparent border border-white text-white placeholder-white" /> */}
</div>

                                        {/* <div className='inputs  grid md:grid-cols-5 grid-cols-1 items-center relative'>
                                            <div className='colum1'>
                                                <input
                                                    className=' rounded-xl bg-transparent border border-white text-white placeholder-white'
                                                />
                                            </div>
                                            <div className='colum2'>
                                                <input
                                                    className=' rounded-xl bg-transparent border border-white text-white placeholder-white'
                                                />
                                            </div>
                                           

                                        </div> */}

                                        <div className='pt-6 py-10'>
                                            <button className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-white font-bold py-2 px-4 rounded w-full h-55 p-14 gap-10 text-center pt-4 ">
                                                Verify</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default OTP;