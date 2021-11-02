import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./styles.css";
import { Jumbotron } from "react-bootstrap";

function Category({ id, title }) {
  return (
    <Jumbotron>
      <Card>
        <Card.Body>
          <Card.Title>
            <Link to={`/categories/${id}`}>{title}</Link>
          </Card.Title>
        </Card.Body>
      </Card>
    </Jumbotron>
  );
}

export default Category;
