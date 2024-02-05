import React, { useState, useEffect } from "react";
// import { Followers } from "../../Data/FollowersData.js";
import "./FollowersCard.css";
import User from "../user/User.jsx";
import { useSelector } from "react-redux";
import { getAllUser } from "../../api/UserRequest.js";

const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
      console.log(data);
    };
    fetchPersons();
  }, []);
  return (
    <div className="FollowersCard">
      <h3>People you may know</h3>
      {persons.map((person, id) => {
        if (person._id !== user._id) {
          return <User person={person} id={id} />;
        }
      })}
    </div>
  );
};

export default FollowersCard;

// import React, { useState, useEffect } from "react";
// import { Followers } from "../../Data/FollowersData.js";
// import "./FollowersCard.css";

// const FollowersCard = () => {
//   return (
//     <div className="FollowersCard">
//       <h3>People you may know</h3>

//       {Followers.map((follower, id) => {
//         return (
//           <div className="follower">
//             <div>
//               <img src="follower.img" alt="" className="followerImg" />
//               <div className="name">
//                 <span>{follower.name}</span>
//                 <span>@{follower.username}</span>
//               </div>
//             </div>
//             <button className="button fc-button">Follow</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default FollowersCard;
