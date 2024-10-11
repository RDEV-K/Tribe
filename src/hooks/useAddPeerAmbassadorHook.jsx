import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useAddPeerAmbassadorHook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginResponse, setLoginResponse] = useState();
  let token = localStorage.getItem("token");

  const handleAdPeerAmbassador = (data) => {
    setLoading(true);
    let headers = {
      Authorization: "Bearer " + token,
    };
    axios
      .post("https://task-sk2q.onrender.com/peer-ambassadors/create-peer", data,{headers})
      .then((res) => {
        if (res) {
          console.log(res, "response");
          toast.success("Submitted Successfully");

          setLoading(false);
          navigate("/")
        } else {
          toast.error(res?.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
        toast.error(err?.response?.data?.error || err?.response?.data?.message);
      });
  };

  return {
    handleAdPeerAmbassador,
    loading,
    loginResponse,
  };
};
