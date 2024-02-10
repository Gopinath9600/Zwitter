import React, { useEffect, useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { useDispatch, useSelector } from "react-redux";
import { likePost } from "../../actions/PostAction";
// import { likePost } from "../../api/PostRequest";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(null);
  const dispatch = useDispatch();

  // Update state when the 'data' prop changes
  useEffect(() => {
    // Update state if data.likes is defined
    if (data.likes) {
      setLiked(data.likes.includes(user._id));
      setLikes(data.likes.length);
    }
  }, [data, user._id]);

  const handleClick = () => {
    // likePost(data._id, user._id);
    dispatch(likePost(data._id, user._id));
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  return (
    <div className="Post">
      {/* <img src={data.img} alt="" /> */}
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />
      <div className="postReact">
        {/* <img src={data.liked?Heart:NotLike} alt="" /> */}
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
