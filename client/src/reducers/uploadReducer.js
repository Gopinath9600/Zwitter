const postReducer = (
  state = { posts: [], loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, error: false, uploading: true };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        error: false,
        uploading: false,
      };
    case "UPLOAD_FAIL":
      return { ...state, error: true, uploading: false };
    ////
    case "LIKE_POST":
      const { postId, userId } = action;
      const updatedPosts = state.posts.map((post) => {
        if (post._id === postId) {
          // Toggle the like based on userId
          const updatedLikes = post.likes.includes(userId)
            ? post.likes.filter((likeUserId) => likeUserId !== userId)
            : [...post.likes, userId];

          // Return the updated post with new likes
          return { ...post, likes: updatedLikes };
        }
        return post;
      });

      return {
        ...state,
        posts: updatedPosts,
      };
    default:
      return state;
  }
};

export default postReducer;
