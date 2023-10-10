import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../img/ruben.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";


export default function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
//   const changeColor = () => {
//     if (window.scrollY >= 100) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };

  // window.addEventListener("scroll", changeColor); // para estirar el navbar cuando se baja

    return(
      <div className={color ? "header header-bg" : "header"}>
 <div className="logo-h1">
          <Link to="/" >
            <img
              className="logoeco"
              src={img}
              alt="EcoEcho"
              width="90"
              height="90"
            ></img>
          </Link>
          <Link to="/" >
          <h1 className="text-nav">gfddd</h1>
          </Link>
          </div>  
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li class="active">
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/casasenalquiler">Casas en alquiler</Link>
        </li>
        <li>
          <Link to="/Servicios">Servicios</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        </ul>
        <div className="hamburguer" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#d6d2d2" }} />
        ) : (
          <FaBars size={30} style={{ color: "#d6d2d2" }} />
        )}
      </div>
      </div>
    );
  }

// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// //import Logo from "../Assets/Logo.jpg";
// import { BsCart2 } from "react-icons/bs";
// import { HiOutlineBars3 } from "react-icons/hi2";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
// import "./Navbar.css";
// import img from "../img/ruben.jpg";

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const menuOptions = [
//     {
//       text: "Home",
//       icon: <HomeIcon />,
//     },
//     {
//       text: "About",
//       icon: <InfoIcon />,
//     },
//     {
//       text: "Testimonials",
//       icon: <CommentRoundedIcon />,
//     },
//     {
//       text: "Contact",
//       icon: <PhoneRoundedIcon />,
//     },
//     // {
//     //   text: "Cart",
//     //   icon: <ShoppingCartRoundedIcon />,
//     // },
//   ];
//   return (
//     <nav className="header">
//       <div className="nav-logo-container">
//         <img  src={img} alt="" />
//       </div>
//       <div className="navbar-links-container">
    
//          <Link to="/">Inicio</Link>
//          <Link to="/casasenalquiler"> Casas en alquiler</Link>
//          <Link to="/Servicios">Servicios</Link>
//          <Link to="/contacto">Contacto</Link>
//         {/* <a href="">
//           <BsCart2 className="navbar-cart-icon" />
//         </a> */}
//         {/* <button className="primary-button">Bookings Now</button> */}
//       </div>
//       <div className="navbar-menu-container">
//         <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
//       </div>
//       <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={() => setOpenMenu(false)}
//           onKeyDown={() => setOpenMenu(false)}
//         >
//           <List>
//             {menuOptions.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//         </Box>
//       </Drawer>
//     </nav>
//   );
// };

// export default Navbar;