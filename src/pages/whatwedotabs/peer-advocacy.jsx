import React, { useState } from "react";
import Img from "../../assets/Group 2.png";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Dummy = ({ handleClick }) => {
  const navigate = useNavigate();
  const buttonGradient =
    "linear-gradient(to bottom, #12179d, #001c83, #001c69, #031a4e, #0d1633)";
  const peer = [
    "Relocation",
    "Legal Services",
    "Financial Support",
    // "Relocation Assistance",
    "Family/Legal Support",
    "Mentorship",
  ];
  const [activeTab, setActiveTab] = useState("Relocation");

  const handleTabs = (item) => {
    setActiveTab(item);
  };
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
              class="fa fa-long-arrow-left text-2xl text-white hover:font-bold cursor-pointer pl-2 md:pl-0"
              onClick={() => handleNavigate()}
            ></i>
            <h1 className="text-white md:text-5xl text-2xl mt-12 text-center md:pb-12 pb-2 font-bold">
              <i class="fa fa-bullhorn mr-2 text-[36px]" aria-hidden="true"></i>{" "}
              Peer Advocacy
            </h1>
          </div>
          <p className="text-center mb-5 text-white md:text-xl text-sm md:whitespace-normal px-4 md:px-0">
            What sets us apart is our Concierge-level support and extensive,
            confidential Peer Ambassador network of Operators helping Operators
            by providing support and guidance to you as a member of My360Tribe.
            Your Concierge will keep in contact with you and help coordinate
            contact with the service partners that can assist you in navigating
            this new life. Click on the tabs above to learn more about the
            360-Warrior Care.
          </p>
          <div className="w-full overflow-x-scroll md:overflow-hidden md:mt-12 mt-3 px-4">
            <ul class="flex md:gap-6 gap-2 text-xs md:text-sm font-medium text-center  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
              {peer.map((item) => (
                <li
                  class={`me-2 md:pr-12 pr-1 md:py-6 py-0  cursor-pointer ${
                    activeTab === item ? "border-b-2 border-[#d0d7f4] " : ""
                  } bg-[#15214c]`}
                >
                  <a
                    class="inline-block md:p-4 px-2 py-2 w-[131px] md:w-full py-4 md:px-0 md:py-0 text-[#d0d7f4] font-bold rounded-t-lg active"
                    onClick={() => handleTabs(item)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {activeTab == "Relocation" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Relocation</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                Relocating can be stressful and deciding where to live and
                moving can be daunting. We have resources available around the
                country to help you and your family make the best decisions on
                where to settle and begin your life anew.{" "}
              </p>
            </div>
          ) : activeTab == "Legal Services" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Legal Services</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                There will be times when you may require legal representation or
                assistance. My360Tribe can provide you with referrals to
                established law firms and attorneys.{" "}
              </p>
            </div>
          ) : activeTab == "Financial Support" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Financial Support</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                My360Tribe can provide assistance in identifying a reputable
                financial institution, financial planner or other financial
                resources.{" "}
              </p>
            </div>
          )
          // ) : activeTab == "Relocation Assistance" ? (
          //   <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
          //     <h1 className="font-bold text-3xl"> Relocation Assistance</h1>
          //     <p className="font-semibold text-xl mt-4 leading-[40px]">
          //       {" "}
          //       Relocating after transition can be a monumental task and
          //       stressful. My360Tribe can connect you with a realtor or other
          //       resources to make your move as smooth as possible.{" "}
          //     </p>
          //   </div>
          // ) 
          : activeTab == "Family/Legal Support" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Family/Legal Support</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                Can divorce fall under "Legal" so we don't need to get that
                specific as "Legal" can cover all areas needed? Text: "We know
                it isn't just the Operator who is transitioning, but the whole
                family. Resources to support the family and individual family
                members are available, including family counseling, couples and
                family retreats{" "}
              </p>
            </div>
          ) : activeTab == "Mentorship" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Mentorship</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {/* {" "}
                Can divorce fall under "Legal" so we don't need to get that
                specific as "Legal" can cover all areas needed? Text: "We know
                it isn't just the Operator who is transitioning, but the whole
                family. Resources to support the family and individual family
                members are available, including family counseling, couples and
                family retreats{" "} */}
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

export default Dummy;
