import React, { useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { postComment } from "../store/user/actions";
import { showMessageWithTimeout } from "../store/appState/actions";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./styles.css";
import "./formStyle.scss";

function CommentForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const { id } = useParams();
  function submitForm(event) {
    event.preventDefault();
    dispatch(postComment(name, comment, id));
    dispatch(showMessageWithTimeout("success", false, "Comment sent", 3000));
  }
  return (
    <Form as={Col} md={{ span: 10, offset: 1 }} className="form">
      <h1 className="mt-5 mb-5">Leave a review</h1>
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
          style={{ height: "300px" }}
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
