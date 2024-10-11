import React, { useState, useContext } from "react";
import Img from "../assets/Card12.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../pages/Authentication/authecontext";
import { Box, Button, Drawer, Typography, Backdrop } from '@mui/material';
import Stack from '@mui/material/Stack';
// import '../css/customStyle.css';

const PicsModal = ({ isOpen, onDeactivate, onCancel, data }) => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  if (!isOpen.mod1 && !isOpen.mod2 && !isOpen.mod3 && !isOpen.mod4) {
    return null;
  }

  const handleClick = () => {
    if (!auth) {
      navigate("/signin");
      onCancel();
    } else {
    if (data?.heading === "Operators") {
      navigate("/intakeform");
    } else if (data?.heading === "Concierge") {
      navigate("/conciergeform");
    }
    else if (data?.heading === "Peer Ambassador") {
      navigate("/peerambassador-form");
    }
    else{
      navigate("/servicepartner-form");
    }
    onCancel();
    }
  };
 

  return (
    <div>
      {/* Drawer for the bottom canvas */}
      <Drawer
        anchor="bottom"
        open={isOpen}
        onClose={onCancel}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: '85%', md: '50%' }, // Responsive width
            height: { xs: '100vh', sm: '70vh', md: '30vh' }, // Responsive height based on screen width
            margin: 'auto',
            transition: 'transform 1s ease', // Smooth transition
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {/* Canvas content */}
        <Box>
          <Typography variant="h6" gutterBottom>
            {data?.heading}
          </Typography>
          <Typography>
            {data?.text}
          </Typography>
        </Box>
        <Stack spacing={2} direction="row" sx={{ marginTop: '20px' }}>
          <Button
            onClick={handleClick}
            variant="outlined"
          >
            {data?.heading === "Operators" ? "Apply" : "Join Us"}
          </Button>
          <Button
            onClick={onCancel}
            variant="outlined"
          >
            Cancel
          </Button>
        </Stack>
      </Drawer>
    </div>
  );
};

export default PicsModal;
    // <div
    //   className="relative z-[999] "
    //   aria-labelledby="modal-title"
    //   role="dialog"
    //   aria-modal="true"
    // >
    //   <div className="fixed inset-0 bg-[#000]  transition-opacity opacity-70"></div>
    //   <div className="fixed inset-0 z-[999] w-screen overflow-y-auto">
    //     <div className="flex md:min-h-full min-h-[80%] items-end justify-center p-4 text-center sm:items-center sm:p-0">
    //       <div className="relative transform overflow-hidden rounded-lg  to-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
    //         <div
    //           className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4 bg-cover opacity-100"
    //           style={{ backgroundImage: `url(${Img})` }}
    //         >
    //           <div className="flex justify-center text-white px-6">
    //             <div>
    //               <h1 className="font-bold text-white text-center text-[25px]">
    //                 {data?.heading}
    //               </h1>
    //               <p className="text-center font-semibold mt-4">{data.text}</p>
    //               <div className="flex justify-center mt-4">
    //                 <button
    //                   className="py-2 px-4 border text-white rounded hover:font-semibold"
    //                   onClick={handleClick}
    //                 >
    //                   {data?.heading === "Operators" ? "Apply" : "Join Us"}
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //           <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 ">
    //             <button
    //               type="button"
    //               className="mt-3 inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold hover:font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300  sm:mt-0 sm:w-auto"
    //               onClick={onCancel}
    //             >
    //               Cancel
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>