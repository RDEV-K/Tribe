import React, { useState } from "react";

import TeamModal from "../../Popups/teamModal";
import Img from '../../assets/aa.jpeg'
const Advisorycard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const divStyle = {
    width: "200px", // Adjust the width as needed
    height: "300px", // Adjust the height as needed
    clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 86%)",
  };

  return (
    <div>
    <div className="bg-black py-4  md:mt-16 mt-8" style={divStyle}>
      <div className="flex justify-center ">
        <div className="text-center w-[185px]">
          {props?.img ? (
            <div class=" bg-transparent">
              <div class="">
                <div class=" flex justify-center">
                  <img className="h-[130px] " src={props.img} alt="line" />
                </div>
                {/* <div class="flip-box-back  cursor-pointer bg-[#000] flex justify-center h-[400px]" onClick={()=>setIsModalOpen(true)}>
                  <div className="rounded  bg-[#000] h-[260px]  pb-2 ">
                    <div className="flex justify-center ">
                      <img className="h-[130px]" src={props.img} alt="line" />
                    </div>
                    <p className="text-[#fff] font-bold text-center">
                      {props.name}
                    </p>
                    <div className="max-w-[200px] ">
                      {" "}
           
                      <p className="text-[#fff] font-semibold text-xs text-center mt-1 line-clamp-3">
                        {" "}
                      
                        {props.description}
                      </p>
                      <span className="text-xs font-semibold hover:font-bold" onClick={()=>setIsModalOpen(true)}>Continue reading...</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          ) : (
            // <i className="fa fa-user text-[84px] text-white"></i>
            <div className="flex justify-center">
            <img src={Img} alt="abc"/>
            </div>
          )}

          <p className="text-white font-bold mt-6">{props.name}</p>
          <p className="text-white mt-1 ">{props.designation}</p>
          <p className="text-[#5BF0F5] text-xs mt-1">{props.experience}</p>
        </div>
      </div>
   
    </div>
      {isModalOpen &&  <TeamModal isOpen={isModalOpen} props={props} setIsModalOpen={setIsModalOpen}/> }
      </div>
  );
};

export default Advisorycard;
