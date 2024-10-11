import React from "react";
import Img from "../../assets/peer ambassador 2.webp";
import Img1 from "../../assets/Group 1000006062.jpeg";
import Img2 from "../../assets/Group 1000006063.jpg";
import Img3 from "../../assets/rt.webp";
import Img4 from "../../assets/Group10000062671.png";
import Img6 from "../../assets/unnamed.webp";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import PicsModal from "../../Popups/picsModal";

const images = [
  {
    url: Img3,
    title: "Operators",
    heading: "Operators",
    text: "We are dedicated to serving U.S. Special Operations members...",
  },
  {
    url: Img2,
    title: "Concierge",
    heading: "Concierge",
    text: "Are you passionate about making a difference...",
  },
  {
    url: Img,
    title: "Peer Ambassador",
    heading: "Peer Ambassador",
    text: "Are you a SOF Operator who has been out of the military...",
  },
  {
    url: Img1,
    title: "Service Partners",
    heading: "Service Partners",
    text: "We are always looking to build new partnerships...",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 220,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
  },
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.white,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const Homepage = ({ isModalOpen, setIsModalOpen }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="bg-[#070c1f] md:mt-12 mt-0 pb-[65px] md:bg-cover bg-contain relative" // Added relative positioning
    >
      {/* Background overlay div with opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${Img4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5, // Set your desired opacity here
          zIndex: -1, // Ensure it stays behind the content
        }}
      />
      
      <div className="flex justify-center px-4 md:px-0">
        <div className="container max-w-[1400px] md:mt-16 mt-4">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            <div>
              <img className="md:block hidden h-[350px]" src={Img6} alt="abc" />
            </div>
            <div className="flex md:justify-end justify-center">
              <div>
                {/* <h1 className="text-[55px] text-white font-bold">My360Tribe</h1> */}

                <Box
                  component={'p'}
                  sx={{
                    marginTop: {xs: '100px', md: '10px'},
                    color: 'white',
                    fontSize: '55px'
                  }}
                >
                  My360Tribe
                </Box>
                <Box
                  component={'p'}
                  sx={{
                    marginTop: {xs: '30px', md: '10px'},
                    color: 'white',
                    fontSize: '18px'
                  }}
                >
                  Dedicated to offering peer-to-peer and concierge-level support, My 360 Tribe ensures U.S. Special Operations ForcesSOF Operators are well-prepared, empowered, and supported by those who understand the emotional and intellectualchallenges of transition. Our mission is to bridge the gap between military service and civilian success, addressing thechallenging aspects of transition while honoring their service, exceptional skills and experience. We are here to ensure these Operators have access to the services that set them up for success during their transition and beyond.
                </Box>
              </div>
            </div>
          </div>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, mt: 8 }}>
            {images.map((image, index) => (
              <ImageButton
                key={image.title}
                style={{ width: '300px' }}
                sx = {{
                  marginBottom: { xs: '100px' }
                }}
                onClick={() => setIsModalOpen({ mod1: index === 0, mod2: index === 1, mod3: index === 2, mod4: index === 3 })}
              >
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="white" // Set color to white
                  sx={{ position: 'relative', p: 4, pt: 2, pb: 'calc(1 + 6px)' }}
                >
                  {image.title}
                  <img src={image.url} alt={image.title} style={{ display: 'show' }} /> {/* Optional: Keep img tag if needed */}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </ImageButton>
            ))}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
