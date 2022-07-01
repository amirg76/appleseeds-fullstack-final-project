import { useRef, useContext } from "react";

import { myContext } from "../Context/mycontext.js";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const { navToggle, setNavToggle } = useContext(myContext);
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setNavToggle(!navToggle);
  };
  const showLinks = () => {
    navRef.current.classList.toggle("responsive_nav");
    setNavToggle(!navToggle);
  };

  return (
    <nav className="header-continer">
      <img className="logo" src="/assets/img/logo3.png" alt=""></img>

      <ul ref={navRef}>
        <li>
          <Link to="/" onClick={showLinks}>
            Main
          </Link>
        </li>
        <li>
          <Link to="/media" onClick={showLinks}>
            Media
          </Link>
        </li>
        <li>
          <Link to="/reviews" onClick={showLinks}>
            Reviews
          </Link>
        </li>
        <button onClick={showNavBar} className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </ul>

      <button onClick={showNavBar} className="nav-btn">
        <FaBars />
      </button>
    </nav>
    // <div>hola kk</div>
  );
};

export default Header;

// <!-- NAV BAR -->

//     <nav class="navbar bg-dark navbar-dark navbar-expand-lg">
//       <div class="container">
//         <img class="logo" src="img/logo.png" alt="" />
//         <a class="navbar-brand" href="">דיגיבנק</a>

//         <button
//           class="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#blue"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div id="blue" class="collapse navbar-collapse">
//           <ul class="navbar-nav ml-auto">
//             <li class="nav-item"><a class="nav-link" href="">Home</a></li>
//             <li class="nav-item"><a class="nav-link" href="">About</a></li>
//             <li class="nav-item"><a class="nav-link" href="">Servics</a></li>
//             <li class="nav-item"><a class="nav-link" href="">Contact Us</a></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//     <!-- END NAV BAR -->
