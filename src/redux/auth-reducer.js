import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});
export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, login, email, true));
    }
  });
};
export const login =
  (email, password, rememberMe, setStatus, setFieldValue, setSubmitting) =>
  (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      let resultCode = response.data.resultCode;

      if (resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        let textError = `resultCode: ${resultCode} - ${response.data.messages.join()}`;

        setStatus(textError);
        //setFieldValue("general", textError)
        setSubmitting(false);
      }
    });
  };

export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
