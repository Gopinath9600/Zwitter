import * as AuthApi from "../api/AuthRequest.js";

export const logIn = (formData) => async (dispatch) => {
  //async call to redux thunk

  dispatch({ type: "AUTH_START" }); //it is necessary for interactiong with the redux store as with this we are telling  reducer that authentication has started
  //interactiong with the api which will call an endpoint to our server for login
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
