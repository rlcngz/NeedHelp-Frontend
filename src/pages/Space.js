import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpace } from "../store/spaces/actions";
import { selectSpaceDetails } from "../store/spaces/selectors";
import { selectUser } from "../store/user/selectors";
// import { fetchReview, fetchReviews } from "../store/reviews/actions";
// import { selectReview, selectAllReviews } from "../store/reviews/selectors";
// import CommentBox from "../components/CommentBox";
import Loading from "../components/Loading";
// import ContactUs from "../components/ContactUs";
import CommentForm from "../components/CommentForm";

function Space() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const space = useSelector(selectSpaceDetails);
  const { token } = useSelector(selectUser);

  // const review = useSelector(selectReview);
  // const reviews = useSelector(selectAllReviews);
  // console.log("any space", space);
  // console.log("any review", reviews);
  // console.log("any review", reviews);

  // console.log("anything here?", userSpace);

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
      {token ? <button>Contact Us</button> : null}
      <button>Book</button>
      <br />
      <CommentForm /> <br />
      {/* <ContactUs /> */}
      <h5>Comments</h5>
      {space.reviews.map((rev) => (
        <ul key={rev.id}>
          <li>
            {rev.firstName}-{rev.comment}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Space;
