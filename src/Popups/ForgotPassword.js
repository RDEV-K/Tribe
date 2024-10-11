import Img from '../assets/Ellipse1.svg';
const ForgotPassword = () => {
    return (
        <div className="bg-gradient-to-b from-blue-900 to-black h-[100vh]">
            <div className="px-6 pt-24">
                <div className="grid md:grid-cols-2 grid-cols-1  items-center">
                    <div className='colum1'>
                        <div className="text-white font-semibold text-6xl text-center">
                            No Worries
                        </div>
                    </div>
                    <div className='column2'>
                        <div className='relative md:block hidden'>
                            <img className='absolute z-1' src={Img} alt='buble' />
                        </div>
                        <div className='flex justify-center relative z-[999]'>
                            <div className='border border-white rounded-xl py-4 px-24 mt-12'>
                                <div className='content'>
                                    <h1 className='text-white font-bold text-3xl mt-5'>Forgot Password ?</h1>
                                    <h1 className='text-white  '>Please enter you’re email</h1>
                                    <div className='inputs mt-5'>
                                        <input
                                            className='rounded-xl bg-transparent border border-white pl-2 pr-16 py-2 text-white placeholder-white'
                                            placeholder='example@mail.com'
                                        />
                                    </div>
                                    <div className='pt-12 py-14'>
                                        <button className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-white font-bold py-2 px-4 rounded w-full h-55 p-14 gap-10 text-center pt-4 ">
                                            Reset Password</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ForgotPassword;