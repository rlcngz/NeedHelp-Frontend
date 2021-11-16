import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
// import "./styles.css";

function Category({ id, title }) {
  return (
    <Link to={`/categories/${id}`}>
      {" "}
      <Card
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          lineHeight: " 24px",
          float: "left",
          width: "16rem",
          height: "12rem",
          padding: "65px",
          backgroundColor: "#c6ccc9",
          border: "2px solid black",
          borderRadius: "20px",
          margin: "10px",
        }}
      >
        {" "}
        <Card.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Card.Title style={{ color: "black", fontFamily: "Rockwell" }}>
            {title}
          </Card.Title>
        </Card.Body>
      </Card>{" "}
    </Link>
  );
}

export default Category;
