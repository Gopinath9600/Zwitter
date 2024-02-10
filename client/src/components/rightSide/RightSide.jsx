import React, { useState } from "react";
import "./RightSide.css";
import TrendCard from "../trendCard/TrendCard";
import ShareModal from "../Modals/ShareModal";
import NavIcons from "../navIcons/NavIcons";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
      <NavIcons />
      {/* <div className="navIcons">
        <Link to="../home">
          <img src={Home} alt="" />
        </Link>

        <UilSetting />
        <img src={Noti} alt="" />
        <Link to="../chat">
          <img src={Comment} alt="" />
        </Link>
      </div> */}

      <TrendCard />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
