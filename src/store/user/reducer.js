import {
  LOG_OUT,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  COMMENT_POST_SUCCESS,
  ADD_IMAGE_SUCCESS,
} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  firstName: null,
  lastName: null,
  email: null,
  isService: null,
  space: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case COMMENT_POST_SUCCESS:
      return { ...state, ...action.payload };

    case ADD_IMAGE_SUCCESS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
