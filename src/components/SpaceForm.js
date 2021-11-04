import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { selectUserSpace } from "../store/user/selectors";
import { updateMySpace } from "../store/user/actions";

export default function SpaceForm() {
  const space = useSelector(selectUserSpace);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(space.title);
  const [description, setDescription] = useState(space.description || "");
  const [price, setPrice] = useState(space.price);
  const [logoUrl, setLogoUrl] = useState(space.logoUrl);
  const [type, setType] = useState(space.type);

  function submitForm(event) {
    event.preventDefault();

    // console.log(title, description);
    dispatch(updateMySpace(title, description, type, logoUrl, price));
  }

  return (
    <Form>
      <h1>Edit your space</h1>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Title of your space"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="What is your space about"
        />
      </Form.Group>
      <Form.Group controlId="formBasicSelect">
        <Form.Label>Select Your Service</Form.Label>
        <Form.Control
          as="select"
          value={type}
          onChange={(e) => {
            console.log("e.target.value", e.target.value);
            setType(e.target.value);
          }}
        >
          <option>House Cleaning</option>
          <option>Gardening</option>
          <option>Pet Walking</option>
          <option>Tax Advisor</option>
          <option>Bike Hiring</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          type="text"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Logo Url</Form.Label>
        <Form.Control
          value={logoUrl}
          onChange={(event) => setLogoUrl(event.target.value)}
          type="text"
        />
      </Form.Group>
      <Form.Group>
        <Button variant="primary" type="submit" onClick={submitForm}>
          Save changes
        </Button>
      </Form.Group>
    </Form>
  );
}
