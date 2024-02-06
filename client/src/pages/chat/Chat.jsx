import React, { useEffect, useState } from "react";
import "./Chat.css";
import LogoSearch from "../../components/logoSearch/LogoSearch";
import { useSelector } from "react-redux";
import { userChats } from "../../api/ChatRequest";
import Conversation from "../../components/conversation/Conversation";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user]);

  return (
    <div className="Chat">
      <div className="Left-side-chat">
        <LogoSearch />
        <h2>Chats</h2>
        <div className="Chat-list">
          {chats.map((chat) => {
            return (
              <div onClick={() => setCurrentChat(chat)}>
                <Conversation data={chat} currentUserId={user._id} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          <div className="navIcons">
            <Link to="../home">
              <img src={Home} alt="" />
            </Link>

            <UilSetting />
            <img src={Noti} alt="" />
            <Link to="../chat">
              <img src={Comment} alt="" />
            </Link>

            {/* chat body */}
            {/* <ChatBox chat={currentChat} currentUser = {user._id} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
