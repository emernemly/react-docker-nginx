import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_contact } from "../../Redux/ActionType/Action";
import CardList from "../CardList";

const List = () => {
  const contacts = useSelector((state) => state.contactReducer.contact);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_contact());
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: "20px",
        flexWrap: "wrap",
      }}
    >
      {contacts.map((contact) => (
        <CardList contact={contact} />
      ))}
    </div>
  );
};

export default List;
