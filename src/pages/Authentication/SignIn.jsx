import React from "react";
import { useForm } from "react-hook-form";
import Img from "../../assets/Ellipse1.svg";
import { useRegisterHook } from "../../hooks/useRegisterHook";
import { useNavigate } from "react-router-dom";
import Img2 from "../../assets/unnamed.webp";
const SignIn = () => {
    const navigate=useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const login=useRegisterHook()
  const onSubmit = data => {
    console.log(data);
    login.handleLogin(data)
  };

  return (
    <div className="bg-gradient-to-b from-blue-900 to-black py-32">
      <div className="px-6 pt-24">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
          <div className="colum1">
          <img
                className=" md:block hidden h-[350px] opacity-50 "
                src={Img2}
                alt="abc"
              />
          </div>
          <div className="column2">
            <div className="relative md:block hidden">
              <img className="absolute z-1" src={Img} alt="bubble" />
            </div>
            <div className="flex justify-center relative z-[1]">
              <div className="border-2 border-white rounded-xl py-4 px-24 mt-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="content">
                    <h1 className="text-white font-bold text-3xl mt-5">Sign in</h1>
                    <h1 className="text-white mt-2">
                      Just some details to get you in !
                    </h1>
                    <div className="inputs mt-5">
                      <div className="pt-4">
                        <input
                          className="rounded-xl bg-transparent border border-white pl-2 pr-16 py-2 text-white placeholder-white"
                          placeholder="Email"
                          {...register("email", { required: true })}
                        />
                      
                      </div>
                      {errors.email && (
                          <span className="text-red-500 text-sm my-1">This field is required</span>
                        )}
                      <div>
                        <input
                          className="rounded-xl bg-transparent border border-white pl-2 pr-16 py-2 my-4 text-white placeholder-white"
                          placeholder="Password"
                          type="password"
                          {...register("password", { required: true })}
                        />
                     
                      </div>
                      {errors.password && (
                          <span className="text-red-500 text-sm">This field is required</span>
                        )}
                    </div>
                    <div className="pt-6">
                       <button
                        disabled={login.loading}
                        type="submit"
                        className={`${
                          login.loading
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800"
                        } text-white font-bold py-2 px-4 rounded w-full h-55 p-14 gap-10 text-center pt-4`}
                      >
                        {login.loading ? "Please wait" : "Sign in"}
                      </button>
                      <h1 className="text-white mt-2 text-center">
                        Don't have an account? <span className="hover:underline hover:font-bold hover:cursor-pointer" 
                        onClick={()=>navigate('/signup')}
                        >Sign up</span>
                      </h1>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
