import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Employment = ({ handleClick }) => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Job Services");

  const handleTabs = (item) => {
    setActiveTab(item);
  };
  const employ = [
    "Job Services",
    "Talent Acquisition/Recruiting",
    "Entrepreneurship",
    "Mentorship",
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
              class="fa fa-long-arrow-left text-2xl text-white hover:font-bold cursor-pointer pl-2 md:pl-0"
              onClick={() => handleNavigate()}
            ></i>
            <h1 className="text-white md:text-5xl text-2xl md:mt-12 mt-2 text-center pb-12 font-bold">
              <i
                class="fa fa-briefcase mr-2 text-[26px]"
                aria-hidden="true"
              ></i>{" "}
              Employment
            </h1>
          </div>
          <p className="text-center mb-5 text-white md:text-xl text-sm md:whitespace-normal px-4 md:px-0">
            My360Tribe has established relationships with service organizations,
            corporations and businesses to help you expand your network,
            mentoring opportunities, job services and even starting your own
            business.{" "}
          </p>
          <div className="w-full overflow-x-scroll md:overflow-hidden">
            <ul class="flex md:gap-6 gap-2  text-xs md:text-sm font-medium text-center  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
              {employ.map((item) => (
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

          {activeTab == "Job Services" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Job Services</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                My360Tribe knows job searching can be a full time job in and of
                itself. We have a network of partners and providers who are well
                versed in resume development, conducting mock interviews,
                building a strong LinkedIn profile as well as other activities
                critical in identifying your new mission.{" "}
              </p>
            </div>
          ) : activeTab == "Talent Acquisition/Recruiting" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">
                Talent Acquisition/Recruiting
              </h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                This service provided by our partners is for those of you
                looking to elevate your game and those that bring a strong sense
                of leadership and adaptability to the civilian workforce. We
                have partners who can help guide you and prepare you for your
                next leadership role.{" "}
              </p>
            </div>
          ) : activeTab == "Entrepreneurship" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Entrepreneurship</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                If working for someone else...We have resources and partners
                available to help support and guide you as you build your own
                company, from concept to business case, understanding areas of
                risk and how to successful raise money.{" "}
              </p>
            </div>
          ) : activeTab == "Mentorship" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Mentorship</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                My360Tribe is comprised of a team of mentors and advisors…We
                have a vast pool of professional mentors and coaches who
                understand your world, the path you walk and bring a wealth of
                experience to the many facets of navigating this next phase of
                your life.{" "}
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

export default Employment;
