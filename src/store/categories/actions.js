import axios from "axios";
import { appDoneLoading, appLoading } from "../appState/actions";
import { apiUrl } from "../../config/constants";

export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_DETAILS_SUCCESS = "FETCH_DETAILS_SUCCESS";

export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchDetails = (details) => ({
  type: FETCH_DETAILS_SUCCESS,
  payload: details,
});

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const res = await axios.get(`${apiUrl}/categories`);

      // console.log("any response", res.data);

      dispatch(fetchCategoriesSuccess(res.data.categories));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchCategoriesById = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`${apiUrl}/categories/${id}`);
    console.log("respond is here", res.data);
    dispatch(fetchDetails(res.data));
  } catch (e) {
    console.log(e.message);
  }
};
