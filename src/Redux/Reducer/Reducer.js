import {
  FIND_CONTACT,
  GET_CONTACT,
  TOGGEL_FALSE,
  TOGGEL_TRUE,
} from "../ActionType/Type";

const initialState = {
  contact: [],
  owncontact: {},
  edit: false,
};
const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACT:
      return { ...state, contact: payload.contact };
    case FIND_CONTACT:
      return { ...state, owncontact: payload.contact };
    case TOGGEL_TRUE:
      return { ...state, edit: true };
    case TOGGEL_FALSE:
      return { ...state, edit: false };
    default:
      return state;
  }
};
export default contactReducer;
