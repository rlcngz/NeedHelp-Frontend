import { FETCH_SPACES_SUCCESS, FETCH_SPACEDETAILS_SUCCESS } from "./actions";

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
    default:
      return state;
  }
}
