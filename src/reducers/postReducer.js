import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("reducer FETCH_POSTS...");
      return {
        ...state,
        items: action.payload
      };
      break;
    case NEW_POST:
      console.log("reducer NEW_POSTS...");
      return {
        ...state,
        item: action.payload
      };
      //return something
      break;
    default:
      console.log("reducer default...");
      return state;
  }
}
