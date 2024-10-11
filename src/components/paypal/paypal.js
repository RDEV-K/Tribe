import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = () => {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "0.01", // Replace with the amount to charge
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then((details) => {
          alert(`Transaction completed by ${details.payer.name.given_name}`);
          // Handle successful transaction here
        });
      }}
    />
  );
};

export default Paypal;
