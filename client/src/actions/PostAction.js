import * as PostApi from "../api/PostRequest";

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETRIEVING_START" });
  console.log("Timeline fetching started");
  try {
    const { data } = await PostApi.getTimelinePosts(id);
    console.log("timeline fetched");
    dispatch({ type: "RETRIEVING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "RETRIEVING_FAIL " });
    console.log(error);
  }
};

//
export const likePost = (postId, userId) => async (dispatch) => {
  try {
    // Make API call to like the post
    const { data } = await PostApi.likePost(postId, userId);

    // Dispatch an action to update the likes count for the post
    dispatch({ type: "LIKE_POST", postId, userId, data: data });
  } catch (error) {
    console.error("Error liking post:", error);
  }
};
