import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpace } from "../store/spaces/actions";
import { selectSpaceDetails } from "../store/spaces/selectors";
// import { fetchReview, fetchReviews } from "../store/reviews/actions";
// import { selectReview, selectAllReviews } from "../store/reviews/selectors";
import CommentBox from "../components/CommentBox";
import Loading from "../components/Loading";
import ContactUs from "../components/ContactUs";

function Space() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const space = useSelector(selectSpaceDetails);
  // const review = useSelector(selectReview);
  // const reviews = useSelector(selectAllReviews);
  // console.log("any space", space);
  // console.log("any review", review);

  useEffect(() => {
    dispatch(fetchSpace(id));
  }, [dispatch, id]);

  // useEffect(() => {
  //   dispatch(fetchReview(id));
  // }, [dispatch, id]);
  // useEffect(() => {
  //   dispatch(fetchReviews());
  // }, [dispatch]);
  if (!space) return <Loading />;
  return (
    <div>
      <h1>{space.title}</h1>
      <img src={space.logoUrl} alt="" width="50%" />
      <p>About Us: {space.description}</p>
      <p>Price: {space.price} € per hour</p>
      <button>Contact Us</button>
      <ContactUs />
      <button>Book</button>
      <br />
      <CommentBox /> <br />
      <h5>Reviews</h5>
    </div>
  );
}

export default Space;
