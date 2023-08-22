import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  delete_contact,
  find_contact,
  toggel_true,
} from "../Redux/ActionType/Action";

const CardList = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(delete_contact(contact._id));
  };
  const handleEdite = () => {
    dispatch(toggel_true());
    dispatch(find_contact(contact._id));
  };
  return (
    <Card style={{ width: "18rem", display: "flex" }}>
      <Card.Img variant="top" src={contact.image} />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>{contact.email}</Card.Text>
        <Link to={`/edit/${contact._id}`}>
          {" "}
          <Button
            style={{ margin: "12px" }}
            variant="primary"
            onClick={handleEdite}
          >
            Edite
          </Button>
        </Link>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardList;
