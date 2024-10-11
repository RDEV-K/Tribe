import React, { useContext, useState } from "react";
import Img from "../../assets/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import PicsModal from "../../Popups/picsModal";
import Aboutus from "../../Popups/Aboutus";
import { AuthContext } from "../../pages/Authentication/authecontext";
import { toast } from "react-toastify";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { get } from "react-hook-form";



const Header = ({ handleClick, isModalOpen, setIsModalOpen }) => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const gradient = "linear-gradient(to bottom, #ffffff, #b9b9b9, #777777, #3b3b3b, #000000)";

  // const [isNavOpen, setIsNavOpen] = useState(false);
  // const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null);
  // const [involvedMenuAnchorEl, setInvolvedMenuAnchorEl] = useState(null);

  // const handleViewStatus = () => {
  //   navigate("/viewstatus");
  //   setUserMenuAnchorEl(null);
  // };

  // const handleUserMenuClick = (event) => {
  //   setUserMenuAnchorEl(event.currentTarget);
  // };

  // const handleUserMenuClose = () => {
  //   setUserMenuAnchorEl(null);
  // };

  // const handleInvolvedMenuClick = (event) => {
  //   setInvolvedMenuAnchorEl(event.currentTarget);
  // };

  // const handleInvolvedMenuClose = () => {
  //   setInvolvedMenuAnchorEl(null);
  // };



  // const img4 = {
  //   heading: " Service Partners",
  //   text:
  //     "We are always looking to build new partnerships that can support transitioning warriors. Please click here if you would like to partner with My360Tribe or to learn more",
  // };

  // const img2 = {
  //   heading: "Concierge",
  //   text:
  //     "Are you passionate about making a difference in the life of a transitioning Operator?  Are you an Operator who has already transitioned and wants to give back to your Community?  Apply here to be a Concierge.",
  // };

  // const img1 = {
  //   heading: "Operators",
  //   text:
  //     "We are dedicated to serving those U.S. Special Operations members that were assessed, selected, trained, qualified, and served honorably as Operators at any of the U.S. Special Operations Commands, specifically, the U.S. Army Special Operations Command, U.S. Air Force Special Operations Command, U.S. Marine Forces Special Operations Command, Naval Special Warfare Command, and Joint Special Operations Command",
  // };

  // const img3 = {
  //   heading: "Peer Ambassador",
  //   text:
  //     "Are you a SOF Operator who has been out of the military for more than a year and want to support a newly transitioning Operator?",
  // };

  // if (auth) {
  //   const photo = localStorage.getItem("photo");
  //   var securePhotoUrl = photo?.replace("http://", "https://");
  // }
  // const toggleNav = () => {
  //   setIsNavOpen((prev) => !prev); // Toggle the state to open/close menu
  // };
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Successfully Logged Out!");
    window.location.reload();
  };

  const handleOptionClick = (option) => {
    if (option === "Concierge") {
      setIsModalOpen((st) => ({
        ...st,
        mod1: false,
        mod2: true,
        mod3: false,
        mod4: false,
      }));
    } else if (option === "Peer Ambassador") {
      setIsModalOpen((st) => ({
        ...st,
        mod1: false,
        mod2: false,
        mod3: true,
        mod4: false,
      }));
    } else {
      setIsModalOpen((st) => ({
        ...st,
        mod1: false,
        mod2: false,
        mod3: false,
        mod4: true,
      }));
    }
  };
  const pages = ['Home','Get Involved','About Us','Donate'];
  const menuPages = ['Home', 'Concierge', 'Peer Ambassador', 'Service Partners', 'About Us', 'Donate'];
  const getInvolved = ['Concierge','Peer Ambassador', 'Service Partners'];
  const settings = ['View Status', 'Logout'];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElInvolved, setAnchorElInvolved] = useState(null);

  const handlePageNavigation = (page) => {
    if(page === 'Donate') {
      window.location.href = "https://merchant.reverepayments.dev/forms/35SqPodk7aSXSW6tE3N9-ToxPhV_kGW1sTEVX3iM3X8="
      return ;
    }
    let pageRoute = '';
    switch(page) {
      case 'About Us': pageRoute = '/aboutus'; break;
      case 'View Status': pageRoute = '/viewstatus'; break;
      case 'signIn': pageRoute = '/signin'; break;
      default: pageRoute = '';
    };
    navigate(pageRoute)
  };  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenInvolved = (event) => {
    setAnchorElInvolved(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseInvolvedMenu = () => {
    setAnchorElInvolved(null);
  };

  return (
    <div className="relative z-[999]">
      <AppBar position="fixed" style={{ background: gradient, opacity: '0.85' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* IMG */}
            <Box 
              component="img"
              src={Img} // Replace with your image source
              alt="logo"
              sx={{
                display: { xs: 'none', md: 'block' }, // Adjust display properties
                height: '70px', // Set height as needed
                py: 1, // Add vertical padding
                cursor: 'pointer', // Change cursor to pointer
              }}
              onClick={() => navigate("/")} // Navigate on click
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 4,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 500,
                letterSpacing: '.15rem',
                color: 'inherit',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              onClick={() => navigate("/")}
            >
              360Tribe
            </Typography>
            {/* xs navbar */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {menuPages.map((page) => (
                  <MenuItem 
                    key={page} 
                    onClick={() => {
                      if(
                        page === 'Home' || 
                        page === 'About Us' || 
                        page === 'Donate' ||
                        page === 'View Status'
                      ) {
                        handlePageNavigation(page);
                      } else {
                        handleOptionClick(page);
                      }
                      handleCloseNavMenu();
                    }}
                    sx={{
                      textAlign: 'center',
                      borderBottom: page === 'Home' ? '2px dotted black' : 'none', // Bottom dotted border for 'Home'
                      borderTop: page === 'About Us' ? '2px dotted black' : 'none',  // Top dotted border for 'About Us'
                    }}
                  >
                    <Typography sx={{ textAlign: 'center' }}>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* md IMG */}
            <Box 
                component="img"
                src={Img} // Replace with your image source
                alt="logo"
                sx={{
                  display: { xs: 'block', md: 'none' }, // Adjust display properties
                  height: '70px', // Set height as needed
                  py: 1, // Add vertical padding
                  cursor: 'pointer', // Change cursor to pointer
                }}
                onClick={() => navigate("/")} // Navigate on click
            />
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 4,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 500,
                letterSpacing: '.15rem',
                color: 'inherit',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              onClick={() => navigate("/")}
            >
              360Tribe
            </Typography>
            {/* md navbar */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={(event) => {
                    if(page === 'Get Involved') {                   
                      handleOpenInvolved(event);
                    } else {
                      handlePageNavigation(page); 
                    }
                  }}
                  sx={{ my: 2, mx:1, color: 'white', display: 'flex', cursor: 'pointer' }}
                >
                  {page === 'Get Involved' ? (<>
                    <Typography>{page}</Typography>
                    <ArrowDropDownIcon sx={{ ml: 1 }} /> {/* Dropdown arrow icon */}
                  </>) : (<><Typography>{page}</Typography></>)}
                </Button>
              ))}
            </Box>
            <Menu
              sx={{
                mt: '45px',
                '& .MuiPaper-root': {
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Soft shadow effect
                  transition: 'transform 0.3s ease-in-out', // Smooth transition effect
                  transform: 'scale(1)', // Default transform
                  '&:hover': {
                    transform: 'scale(1.05)', // Slight zoom-in effect on hover
                  }
                }
              }}
              id="menu-appbar"
              anchorEl={anchorElInvolved}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElInvolved)}
              onClose={handleCloseInvolvedMenu}
            >
              {getInvolved.map((involved) => (
                <MenuItem 
                  key={involved} 
                  onClick={() => {
                    handleOptionClick(involved);
                    handleCloseInvolvedMenu(); 
                  }}
                  sx={{
                    backgroundColor: '#2c2c2c', // Darker background for each menu item
                    color: 'white', // White text color
                    fontSize: '16px', // Larger font size
                    '&:hover': {
                      backgroundColor: '#3a3a3a', // Slightly lighter background on hover
                    },
                    borderBottom: '1px solid #444', // Split lines between items
                    '&:last-child': {
                      borderBottom: 'none', // Remove border from the last item
                    }
                  }}
                >
                  <Typography sx={{ textAlign: 'center' }}>{involved}</Typography>
                </MenuItem>
              ))}
            </Menu>
            {/* User Menu */}
            {auth ? (
              <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem 
                    key={setting} 
                    onClick={() => {
                      if(setting === 'Logout') {
                        handleLogout();
                      } else {
                        handlePageNavigation(setting);
                      }
                      handleCloseUserMenu();
                    }}
                  >
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            ) : (
              <Button
                onClick={() => {handlePageNavigation('signIn');}}
                sx = {{
                  color: 'white'
                }}
              >
                Sign In
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
