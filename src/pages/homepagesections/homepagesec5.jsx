import React from "react";
import Img from "../../assets/WW (1).webp";
import Img2 from "../../assets/WW (2).webp";
import Img4 from "../../assets/Group1000006267.png";
const Homepagesec5 = () => {
  return (
    <div
      className=" bg-[#d1d8f5] pb-[140px] md:bg-cover bg-contain "
      id="targetDiv4"
      style={{ backgroundImage: `url(${Img4})` }}
    >
      <div className="flex justify-center">
        <div className="container max-w-[1200px] mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 px-4 md:px-0 gap-12 items-center">
            <div className="column1">
              <div className="flex justify-center mt-16">
                <h1 className="border-b border-[#0a194e] text-[#0a194e] border-b-4 text-center font-bold text-5xl">
                  Why We Do What We Do
                </h1>
              </div>
              <div className="flex justify-center mt-12">
                <div className="bg-[#1a2242] p-2 border rounded-xl ">
                  
                  <p className="text-[#fff] text-[15px] mt-4 font-[600]">
                    My360Tribe exists to support the transitioning Special
                    Operator during and after their transition out of the
                    military. Our Tribe is unique in that it is comprised of
                    those who have either served in the same capacity or has
                    supported the Special Operations Community for over a decade
                    and understands the challenges that an Operator faces
                    throughout the transition process. With an initial
                    connection to a Concierge and a match to one of our Special
                    Operator Peer Ambassadors, the Operator will have 360
                    support for as long as it's needed.
                  </p>
                </div>
              </div>
            </div>
            <div className="column2 mt-16 flex justify-center">
            <div className="">
                <img
                  className="md:ml-24 ml-[104px] ml-0 w-[250px] h-[250px] md:w-[350px] md:h-[350px] border-2 rounded-xl"
                  src={Img}
                  alt="army"
                />
                <img
                  className="mt-[-150px] md:ml-0 ml-[44px] w-[250px] h-[250px] md:w-[350px] md:h-[350px] border-2 rounded-xl"
                  src={Img2}
                  alt="girl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepagesec5;
