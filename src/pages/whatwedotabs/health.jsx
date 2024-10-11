import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Health = ({ handleClick }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Medical");

  const handleTabs = (item) => {
    setActiveTab(item);
  };
  const health = [
    "Medical",
    "Mental Health",
    "Substance Abuse",
    "Mobility",
    "Sports and Recreation",
  ];
  const handleNavigate = () => {
    handleClick(2);
    navigate("/");
  };
  return (
    <div className="main">
      <div className="flex justify-center bg-[#15214c] md:pt-32 pt-12">
        <div className="max-w-[1200px] container pb-24">
          <div className="w-[60%] flex justify-between items-center">
            <i
              class="fa fa-long-arrow-left text-2xl text-white hover:font-bold cursor-pointer"
              onClick={() => handleNavigate()}
            ></i>
            <h1 className="text-white md:text-5xl text-2xl mt-12 text-center pb-12 font-bold">
              <i
                class="fa fa-heartbeat mr-2 text-[36px]"
                aria-hidden="true"
              ></i>{" "}
              Health
            </h1>
          </div>
          <p className="text-center mb-5 text-white md:text-xl text-sm md:whitespace-normal px-4 md:px-0">
            <strong> At My360Tribe</strong>, we are committed to your health and
            well-being. Providing referrals and services to accomplish
            360-degree warrior care is our mission. Above you will find a
            listing of our areas of referrals and services as it relates to an
            operator’s health and well-being.
          </p>
          <div className="w-full overflow-x-scroll md:overflow-hidden mt-12 ">
            <ul class="flex md:gap-6 gap-2   text-xs md:text-sm font-medium text-center  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
              {health.map((item) => (
                <li
                  class={`me-2 md:pr-12 pr-1 cursor-pointer ${
                    activeTab === item ? "border-b-2 border-[#d0d7f4] " : ""
                  } bg-[#15214c]`}
                >
                  <a
                    class="inline-block md:p-4 px-2 py-1 w-[131px] md:w-full md:px-0 md:py-0 text-[#d0d7f4] font-bold rounded-t-lg active"
                    onClick={() => handleTabs(item)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {activeTab == "Medical" ? (
            <div className="transition-training mx-4 md:mx-0  bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[55%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Medical</h1>
              <p className="font-semibold text-xl mt-4 leading-[30px]">
                {" "}
                We have partnered with organizations and providers committed to
                the mission of My360Tribe that will ensure you are getting the
                most appropriate care based on your specific needs.{" "}
              </p>
            </div>
          ) : activeTab == "Mental Health" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[60%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Mental Health</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                We want you to thrive and succeed in this next chapter.... We
                understand the mental and emotional strain of transition and
                have partnered with a range of service providers to support you
                and your family during this challenging time..{" "}
              </p>
            </div>
          ) : activeTab == "Substance Abuse" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[60%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Substance Abuse</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                We all know that substance abuse can become a factor in an
                Operator’s life after transition. The feelings of desperation,
                isolation, and lack of purpose can manifest into substance abuse
                and addiction. My360Tribe will provide referrals to the
                appropriate service partner to help you and your family through
                this difficult time.{" "}
              </p>
            </div>
          ) : activeTab == "Mobility" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[55%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Mobility</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                Leaving the service with mobility issues can be painful and
                challenging. We at My360Tribe have a network of service partners
                that are available to assist you and your family as you learn to
                live your 'new normal'.{" "}
              </p>
            </div>
          ) : activeTab == "Sports and Recreation" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[55%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Sports and Recreation</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                We believe that sports, recreation and physical activity are an
                integral part of your overall physical and mental health.
                My360Tribe has partnered with a variety of providers that
                understand the needs of the transitioning warrior.{" "}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Health;
