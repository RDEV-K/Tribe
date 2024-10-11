import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export const UseViewStatus = () => {
  const [viewStatus, setViewStatus] = useState();
  const [loading, setLoading] = useState();
  const [info, setInfo] = useState();
  const [formId, setFormId] = useState();
  const token = localStorage.getItem("token");
  const [data,setData]=useState()
  const getStatus = (role) => {
    setLoading(true);
    let headers = {
      Authorization: "Bearer " + token,
    };

    let apiUrl = "";

    switch (role) {
      case "OPERATOR":
        apiUrl =
          "https://task-sk2q.onrender.com/operators/operator-form-status";
        break;
      case "CONCIERGE":
        apiUrl =
          "https://task-sk2q.onrender.com/concierge/concierge-form-status";
        break;
      case "PEER_AMBASSADOR":
        apiUrl =
          "https://task-sk2q.onrender.com/peer-ambassadors/peer-form-status";
        break;
      case "SERVICE_PARTNER":
        apiUrl =
          "https://task-sk2q.onrender.com/service-partners/service-form-status";
        break;
      default:
        toast.error("Invalid role");
        setLoading(false);
        return;
    }

    axios
      .get(apiUrl, { headers })
      .then((res) => {
        console.log(res, "response123");
        if (res?.status === 200) {
          setViewStatus(res?.data?.data);
          setLoading(false);
        } else {
          // toast.error(res?.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
      });
  };

  const handleGetStatusInfo = async (id) => {
    setLoading(true);
    const headers = {
      Authorization: "Bearer " + token,
    };

    const urls = [
      `https://task-sk2q.onrender.com/operators/signed-to/${id}`,
      `https://task-sk2q.onrender.com/peer-ambassadors/signed-to/${id}`,
      `https://task-sk2q.onrender.com/service-partners/signed-to/${id}`,
    ];

    try {
      for (const url of urls) {
        const res = await axios.get(url, { headers });
        console.log(res, "response from", url);
        if (res?.data?.status === 200 && res?.data?.data) {
          setInfo(res.data.data); // Set the response data into state
          break; // Exit loop once data is found
        }
      }
    } catch (err) {
      console.log("err", err);
      // toast.error(err?.response?.data?.error);
    } finally {
      setLoading(false);
    }
  };

  const handleGetFormid = async (role) => {
    setLoading(true);  
    const headers = {
      Authorization: "Bearer " + token,
    };

    let url;
  
    if (role === "CONCIERGE") {
      url = "https://task-sk2q.onrender.com/concierge/get-concierge";
    } else if (role === "PEER_AMBASSADOR") {
      url = "https://task-sk2q.onrender.com/peer-ambassadors/get-peer";
    }else {
      url= "https://task-sk2q.onrender.com/service-partners/get-service"
    }
  
    if (url) {
      try {
        const res = await axios.get(url,{headers});
        setFormId(res.data.data);  
      } catch (error) {
        console.error("Error fetching form ID:", error);
      } finally {
        setLoading(false);
      }
    } else {
      console.warn("Invalid role provided");
      setLoading(false);
    }
  };
  const handleGetDataforPeerAndConciegre = async (id) => {
    setLoading(true);  
    let role=localStorage.getItem('role')
    const headers = {
      Authorization: "Bearer " + token,
    };

    let url;
  
    if (role === "CONCIERGE") {
      url = `https://task-sk2q.onrender.com/concierge/get-signed-operator/${id}`;
    } else if (role === "PEER_AMBASSADOR") {
      url = `https://task-sk2q.onrender.com/peer-ambassadors/get-signed-operator/${id}`;
    }else {
      url=`https://task-sk2q.onrender.com/service-partners/get-signed-operator/${id}`
    }
  
    if (url) {
      try {
        const res = await axios.get(url,{headers});
        setData(res.data);  
      } catch (error) {
        console.error("Error fetching form ID:", error);
      } finally {
        setLoading(false);
      }
    } else {
      console.warn("Invalid role provided");
      setLoading(false);
    }
  };
  return {
    info,
    handleGetStatusInfo,
    loading,
    getStatus,
    viewStatus,
    handleGetFormid,
    formId,
    data,
    handleGetDataforPeerAndConciegre
  };
};
