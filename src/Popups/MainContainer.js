import React, { useState } from 'react';
import SignUp from './SignUp';
import Img from '../assets/Ellipse1.svg';
import Img2 from '../assets/Ellipse2.svg';
import { Link } from 'react-router-dom';
const MainContainer = () => {

    return (
        <>
            <div className="bg-gradient-to-b from-blue-900 to-black h-[100vh]">
                <div className="px-6 pt-24">
                    <div className="grid md:grid-cols-2 grid-cols-1  items-center">
                        <div className='colum1'>
                            <div className="text-white font-semibold text-6xl text-center">
                                Welcome Back
                            </div>
                        </div>

                        <div className='column2'>
                            <div className='relative md:block hidden'>
                                <img className='absolute z-1' src={Img} alt='buble' />
                                {/* <img className='absolute transform rotate-28.5' src={Img2} alt='buble2' /> */}
                            </div>
                          
                            <div className='flex justify-center relative z-[999]'>
                                <div className='border border-white rounded-xl py-4 px-24 mt-12'>
                                    <div className='content'>
                                        <h1 className='text-white font-bold text-3xl mt-5'>Login</h1>
                                        <h1 className='text-white mt-2 '>Glad you’re back.!</h1>
                                        <div className='inputs mt-5'>
                                            <input
                                                className='rounded-xl bg-transparent border border-white pl-2 pr-16 py-2 text-white placeholder-white'
                                                placeholder='User Name'
                                            />

                                            <div>
                                                <input className='rounded-xl bg-[transparent] border border-white pl-2 pr-16 py-2 my-4 text-white placeholder-white' placeholder='Password' />
                                            </div>

                                        </div>
                                        <div>
                                            <button className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-white font-bold py-2 px-4 rounded w-full h-55 p-14 gap-10 text-center">
                                                Login</button></div>
                                                <h3 className='text-white mt-4 text-center'>
                                                Forgot password ?
                                        </h3>
                                        <h3 className='text-white mt-20'>
                                            Don’t have an account? Signup
                                        </h3>
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

export default MainContainer;
