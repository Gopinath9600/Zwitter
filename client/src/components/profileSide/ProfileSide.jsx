import React from "react";
import LogoSearch from "../logoSearch/LogoSearch.jsx";
import "./ProfileSide.css";
import ProfileCard from "../profileCard/ProfileCard";
import FollowersCard from "../followersCard/FollowersCard";

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard location="home" />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
