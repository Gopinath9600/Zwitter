import * as UploadApi from "../api/UploadRequest";
// import { getTimelinePosts } from "./PostAction";

export const uploadImage = (data) => async (dispatch) => {
  try {
    console.log("Image upload Action started");
    await UploadApi.uploadImage(data);
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  console.log("Uploading started");
  try {
    const newPost = { ...data, likes: [] };
    const response = await UploadApi.uploadPost(newPost);
    dispatch({ type: "UPLOAD_SUCCESS", data: response.data });
    // dispatch(getTimelinePosts(data.userId));
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
