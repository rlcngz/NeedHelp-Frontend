import {
  FETCH_SPACES_SUCCESS,
  FETCH_SPACEDETAILS_SUCCESS,
  COMMENT_POST_SUCCESS,
} from "./actions";

const initialState = {
  lists: [],
  select: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SPACES_SUCCESS:
      return {
        ...state,
        lists: action.payload,
      };
    case FETCH_SPACEDETAILS_SUCCESS:
      return {
        ...state,
        select: { ...action.payload },
      };
    case COMMENT_POST_SUCCESS:
      return {
        ...state,
        select: {
          ...state.select,
          reviews: [action.payload, ...state.select.reviews],
        },
      };
    default:
      return state;
  }
}
