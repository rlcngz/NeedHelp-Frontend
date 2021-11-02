import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser, selectUserSpace } from "../store/user/selectors";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";

import SpaceForm from "../components/SpaceForm";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function MySpace() {
  //   const dispatch = useDispatch();
  //   const { userId } = useParams();

  const userSpace = useSelector(selectUserSpace);
  const [editMode, setEditMode] = useState(false);

  const history = useHistory();
  const { token, space, id } = useSelector(selectUser);

  if (!userSpace) return <Loading />;

  if (token === null) {
    history.push("/");
  }

  const displayButtons = id === space.userId && editMode === false;
  return (
    <div>
      <h1>{userSpace.title}</h1>
      <div>
        <img src={userSpace.logoUrl} alt="" width="50%" />
        <p>
          <b>Description:</b>
          {userSpace.description}
        </p>
        <p>
          <b>Price:</b>
          {userSpace.price}€ for hour
        </p>
        <Container>
          {displayButtons ? (
            <Button onClick={() => setEditMode(true)}>Edit my space</Button>
          ) : null}
          {editMode ? <SpaceForm /> : null}
        </Container>
      </div>
    </div>
  );
}

export default MySpace;
