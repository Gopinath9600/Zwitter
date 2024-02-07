const io = require("socket.io")(8800, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let activeUsers = [];

io.on("connection", (socket) => {
  //our socket server is started by subscribing to this connection ie when a user is subscribed to this connection he can use all the functionalities defined in this connection
  // add new User
  socket.on("new-user-add", (newUserId) => {
    //.on is used when we take something from other side as here newUserId sent from react-side
    // if user is not added previously
    if (!activeUsers.some((user) => user.userId === newUserId)) {
      // if the user is not already registered to any of the socket
      activeUsers.push({ userId: newUserId, socketId: socket.id }); //socket always assigns a unique socket id so we need to take care of that
      console.log("New User Connected", activeUsers);
    }
    // send all active users to new user
    io.emit("get-users", activeUsers);
  });

  socket.on("disconnect", () => {
    // remove user from active users
    activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
    console.log("User Disconnected", activeUsers);
    // send all active users to all users
    io.emit("get-users", activeUsers); //.emit is used to send to the other side as here we are sending activeUsers to the react client side
  });

  // send message to a specific user
  socket.on("send-message", (data) => {
    const { receiverId } = data;
    const user = activeUsers.find((user) => user.userId === receiverId);
    console.log("Sending from socket to receiver with id:", receiverId);
    console.log("Data: ", data);
    if (user) {
      io.to(user.socketId).emit("recieve-message", data);
    }
  });
});
