import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpace } from "../store/spaces/actions";
import { selectSpaceDetails } from "../store/spaces/selectors";
import { selectUser } from "../store/user/selectors";
import Loading from "../components/Loading";
import ContactUs from "../components/ContactUs";
import CommentForm from "../components/CommentForm";
// import Book from "../components/Book";

function Space() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const space = useSelector(selectSpaceDetails);
  const { token } = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchSpace(id));
  }, [dispatch, id]);

  if (!space) return <Loading />;
  return (
    <div>
      <h1>{space.title}</h1>
      <img src={space.logoUrl} alt="" width="50%" />
      <p>About Us: {space.description}</p>
      <p>Price: {space.price} € per hour</p>
      {token ? <ContactUs /> : null}
      {token ? <CommentForm /> : null}
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
