import React from "react";

import { ListGroup } from "react-bootstrap";

function Detail({ id, title }) {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item>{title}</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Detail;
