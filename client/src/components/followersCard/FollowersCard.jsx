import React, { useState, useEffect } from "react";
import { Followers } from "../../Data/FollowersData.js";
import "./FollowersCard.css";

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>People you may know</h3>

      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img src="follower.img" alt="" className="followerImg" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
