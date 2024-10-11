import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onDeactivate, onCancel, data }) => {
  const navigate = useNavigate();
  if (!isOpen.mod1 && !isOpen.mod2 && !isOpen.mod3 && !isOpen.mod4) {
    return null;
  }

  return (
    <div className="relative z-[999] top-[5%]" aria-labelledby="modal-title" role="dialog" aria-modal="true">

      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-[999] ">
        <div className="flex md:min-h-full min-h-[80%] items-end justify-center p-4 text-center sm:items-center sm:p-0">

          <div className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all md:my-32 my-2 sm:my-8 sm:w-[20%] sm:max-w-lg md:max-w-[32rem] max-w-[55rem]">
            <div className="bg-[#0C1A4E] px-4 pb-2 pt-5  sm:p-6 sm:pb-4">
              <div className='flex justify-center'>
                <button className='border-[#D9D9D9] hover:border-2 mb-3 border rounded font-bold bg-[#0C1A4E] text-white px-3 py-4'
                >
                  {isOpen.mod1 ? <i class="fa fa-bullhorn mr-2 text-[26px]" aria-hidden="true"></i> :
                    isOpen.mod2 ? <i class="fa fa-exchange  mr-2 text-[26px]" aria-hidden="true"></i> :
                      isOpen.mod3 ? <i class="fa fa-heartbeat mr-2 text-[26px]" aria-hidden="true"></i> :
                        <i class="fa fa-briefcase mr-2 text-[26px]" aria-hidden="true"></i>}

                  {isOpen.mod1 ? 'Peer Advocacy' : isOpen.mod2 ? 'Transition' : isOpen.mod3 ? 'Health' : 'Employment'}
                </button>
              </div>
              <div className="flex justify-center text-white">
                <ul className='text-center font-bold'>
                  {
                    data?.map((item, index) => (
                      <li className='py-2 cursor-pointer hover:font-semibold' key={index} onClick={() => navigate('/dummy', { state: item })}>
                        {item}
                      </li>
                    ))
                  }
                  <li className='py-10'>
                     <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-[#0C1A4E] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300  sm:mt-0 sm:w-auto" onClick={onCancel}>Cancel</button></li>
                </ul>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal