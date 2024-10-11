import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Transition = ({ handleClick }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Education");

  const handleTabs = (item) => {
    setActiveTab(item);
  };
  const transition = [
    "Education",
    // "VA Programs",
    // "Education Consulting",
    "VA Programs Assistance",
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
            <h1 className="text-white md:text-5xl text-2xl mt-12 text-center md:pb-12 pb-2 font-bold">
              <i class="fa fa-exchange mr-2 text-[36px]" aria-hidden="true"></i>{" "}
              Transition
            </h1>
          </div>
          <p className="text-center mb-5 text-white md:text-xl text-sm md:whitespace-normal px-4 md:px-0">
            At My360Tribe, we are committed to your health and well-being.
            Providing referrals and services to accomplish 360-degree warrior
            care is our mission. Above you will find a listing of our areas of
            referrals and services as it relates to an operator’s health and
            well-being.
          </p>
          <div className="w-full overflow-x-scroll md:overflow-hidden md:mt-12 mt-3">
            <ul class="flex md:gap-6 gap-2 text-xs md:text-sm font-medium text-center  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
              {transition.map((item) => (
                <li
                  class={`me-2 md:pr-12 pr-1 cursor-pointer ${
                    activeTab === item ? "border-b-2 border-[#d0d7f4] " : ""
                  } bg-[#15214c]`}
                >
                  <a
                    class="inline-block p-4 text-[#d0d7f4] w-[131px] md:w-full font-bold rounded-t-lg active"
                    onClick={() => handleTabs(item)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {activeTab == "Education" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Education</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                Want to go back to school, learn a new trade or obtain a
                civilian certification? We have resources and a referral network
                to introduce our operators to different educational programming
                across the country.{" "}
              </p>
            </div>
          ) : // ) : activeTab == "VA Programs" ? (
          //   <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
          //     <h1 className="font-bold text-3xl">VA Programs</h1>
          //     <p className="font-semibold text-xl mt-4 leading-[40px]">
          //       {" "}
          //       VA Programs are an important part of any transition. We work
          //       with our operators with referrals to the VA system and
          //       identifying a VA VSO that can assist them personally. {" "}
          //     </p>
          //   </div>
          // ) : activeTab == "Education Consulting" ? (
          //   <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
          //     <h1 className="font-bold text-3xl">Education Consulting</h1>
          //     <p className="font-semibold text-xl mt-4 leading-[40px]">
          //       {" "}
          //       It is a long established fact that a reader will be distracted
          //       by the readable content of a page when looking at its layout.
          //       The point of using Lorem Ipsum is that it has a more-or-less
          //       normal distribution of letters, as opposed to using 'Content
          //       here, content here', making it look like readable English. Many
          //       desktop publishing packages and web page editors now use Lorem
          //       Ipsum as their default model text, and a search for 'lorem
          //       ipsum' will uncover many web sites still in their infancy.
          //       Various versions have evolved over the years, sometimes by
          //       accident, sometimes on purpose (injected humour and the like).{" "}
          //     </p>
          //   </div>
          // )
          activeTab == "VA Programs Assistance" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">VA Programs Assistance</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. {" "}
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

export default Transition;
