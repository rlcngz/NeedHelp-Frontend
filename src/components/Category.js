import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function Category({ id, title }) {
  return (
    <Card border="primary" style={{ width: "18rem", height: "10rem" }}>
      <Card.Body>
        <Card.Title>
          <Link to={`/categories/${id}`}>{title}</Link>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Category;
