import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Homepage from "./pages/homepagesections/container";
import { Route, Routes } from "react-router-dom";
import PeerAdvocacy from "./pages/whatwedotabs/peer-advocacy";
import ScrollToTopOnRouteChange from "./components/scroll";
import Transition from "./pages/whatwedotabs/transition";
import Health from "./pages/whatwedotabs/health";
import Employment from "./pages/whatwedotabs/employment";
import { useState } from "react";
import InTakeForm from "./Popups/operators/inTakeForm";
import ConciergeForm from "./Popups/conceige/conciergeForm";
import Peerambassadorform from "./Popups/peerambassador/peerambassadorform";
import Servicepartners from "./Popups/servicepartners/servicepartners";
import SignUp from "./pages/Authentication/SignUp";
import { AuthProvider } from "./pages/Authentication/authecontext";
import SignIn from "./pages/Authentication/SignIn";
import ViewStatus from "./pages/viewstatus/viewstatus";
import AboutUs from "./pages/aboutUs/aboutUs";
import PicsModal from "./Popups/picsModal";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [isModalOpen, setIsModalOpen] = useState({
    mod1: false,
    mod2: false,
    mod3: false,
    mod4: false,
    mod5: false,
    mod6:false
  });

  console.log(isModalOpen,"OPEN")
  const handleClick = (a) => {
    setTimeout(() => {
      const targetDiv = document.getElementById(`targetDiv${a}`);
      if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const handleCancel = () => {
    // Implement cancel logic here
    console.log("Cancelling...");
    setIsModalOpen(false);
  };
 const img4 = {
    heading: " Service Partners",
    text:
      "We are always looking to build new partnerships that can support transitioning warriors. Please click here if you would like to partner with My360Tribe or to learn more",
  };

  const img2 = {
    heading: "Concierge",
    text:
      "Are you passionate about making a difference in the life of a transitioning Operator?  Are you an Operator who has already transitioned and wants to give back to your Community?  Apply here to be a Concierge.",
  };
  const img1 = {
    heading: "Operators",
    text:
      '"We are dedicated to serving those U.S. Special Operations members that were assessed, selected, trained, qualified, and served honorably as Operators at any of the U.S. Special Operations Commands, specifically, the U.S. Army Special Operations Command, U.S. Air Force Special Operations Command, U.S. Marine Forces Special Operations Command, Naval Special Warfare Command, and Joint Special Operations Command.',
  };
  const img3 = {
    heading: "Peer Ambassador",
    text:
      "Are you a SOF Operator who has been out of the military for more than a year and wants to support a newly transitioning Operator?",
  };
  return (
    <AuthProvider>
      <Header
        handleClick={handleClick}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Homepage
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
            />
          }
        />
        <Route
          exact
          path="/peeradvocacy"
          element={<PeerAdvocacy handleClick={handleClick} />}
        />
        <Route
          exact
          path="/transition"
          element={<Transition handleClick={handleClick} />}
        />
        <Route exact path="/Health" element={<Health handleClick={handleClick} />} />
        <Route exact path="/employment" element={<Employment handleClick={handleClick} />} />
        <Route exact path="/intakeform" element={<InTakeForm />} />
        <Route exact path="/conciergeform" element={<ConciergeForm />} />
        <Route exact path="/peerambassador-form" element={<Peerambassadorform />} />
        <Route exact path="/servicepartner-form" element={<Servicepartners />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/viewstatus" element={<ViewStatus />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer handleClick={handleClick} />

      {/* "Modal" */}
      <PicsModal
            isOpen={isModalOpen}
            onCancel={handleCancel}
            data={
              isModalOpen.mod1
                ? img1
                : isModalOpen.mod2
                ? img2
                : isModalOpen.mod3
                ? img3
                : img4
            }
      />
    </AuthProvider>
  );
}

export default App;
