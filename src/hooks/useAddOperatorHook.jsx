import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useAddOperatorHook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginResponse, setLoginResponse] = useState();
  let token = localStorage.getItem("token");

  const handleAdOperator = (data) => {
    setLoading(true);
    let headers = {
      Authorization: "Bearer " + token,
    };
    axios
      .post("https://task-sk2q.onrender.com/operators/create-operator", data, {
        headers,
      })
      .then((res) => {
        console.log(res, "response");
        if (res?.status == 201) {
          toast.success("Form Submitted Successfully");

          setLoading(false);
          navigate("/");
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
    handleAdOperator,
    loading,
    loginResponse,
  };
};
