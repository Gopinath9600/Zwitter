import React from "react";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="" />
      </Link>
      <UilSetting />
      <img src={Noti} alt="" />
      <Link to="../chat">
        <FontAwesomeIcon
          icon={faMessage}
          style={{
            width: "1.5rem",
            height: "1.5rem",
            color: "#ff8a00",
          }}
        />
      </Link>
    </div>
  );
};

export default NavIcons;
