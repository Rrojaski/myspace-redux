import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  console.log("Fetching...");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(json => {
      console.log(json);
      dispatch({
        type: FETCH_POSTS,
        payload: json
      });
    });
};

export const createPost = postData => dispatch => {
  console.log("Posting...");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => {
      console.log(post);
      dispatch({
        type: NEW_POST,
        payload: post
      });
    });
};
