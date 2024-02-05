import ChatModel from "../Models/ChatModel.js";

export const createChat = async (req, res) => {
  //It creates a new instance of the ChatModel schema with the members array initialized with senderId and receiverId obtained from the request body.
  const newChat = new ChatModel({
    members: [req.body.senderId, req.body.receiverId],
  });

  //interacting with database so use try-catch
  try {
    const result = await newChat.save(); //save method is provided by mongoose
    res.status(200).json(result); //sends a http response with status code 200 along with the result object serialized as JSON
  } catch (error) {
    res.status(500).json(error);
  }
};

export const userChats = async (req, res) => {
  try {
    //It receives the user ID as a parameter from the request parameters (req.params.userId).
    //It uses ChatModel.find() to query the database for chats where the user ID is present in the members array.
    const chat = await ChatModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(chat); //chat may be an array
  } catch (error) {
    res.status(500).json(error);
  }
};

export const findChat = async (req, res) => {
  try {
    //It receives the user IDs (firstId and secondId) as parameters from the request parameters.
    //It uses ChatModel.findOne() to query the database for a chat where both user IDs are present in the members array.
    const chat = await ChatModel.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] }, //chats of members must include firstId and secondId
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};
