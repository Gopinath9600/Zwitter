import React from "react";
// import Cover from "../../img/cover.jpg";
// import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileCard = ({ location }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);

  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  // const ProfilePage = false;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        {/* <img src={Cover} alt="" /> */}
        <img
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover.jpg"
          }
          alt=""
        />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt=""
        />
      </div>
      <div className="ProfileName">
        <span>
          {user.firstname} {user.lastname}
        </span>
        <span>{user.worksAt ? user.worksAt : ""}</span>
      </div>
      <div className="FollowStatus">
        <hr />
        <div>
          <div className="Follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="Follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="Follow">
                <span>
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link
            to={`/profile/${user._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;

// import React from "react";
// import Cover from "../../img/cover.jpg";
// import Profile from "../../img/profileImg.jpg";
// import "./ProfileCard.css";

// const ProfileCard = ({ location }) => {
//   const profilePage = true;
//   return (
//     <div className="ProfileCard">
//       <div className="ProfileImages">
//         <img src={Cover} alt="" />
//         <img src={Profile} alt="" />
//       </div>

//       <div className="ProfileName">
//         <span>Rosen Mary</span>
//         <span>Senior UI/UX Designer</span>
//       </div>

//       <div className="FollowStatus">
//         <hr />
//         <div>
//           <div className="Follow">
//             <span>1,056</span>
//             <span>Followings</span>
//           </div>
//           <div className="vl" />
//           <div className="Follow">
//             <span>1</span>
//             <span>Followers</span>
//           </div>

//           {profilePage && (
//             <>
//               <div className="vl" />
//               <div className="Follow">
//                 <span>3 </span>
//                 <span>Posts</span>
//               </div>
//             </>
//           )}
//         </div>
//         <hr />
//       </div>

//       {profilePage ? "" : <span>My Profile</span>}
//     </div>
//   );
// };

// export default ProfileCard;
