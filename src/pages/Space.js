import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpace } from "../store/spaces/actions";
import { selectSpaceDetails } from "../store/spaces/selectors";
import { selectUser } from "../store/user/selectors";
import Loading from "../components/Loading";
import ContactUs from "../components/ContactUs";
import CommentForm from "../components/CommentForm";
import { Container, Button } from "react-bootstrap";

function Space() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const space = useSelector(selectSpaceDetails);
  const { token } = useSelector(selectUser);
  const [editContact, setEditContact] = useState(false);
  const [editComment, setEditComment] = useState(false);

  useEffect(() => {
    dispatch(fetchSpace(id));
  }, [dispatch, id]);

  if (!space) return <Loading />;

  const displayButtons = token && editComment === false;

  return (
    <div>
      <h1>{space.title}</h1>
      <img src={space.logoUrl} alt="" width="50%" />
      <p>About Us: {space.description}</p>
      <p>Price: {space.price} € per hour</p>
      <div style={{ display: "flex" }}>
        <Container style={{ backgroundColor: "white" }}>
          {displayButtons ? (
            <Button onClick={() => setEditContact(true)}>Contact Us</Button>
          ) : null}
          {token && editContact ? <ContactUs /> : null}
        </Container>
        <Container style={{ backgroundColor: "white" }}>
          {displayButtons ? (
            <Button onClick={() => setEditComment(true)}>Comment</Button>
          ) : null}
          {token && editComment ? <CommentForm /> : null}
        </Container>
      </div>
      {/* {token ? <ContactUs /> : null} */}
      {/* {token ? <CommentForm /> : null} */}
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
