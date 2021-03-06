import React, { useState } from "react";
import axios from "axios";
import { apiUrl } from "../config/constants";
import { Form, Col, Button } from "react-bootstrap";
import "./formStyle.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectSpaceDetails } from "../store/spaces/selectors";
import { showMessageWithTimeout } from "../store/appState/actions";

function ContactUs() {
  const [name, setName] = useState("");
  // const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const spaceUser = useSelector(selectSpaceDetails).user;

  const sendEmail = async (name, userEmail, spaceUserEmail, message) => {
    const res = await axios.post(`${apiUrl}/email`, {
      name,
      userEmail,
      spaceUserEmail,
      message,
    });
    console.log("any respond?", res);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userEmail = user.email;
    const spaceUserEmail = spaceUser.email;
    sendEmail(name, userEmail, spaceUserEmail, message);
    dispatch(showMessageWithTimeout("success", false, "Email sent", 3000));
  };

  return (
    <Form as={Col} md={{ span: 10, offset: 1 }} className="form">
      <h1 className="mt-5 mb-5">Contact Us</h1>
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
        <Form.Label>Message</Form.Label>
        <Form.Control
          style={{ height: "300px" }}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          type="text"
          placeholder="Please leave your message and phone number."
        />
      </Form.Group>
      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Send
        </Button>
      </Form.Group>
    </Form>
  );
}

export default ContactUs;
