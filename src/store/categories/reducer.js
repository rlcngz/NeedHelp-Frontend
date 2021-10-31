import { FETCH_CATEGORIES_SUCCESS } from "./actions";

const initialState = [];
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return [...action.payload];

    default:
      return state;
  }
}
