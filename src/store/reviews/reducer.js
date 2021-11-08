import { FETCH_REVIEWS_SUCCESS, FETCH_REVIEWDETAILS_SUCCESS } from "./actions";

const initialState = {
  lists: [],
  select: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REVIEWS_SUCCESS:
      return {
        ...state,
        lists: action.payload,
      };
    case FETCH_REVIEWDETAILS_SUCCESS:
      return {
        ...state,
        select: { ...action.payload },
      };
    default:
      return state;
  }
}
