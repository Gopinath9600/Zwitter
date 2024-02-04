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
