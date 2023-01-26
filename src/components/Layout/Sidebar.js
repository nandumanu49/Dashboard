import React, { useEffect, useState } from "react";
import logo from '../../assets/logo.jpeg';
import { FaRegWindowClose, FaTh, FaThLarge } from "react-icons/fa";
import avatar from '../../assets/avatar.jpg'
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ sendToParent, toChild }) => {
  const url = useLocation().pathname;
  const [location, setLocation] = useState(url);
  const [navActive, setNavActive] = useState(toChild);
  useEffect(() => {
    setLocation(url);
  }, [url]);
  const handleClick = () => {
    setNavActive(!navActive);
    sendToParent(!navActive);
  };
  return (
    <div className="sidebar sidenav">
      <div
        className={`px-3  ${
          navActive
            ? "px-3 justify-content-between"
            : "justify-content-center justify-content-sm-start"
        } ps-sm-3 py-4 d-flex`}
      >
        <img
          src={logo.png}
          alt="Logo"
          className={`logo pe-3 me-auto ${!navActive && "d-none d-sm-block"}`}
        />

        <span
          className="text-white d-sm-none"
          style={{ fontSize: "20px" }}
          onClick={handleClick}
        >
          {navActive ? <FaRegWindowClose /> : <FaTh />}
        </span>
      </div>
      <div
        className={`text-light ${
          navActive ? "ps-3" : "justify-content-center justify-content-sm-start"
        } ps-sm-3 pt-2 pb-4 d-flex align-items-center`}
      >
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img src={avatar.jpg} alt="You" width="100%" />
        </div>
        <div className={`ps-3 ${!navActive && "d-none d-sm-block"}`}>
          <p className="m-0" style={{ fontSize: "15px" }}>
            <small>Joachim Dawns</small>
          </p>
          <p className="m-0" style={{ fontSize: "12px" }}>
            <small>Administrator</small>
          </p>
        </div>
      </div>
      <Link to="/">
        <div
          className={`text-light ${
            navActive
              ? "ps-3"
              : "justify-content-center justify-content-sm-start"
          } ps-sm-3 py-3 d-flex align-items-center div-link ${
            location === "/" && "border-start border-3"
          }`}
        >
          <FaThLarge />
          <span className={`ps-3 ${!navActive && "d-none d-sm-block"}`}>
            Dashboard
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;