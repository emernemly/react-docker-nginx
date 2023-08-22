import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  add_contact,
  edit_contact,
  find_contact,
} from "../../Redux/ActionType/Action";

const AddEdit = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [image, setimage] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const edit = useSelector((state) => state.contactReducer.edit);

  const owncontact = useSelector((state) => state.contactReducer.owncontact);

  useEffect(() => {
    if (edit) {
      setname(owncontact.name);
      setemail(owncontact.email);
      setimage(owncontact.image);
    } else if (!edit) {
      setemail("");
      setname("");
      setimage("");
    }
  }, [owncontact, edit]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(add_contact({ name, email, image }));
    navigate("/list");
  };
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(edit_contact(owncontact._id, { name, email, image }));
    navigate("/list");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "30px",
        padding: "30px",
      }}
    >
      <Form.Control
        onChange={(e) => setname(e.target.value)}
        value={name}
        size="lg"
        type="text"
        placeholder="Name"
      />
      <br />
      <Form.Control
        onChange={(e) => setemail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />
      <br />
      <Form.Control
        onChange={(e) => setimage(e.target.value)}
        value={image}
        size="sm"
        type="text"
        placeholder="Image"
      />
      {edit ? (
        <button
          onClick={handleEdit}
          style={{
            margin: "10px",
            backgroundColor: "DodgerBlue",
            color: "FloralWhite",
            borderRadius: "10px",
            border: "transparent",
          }}
        >
          Edite
        </button>
      ) : (
        <button
          onClick={handleAdd}
          style={{
            margin: "10px",
            backgroundColor: "DodgerBlue",
            color: "FloralWhite",
            borderRadius: "10px",
            border: "transparent",
          }}
        >
          ADD
        </button>
      )}
    </div>
  );
};
export default AddEdit;
