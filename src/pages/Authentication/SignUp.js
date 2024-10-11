import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRegisterHook } from "../../hooks/useRegisterHook";
import Img from "../../assets/Ellipse1.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Img2 from "../../assets/unnamed.webp";

const SignUp = () => {
  const navigate = useNavigate();
  const signUp = useRegisterHook();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {    
    signUp.handleSignup(data);
    reset()
  };

  return (
    <div className="bg-gradient-to-b from-blue-900 to-black pb-12">
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
                    <h1 className="text-white font-bold text-3xl mt-5">
                      Sign up
                    </h1>
                    <h1 className="text-white mt-2">
                      Just some details to get you in !
                    </h1>
                    <div className="inputs mt-5">
                      <div className="pt-4">
                        <input
                          className="rounded-xl bg-transparent border border-white pl-2 pr-16 py-2 text-white placeholder-white"
                          placeholder="First Name"
                          {...register("first_name", { required: true })}
                        />
                      </div>
                      {errors.first_name && (
                        <span className="text-red-500">
                          First Name is required
                        </span>
                      )}
                      <div className="pt-4">
                        <input
                          className="rounded-xl bg-transparent border border-white pl-2 pr-16 py-2 text-white placeholder-white"
                          placeholder="Last Name"
                          {...register("last_name", { required: true })}
                        />
                      </div>
                      {errors.last_name && (
                        <span className="text-red-500">
                          Last Name is required
                        </span>
                      )}

                      <div className="pt-4">
                        <PhoneInput
                          country={"us"}
                          inputStyle={{
                            width: "100%",
                            backgroundColor: "transparent",
                            borderColor: "white",
                            color: "white",
                          }}
                          inputClass="rounded-xl"
                          placeholder="Phone"
                          onChange={(phone) =>
                            setValue("phone_number", phone, {
                              shouldValidate: true,
                            })
                          }
                        />
                      </div>
                      {errors.phone_number && (
                        <span className="text-red-500">
                          Valid phone number is required
                        </span>
                      )}
                      <div className="pt-4">
                        <input
                          className="rounded-xl bg-transparent border border-white pl-2 pr-16 py-2 text-white placeholder-white"
                          placeholder="Email"
                          {...register("email", {
                            required: true,
                            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                          })}
                        />
                      </div>
                      {errors.email && (
                        <span className="text-red-500">
                          Valid email is required
                        </span>
                      )}
                      <div className="pt-4">
                        <input
                          className="rounded-xl bg-transparent border border-white pl-2 pr-16 py-2 text-white placeholder-white"
                          type="password"
                          placeholder="Password"
                          {...register("password", {
                            required: true,
                            minLength: 6,
                          })}
                        />
                      </div>
                      {errors.password && (
                        <span className="text-red-500">
                          Password must be at least 6 characters
                        </span>
                      )}

                      {/* Role Selection */}
                      <div className="pt-4">
                        <p className="text-xs mb-1 text-white">
                          Select how you want to join us ?
                        </p>
                        <select
                          className="rounded-xl bg-[#0a1039] border border-white pl-2 pr-16 py-2 w-full text-white placeholder-white"
                          {...register("role", { required: true })}
                        >
                          <option value="OPERATOR">Operator</option>
                          <option value="SERVICE_PARTNER">
                            Service Partner
                          </option>
                          <option value="CONCIERGE">Concierge</option>
                          <option value="PEER_AMBASSADOR">
                            Peer Ambassador
                          </option>
                        </select>
                      </div>
                      {errors.role && (
                        <span className="text-red-500">
                          Role selection is required
                        </span>
                      )}
                    </div>
                    <div className="pt-6">
                      <button
                        disabled={signUp.loading}
                        type="submit"
                        className={`${
                          signUp.loading
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800"
                        } text-white font-bold py-2 px-4 rounded w-full h-55 p-14 gap-10 text-center pt-4`}
                      >
                        {signUp.loading ? "Please wait" : "Sign up"}
                      </button>
                      <h1 className="text-white mt-2 text-center">
                        Already have an account?{" "}
                        <span
                          className="hover:underline hover:font-bold hover:cursor-pointer"
                          onClick={() => navigate("/signin")}
                        >
                          Sign in
                        </span>
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

export default SignUp;
