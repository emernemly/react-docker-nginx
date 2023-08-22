import axios from "axios";

import { FIND_CONTACT, GET_CONTACT, TOGGEL_FALSE, TOGGEL_TRUE } from "./Type";
export const get_contact = () => async (dispatch) => {
  try {
    const response = await axios.get("/contact");
    dispatch({ type: GET_CONTACT, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
export const add_contact = (data) => async (dispatch) => {
  try {
    await axios.post("/contact", data);
    dispatch(get_contact());
  } catch (error) {
    console.log(error);
  }
};
export const delete_contact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/contact/${id}`);
    dispatch(get_contact());
  } catch (error) {
    console.log(error);
  }
};
export const edit_contact = (id, data) => async (dispatch) => {
  try {
    await axios.put(`/contact/${id}`, data);
    dispatch(get_contact());
  } catch (error) {
    console.log(error);
  }
};
export const find_contact = (id) => async (dispatch) => {
  const resp = await axios.get(`/contact/${id}`);
  dispatch({ type: FIND_CONTACT, payload: resp.data });
};

export const toggel_true = () => {
  return {
    type: TOGGEL_TRUE,
  };
};

export const toggel_false = () => {
  return {
    type: TOGGEL_FALSE,
  };
};
