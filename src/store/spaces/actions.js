// import axios from "axios";
// import { appDoneLoading, appLoading } from "../appState/actions";
// import { apiUrl } from "../../config/constants";

// export const FETCH_SPACES_SUCCESS = "FETCH_SPACES_SUCCESS";
// export const FETCH_SPACEDETAILS_SUCCESS = "FETCH_DETAILS_SUCCESS";

// export const fetchSpacesSuccess = (spaces) => ({
//   type: FETCH_SPACES_SUCCESS,
//   payload: spaces,
// });

// export const fetchSpaceDetails = (detail) => ({
//   type: FETCH_SPACEDETAILS_SUCCESS,
//   payload: detail,
// });

// export const fetchSpaces = () => {
//   return async (dispatch, getState) => {
//     dispatch(appLoading());
//     try {
//       const res = await axios.get(`${apiUrl}/spaces`);

//       // console.log("any response", res.data);

//       dispatch(fetchSpacesSuccess(res.data.spaces));
//       dispatch(appDoneLoading());
//     } catch (e) {
//       console.log(e.message);
//     }
//   };
// };

// export const fetchSpace = (id) => async (dispatch, getState) => {
//   try {
//     const res = await axios.get(`${apiUrl}/spaces/${id}`);
//     console.log("respond is here", res.data);
//     dispatch(fetchSpaceDetails(res.data));
//   } catch (e) {
//     console.log(e.message);
//   }
// };
