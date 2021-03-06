// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { useSelector, useDispatch } from "react-redux";
// import { selectUserSpace } from "../store/user/selectors";
// import { updateMySpace } from "../store/user/actions";

// export default function SpaceForm() {
//   const space = useSelector(selectUserSpace);
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState(space.title);
//   const [description, setDescription] = useState(space.description || "");
//   const [price, setPrice] = useState(space.price);
//   const [logoUrl, setLogoUrl] = useState(space.logoUrl);

//   function submitForm(event) {
//     event.preventDefault();

//     // console.log(title, description);
//     dispatch(updateMyAddress(street, number, postCode, city));
//   }

//   return (
//     <Form>
//       <h1>Edit your Address</h1>
//       <Form.Group>
//         <Form.Label>Street</Form.Label>
//         <Form.Control
//           value={street}
//           onChange={(event) => setTitle(event.target.value)}
//           type="text"
//           placeholder="Title of your space"
//           required
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Description</Form.Label>
//         <Form.Control
//           value={description}
//           onChange={(event) => setDescription(event.target.value)}
//           type="text"
//           placeholder="What is your space about"
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Price</Form.Label>
//         <Form.Control
//           value={price}
//           onChange={(event) => setPrice(event.target.value)}
//           type="number"
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Logo Url</Form.Label>
//         <Form.Control
//           value={logoUrl}
//           onChange={(event) => setLogoUrl(event.target.value)}
//           type="text"
//         />
//       </Form.Group>
//       <Form.Group>
//         <Button variant="primary" type="submit" onClick={submitForm}>
//           Save changes
//         </Button>
//       </Form.Group>
//     </Form>
//   );
// }
