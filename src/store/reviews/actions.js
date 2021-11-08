import axios from "axios";
import { appDoneLoading, appLoading } from "../appState/actions";
import { apiUrl } from "../../config/constants";

export const FETCH_REVIEWS_SUCCESS = "FETCH_REVIEWS_SUCCESS";
export const FETCH_REVIEWDETAILS_SUCCESS = "FETCH_REVIEWDETAILS_SUCCESS";

export const fetchReviewsSuccess = (reviews) => ({
  type: FETCH_REVIEWS_SUCCESS,
  payload: reviews,
});

export const fetchReviewDetails = (detail) => ({
  type: FETCH_REVIEWDETAILS_SUCCESS,
  payload: detail,
});

export const fetchReviews = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const res = await axios.get(`${apiUrl}/reviews`);

      // console.log("any response", res.data);

      dispatch(fetchReviewsSuccess(res.data.reviews));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchReview = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`${apiUrl}/reviews/${id}`);

    // console.log("respond is here", res.data);

    dispatch(fetchReviewDetails(res.data));
  } catch (e) {
    console.log(e.message);
  }
};
