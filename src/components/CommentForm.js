import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { postComment } from "../store/user/actions";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function CommentForm() {
  // const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  function submitForm(event) {
    event.preventDefault();
    // dispatch(postComment(name, comment));
  }

  return (
    <Form as={Col} md={{ span: 4, offset: 2 }}>
      <h1 className="mt-5 mb-5">Leave a comment</h1>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Your name please"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Comment</Form.Label>
        <Form.Control
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          type="text"
          placeholder="What is your comment?"
        />
      </Form.Group>
      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Post!
        </Button>
      </Form.Group>
    </Form>
  );
}

export default CommentForm;
