import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Img from "../../assets/unnamed.webp";
import { useAddPeerAmbassadorHook } from "../../hooks/useAddPeerAmbassadorHook";
import '../../App.css'
import PhoneInput from "react-phone-input-2";

const Peerambassadorform = () => {

  const peerAmbassador = useAddPeerAmbassadorHook();
  const navigate = useNavigate();
  const linear = "linear-gradient(90deg, #0C1A4C 0%, #28345F 100%)";

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const userid=localStorage.getItem('user_id')

  const onSubmit = (data) => {
    let payLoad={
      ...data,
      user_id:parseInt(userid)
    }
    peerAmbassador.handleAdPeerAmbassador(payLoad);
  };

  return (
    <div className="main" style={{ backgroundColor: linear }}>
      <div className="flex justify-center bg-[#15214c] md:pt-32 pt-12 text-white">
        <div className="max-w-[1200px] container pb-24">
          <img className="h-[180px]" src={Img} alt="abc" />
          <i
            className="fa fa-arrow-left mt-6 ml-20 hover:text-[17px] cursor-pointer"
            aria-hidden="true"
            onClick={() => navigate("/")}
          ></i>
          <div className="text text-center">
            <h1 className="font-bold text-[35px]">
              My360Tribe Peer Ambassador Intake Form
            </h1>
            <p className="mt-2 font-bold">
              Thank you for reaching out to My360Tribe. Our Mission is simple:
            </p>
            <p className="mt-2 font-bold">
              In support of U.S. Special Operations Forces (SOF) Operators, our
              <br className="md:block hidden"></br>
              mission is to provide Peer Advocacy and Concierge level support
              for <br className="md:block hidden"></br> SOF Operators as they
              face the challenges before, during and after{" "}
              <br className="md:block hidden"></br> transition.
            </p>
          </div>
          <div className="flex justify-center mt-4 px-4 md:px-0">
            <div className="tct md:max-w-[70%] max-w-full">
              <div className="form mt-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <p className="text-[#9ca3af] py-1">Your full name</p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("full_name", {
                      required: "Full Name is required",
                    })}
                  />
                  {errors.full_name && (
                    <p className="text-red-500">{errors.full_name.message}</p>
                  )}

                  <div className="flex md:justify-between md:flex-row flex-col mt-5">
                    <div className="">
                      <p className="text-[#9ca3af] py-1">Phone</p>
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
                    <div>
                      <p className="text-[#9ca3af] py-1">Email</p>
                      <input
                        className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff] w-full"
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-[#9ca3af] py-1 mt-5">Branch of Service</p>
                  <select
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#9ca3af]"
                    {...register("service_branch", {
                      required: "Branch of Service is required",
                    })}
                  >
                    <option value="AirForce">Air Force AFSOC</option>
                    <option value="Army">Army USASOC</option>
                    <option value="Navy">Navy NSW NSO</option>
                    <option value="Marines">Marines MARSOC</option>
                  </select>
                  {errors.service_branch && (
                    <p className="text-red-500">
                      {errors.service_branch.message}
                    </p>
                  )}

                  <div className="flex md:justify-between md:flex-row flex-col mt-5">
                    <div>
                      <p className="text-[#9ca3af] py-1">DOB</p>
                      <input
                        className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff] w-full"
                        type="date"
                        {...register("birth_date", {
                          required: "Date of Birth is required",
                        })}
                      />
                      {errors.birth_date && (
                        <p className="text-red-500">
                          {errors.birth_date.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <p className="text-[#9ca3af] py-1">
                        Preferred method of Contact
                      </p>
                      <input
                        className="rounded py-2 pl-6 pr-8 bg-[#152252] border text-[#fff] w-[400px]"
                        placeholder="Phone/email"
                        {...register("contact_number", {
                          required: "Preferred method of Contact is required",
                        })}
                      />
                      {errors.contact_number && (
                        <p className="text-red-500">
                          {errors.contact_number.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-[#9ca3af] py-1 mt-5">
                    How did you hear about us?
                  </p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("how_heard_about_us", {
                      required: "This field is required",
                    })}
                  />
                  {errors.how_heard_about_us && (
                    <p className="text-red-500">
                      {errors.how_heard_about_us.message}
                    </p>
                  )}

                  <p className="text-[#9ca3af] py-1 mt-5">
                    Why would you like to be a Peer Ambassador?
                  </p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("why_peer_ambassador", {
                      required: "This field is required",
                    })}
                  />
                  {errors.why_peer_ambassador && (
                    <p className="text-red-500">
                      {errors.why_peer_ambassador.message}
                    </p>
                  )}

                  <p className="text-[#9ca3af] py-1 mt-5">
                    How many hours a month can you commit to your Operator?
                  </p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    type="number"
                    {...register("hours_per_month", {
                      required: "This field is required",
                    })}
                  />
                  {errors.hours_per_month && (
                    <p className="text-red-500">
                      {errors.hours_per_month.message}
                    </p>
                  )}

                  <p className="text-[#9ca3af] py-1 mt-5">
                    How many Operators would you be able to work with at one
                    time if asked?
                  </p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    type="number"
                    {...register("number_of_operators", {
                      required: "This field is required",
                    })}
                  />
                  {errors.number_of_operators && (
                    <p className="text-red-500">
                      {errors.number_of_operators.message}
                    </p>
                  )}

                  <p className="text-[#9ca3af] py-1 mt-5">
                    Did you work with any transition services / organizations
                    during your transition, and would you recommend any of them?
                    If yes, which ones?
                  </p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("transitionServices", {
                      required: "This field is required",
                    })}
                  />
                  {errors.transitionServices && (
                    <p className="text-red-500">
                      {errors.transitionServices.message}
                    </p>
                  )}

                  <p className="text-[#9ca3af] py-1 mt-5">
                    Do you recommend any transition services?
                  </p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("recommendedTransitionServices", {
                      required: "This field is required",
                    })}
                  />
                  {errors.recommendedTransitionServices && (
                    <p className="text-red-500">
                      {errors.recommendedTransitionServices.message}
                    </p>
                  )}

                  <p className="text-[#9ca3af] py-1 mt-5">
                    What areas of transition do you feel you can best support?
                  </p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("areas_of_support", {
                      required: "This field is required",
                    })}
                  />
                  {errors.areas_of_support && (
                    <p className="text-red-500">
                      {errors.areas_of_support.message}
                    </p>
                  )}

                  <p className="text-[#9ca3af] py-1 mt-5">
                    What area(s)/topics are you uncomfortable with?
                  </p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("uncomfortable_topics", {
                      required: "This field is required",
                    })}
                  />
                  {errors.uncomfortable_topics && (
                    <p className="text-red-500">
                      {errors.uncomfortable_topics.message}
                    </p>
                  )}

                  <div className="flex justify-center mt-5">
                    <button
                      disabled={peerAmbassador.loading}
                      type="submit"
                      className="rounded border bg-transparent py-2 px-5 hover:font-semibold"
                    >
                      {peerAmbassador.loading ? "Submitting..." : "Submit"}
                    </button>
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

export default Peerambassadorform;
