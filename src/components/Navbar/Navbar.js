import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo-whitw.png";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = sessionStorage.getItem("token");
  function menuHandler() {
    console.log("click");
    console.log(isMenuOpen);
    setIsMenuOpen((state) => !state);
  }

  const [scrollPosition, setScrollPosition] = useState(0);
  const loginButtonHandler = () => {
    if (token) {
      sessionStorage.removeItem("token");
    } else {
      sessionStorage.removeItem("token");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      console.log(window.screenX);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrollPosition > 400 ? "navbar-fill" : ""}`}>
      <a href="/">
        <img src={Logo} height={70} width={90} alt=""></img>
      </a>
      <ul className={`nav-menu ${isMenuOpen ? "menu-show" : ""}`}>
        <li className="cursor-pointer menu-item">
          <a href={"#about"}>About</a>
        </li>
        <li className="cursor-pointer menu-item">
          <a href={"#domain"}>Domains</a>
        </li>
        <li className="cursor-pointer">
          <a href={"#prize"}>Prizes</a>
        </li>
        <li className="cursor-pointer menu-item">
          <a href={"#faq"}>FAQs</a>
        </li>
        <li className="cursor-pointer menu-item">
          <a href={"#contact"}>Contact Us</a>
        </li>
        <li className="cursor-pointer menu-item">
          <a href={"/register"} onClick={loginButtonHandler}>
            {token ? "Logout" : "Register Now"}
          </a>
        </li>

        {!isMenuOpen ? null : (
          <CloseIcon
            onClick={menuHandler}
            fontSize="large"
            color="primary"
          ></CloseIcon>
        )}
      </ul>
      {!isMenuOpen ? (
        <MenuIcon onClick={menuHandler} fontSize="large"></MenuIcon>
      ) : null}
    </nav>
  );
};

export default Navbar;
