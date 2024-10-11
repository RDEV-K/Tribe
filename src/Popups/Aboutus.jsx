import React from "react";
import Img from "../assets/Card12.png";
const Aboutus = ({ isOpen, setIsModalOpen ,onCancel}) => {
  if (
    !isOpen.mod1 &&
    !isOpen.mod2 &&
    !isOpen.mod3 &&
    !isOpen.mod4 &&
    !isOpen.mod5
  ) {
    return null;
  }
  
  return (
    <div
      className="relative z-10 top-[5%]"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-black text-white opacity-80 "></div>

      <div className="fixed inset-0 z-10 mt-16">
        <div className="flex h-[100vh] items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
          <div className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all md:my-32 my-2 sm:my-8 max-w-[900px] bg-[#15214c] ">
            <div
              className="h-[380px] "
              //   style={{ backgroundImage: `url(${Img})` }}
            >
              <div className="flex justify-end p-2">
                <i
                  className="fa fa-close text-white hover:font-bold cursor-pointer"
                  onClick={onCancel}
                ></i>
              </div>
              <div className="flex justify-center p-5 text-white ">
                <div>
                  <h1 className="text-[20px] font-bold mt-4 text-center">Our Mission</h1>
                  <p className="font-thin text-center">
                  Dedicated to offering peer-to-peer and concierge-level
                  support, My 360 Tribe ensures U.S. Special Operations
                  ForcesSOF Operators are well-prepared, empowered, and
                  supported by those who understand the emotional and
                  intellectual challenges of transition. Our mission is to
                  bridge the gap between military service and civilian success,
                  addressing the challenging aspects of transition while
                  honoring their service, exceptional skills and experience. We
                  are here to ensure these Operators have access to the services
                  that set them up for success during their transition and
                  beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
