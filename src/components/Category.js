import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./styles.css";
import { Jumbotron } from "react-bootstrap";

function Category({ id, title }) {
  return (
    <Jumbotron>
      <Card
        style={{
          width: "18rem",
          backgroundColor: "rgb(166, 238, 214)",
          border: "2px solid blue",
        }}
      >
        <Card.Body>
          <Card.Title
            style={{
              display: "flex",
              justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <Link to={`/categories/${id}`}>{title}</Link>
          </Card.Title>
        </Card.Body>
      </Card>
    </Jumbotron>
  );
}

export default Category;
