import React, { useState } from 'react';
import Img from '../assets/Ellipse1.svg';
import Img2 from '../assets/Ellipse2.svg';
const EmailVerification = () => {
    return (
        <>
            <div className="bg-gradient-to-b from-blue-900 to-black h-[100vh]">
                <div className="px-6 pt-24">
                    <div className="grid md:grid-cols-2 grid-cols-1  items-center">
                        <div className='colum1'>
                            <div className="text-white font-semibold text-6xl text-center">
                                Welcome
                            </div>
                        </div>
                        <div className='column2'>
                            <div className='relative md:block hidden'>
                                <img className='absolute z-1' src={Img} alt='buble' />
                            </div>
                            <div className='flex justify-center relative z-[999]'>
                                <div className='border border-white rounded-xl py-4 px-24 mt-12'>
                                    <div className='content'>
                                        <h1 className='text-white font-bold text-3xl mt-5'>Signup</h1>
                                        <h1 className='text-white mt-2 '>Just some details to get you in.!</h1>
                                        <div className='inputs mt-5'>
                                            <input
                                                className='rounded-xl bg-transparent border border-white pl-2 pr-16 py-2 text-white placeholder-white'
                                                placeholder='User Name'
                                            />
                                            <div className='pt-4'>
                                                <input
                                                    className='rounded-xl bg-transparent border border-white pl-2 pr-16 py-2 text-white placeholder-white'
                                                    placeholder='Email / Phone'
                                                /></div>
                                            <div>
                                                <input className='rounded-xl bg-[transparent] border border-white pl-2 pr-16 py-2 my-4 text-white placeholder-white' placeholder='Password' />
                                                <div>
                                                    <input className='rounded-xl bg-[transparent] border border-white pl-2 pr-16 py-2  text-white placeholder-white' placeholder='Confirm Password' />
                                                </div>   </div>
                                        </div>
                                        <div className='pt-6 py-10'>
                                            <button className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-white font-bold py-2 px-4 rounded w-full h-55 p-14 gap-10 text-center pt-4 ">
                                                Signup</button></div>
                                                <h1 className='text-white mt-2 text-center pt-14'>It looks like you already have an account with us.</h1>
                                                <h1 className='text-white mt-2 text-center'>Please login</h1>
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
export default EmailVerification;