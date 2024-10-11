import React, { useState } from "react";
import Img4 from "../../assets/Group10000062671.png";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Paypal from "../../components/paypal/paypal";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { TransitionGroup } from "react-transition-group";
import Collapse from "@mui/material/Collapse";
import TextField from "@mui/material/TextField";

const Homepagesec7 = () => {
  const buttonGradient =
    "linear-gradient(90.57deg, #0A194E 9.91%, #344DA5 53.29%, #0A194E 91.56%)";
  const CLIENT_ID = "YOUR_CLIENT_ID";
  const initialOptions = {
    clientId: "test",
    currency: "USD",
    intent: "capture",
  };
  const [amount, setAmount] = useState(false);
  const [priceVisible, setPriceVisible] = useState(false);

  const handlePriceEnter = () => {
    setPriceVisible(!priceVisible);
  };

  return (
    <>
      <div
        className="bg-[#1a2242] pb-[44px] md:bg-cover bg-contain"
        id="targetDiv5"
        style={{ backgroundImage: `url(${Img4})` }}
      >
        <div className="flex justify-center">
          <div className="container max-w-[1200px] mt-16">
            <div className="flex justify-center">
              <div>
                <h1 className="border-b border-[#d9d9d9] text-white border-b-4 text-center font-bold md:text-5xl text-2xl">
                  Donation Request
                </h1>
              </div>
            </div>
            <div className="flex justify-center mt-12 ">
              <div className="border rounded-xl pt-8 pb-6 md:w-[500px] w-full px-16 bg-white">
                <div className="flex justify-between items-center text-[#0C1A4C]">
                  <i className="fa fa-angle-left text-[30px] font-bold"></i>
                  <p className="text-[35px]" style={{ fontWeight: "400" }}>
                    {" "}
                    $150
                  </p>
                  <i className="fa fa-angle-right text-[30px] font-bold"></i>
                </div>
                <div className="flex justify-center mt-12 gap-8">
                  <Button
                    variant="contained"
                    sx={{
                      py: 1,
                      px: 8,
                      backgroundColor: "white",
                      color: "grey",
                      borderColor: "gray",
                      border: "1px solid",
                    }}
                  >
                    OneTime
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      py: 1,
                      px: 8,
                      backgroundColor: "#1284AD",
                      color: "white",
                      borderColor: "white",
                      border: "1px solid",
                    }}
                  >
                    Monthly
                  </Button>
                </div>
                <div className="flex items-center">
                  <hr className="w-full border-t border-[#0C1A4C] border-2 my-12" />
                  <p className="px-2 text-[#0C1A4C] font-semibold text-xl">
                    or
                  </p>
                  <hr className="w-full border-t border-[#0C1A4C] border-2 my-12" />
                </div>
                <PayPalScriptProvider options={initialOptions}>
                  <PayPalButtons style={{ layout: "horizontal" }} />
                </PayPalScriptProvider>

                <Button
                  variant="contained"
                  fullWidth
                  onClick={handlePriceEnter}
                  sx={{ lineHeight: "30px" }}
                >
                  Enter Price Manually
                </Button>
                <Collapse in={priceVisible}>
                  <TextField
                    fullWidth
                    label="Price"
                    variant="outlined"
                    sx={{ mt: 3 }}
                  />
                </Collapse>
                {/* {amount && (
                  <input
                    className="rounded pl-2 py-4 w-full border mt-3 border-2"
                    placeholder="e.g $ 150"
                  />
                )} */}
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ lineHeight: "30px", background: buttonGradient, marginTop: '20px' }}
                >
                  Donate Now
                </Button>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepagesec7;
