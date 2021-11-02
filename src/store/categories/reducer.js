import { FETCH_CATEGORIES_SUCCESS, FETCH_DETAILS_SUCCESS } from "./actions";

const initialState = {
  list: [],
  selected: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        selected: { ...action.payload },
      };
    default:
      return state;
  }
}
