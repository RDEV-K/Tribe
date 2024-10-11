import React, { useState } from "react";
import Img2 from "../../assets/1 (1).png";
import Img from "../../assets/screen.png";
import Img4 from "../../assets/Group10000062671.png";
import Img5 from '../../assets/ab.webp'
import Img6 from '../../assets/abc.webp'
import Tooltip from '@mui/material/Tooltip'
import Modal from "../../Popups/Modal";
import { useNavigate } from "react-router-dom";
const Homepagesec3 = () => {
  const navigate = useNavigate();
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const hoverStyle = {
    transform: "scale(1.1) rotate(3deg)", // Scaling and rotating
    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.5)", // Deep shadow for stand-out effect
    transition: "transform 0.5s ease, box-shadow 0.5s ease", // Smooth animation
  };

  const normalStyle = {
    transition: "transform 0.5s ease, box-shadow 0.5s ease", // Smooth transition back to normal
  };
  return (
    <div className="bg-[#1a2242] pb-[194px] md:bg-cover bg-contain" id="targetDiv2">
      <div className="flex justify-center">
        <div className="container max-w-[1200px] mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 px-4 md:px-0 gap-6">
            <div className="column1">
              <div className="flex justify-center mt-16">
                <h1 className="border-b border-[#d9d9d9] text-white border-b-4 text-center font-bold text-5xl">
                  What We Do
                </h1>
              </div>
              <div className="flex gap-12 mt-32 justify-center md:flex-row flex-col items-center">
                <Tooltip sx={{ width: 200+'px' }} title="What sets us apart is our Concierge-level support and extensive, confidential Peer Ambassador network of Operators helping Operators by providing support and guidance to you as a member of My360Tribe..." placement="bottom">
                  <button
                    className="border-[#D9D9D9] border hover:border-2 rounded-xl font-bold bg-[#192242] text-white w-[200px] py-4"
                    onClick={() => navigate("/peeradvocacy")}
                  >
                    <i className="fa fa-bullhorn mr-2 text-[26px]" aria-hidden="true"></i>
                    Peer Advocacy
                  </button>
                </Tooltip>
                <Tooltip sx={{ width: 200+'px' }} title="Transition services and referral to our strongest service partners to guide you and assist with a successful transition even years after you have separated." placement="bottom">
                  <div className="has-tooltip">
                    
                    <button
                      className="border-[#D9D9D9] hover:border-2 border rounded-xl font-bold bg-[#192242] text-white w-[200px] py-4"
                      onClick={() => navigate("/transition")}
                    >
                      <i className="fa fa-exchange mr-2 text-[26px]" aria-hidden="true"></i>
                      Transition
                    </button>
                  </div>
                </Tooltip>
              </div>
              <div className="flex gap-12 mt-32 justify-center md:flex-row flex-col items-center">
                <Tooltip sx={{ width: 200+'px' }} title="At My360Tribe, we are committed to your health and well-being. Providing referrals and services to accomplish 360-degree warrior care is our mission." placement="bottom">
                  <button
                    className="border-[#D9D9D9] border hover:border-2 rounded-xl font-bold bg-[#192242] text-white w-[200px] py-4"
                    onClick={() => navigate("/peeradvocacy")}
                  >
                    <i className="fa fa-bullhorn mr-2 text-[26px]" aria-hidden="true"></i>
                    Health
                  </button>
                </Tooltip>
                <Tooltip sx={{ width: 200+'px' }} title="My360Tribe has established relationships with service organizations, corporations and businesses to help you expand your network, mentoring opportunities, job services, and more." placement="bottom">
                  <div className="has-tooltip">
                    
                    <button
                      className="border-[#D9D9D9] hover:border-2 border rounded-xl font-bold bg-[#192242] text-white w-[200px] py-4"
                      onClick={() => navigate("/transition")}
                    >
                      <i className="fa fa-exchange mr-2 text-[26px]" aria-hidden="true"></i>
                      Employment
                    </button>
                  </div>
                </Tooltip>
              </div>
            </div>

            {/* Image Column */}
            <div className="column2 mt-16 flex justify-center">
              <div className="">
                <img
                  className="md:ml-24 ml-[80px] ml-0 w-[250px] h-[250px] md:w-[350px] md:h-[350px] border-2 rounded-xl"
                  src={Img5}
                  alt="army"
                  style={isHovered1 ? hoverStyle : normalStyle}
                  onMouseEnter={() => setIsHovered1(true)}
                  onMouseLeave={() => setIsHovered1(false)}
                />
                <img
                  className="mt-[-70px] md:ml-0 ml-[4px] w-[250px] h-[250px] md:w-[350px] md:h-[350px] border-2 rounded-xl"
                  src={Img6}
                  alt="girl"
                  style={isHovered2 ? hoverStyle : normalStyle}
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepagesec3;
