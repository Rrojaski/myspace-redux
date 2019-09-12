import { FETCH_POSTS, NEW_POST } from "./types";

// Generate random pics and assign to post

// Used to add random person to recieved posts

import jobs from "../media/jobs.jpg";
import kendal from "../media/kendal.jpg";
import kim from "../media/kim.jpg";
import sharon from "../media/sharon.jpg";
import robert from "../media/robert.jpg";
import rihanna from "../media/rihanna.jpg";
import will from "../media/will.jpg";
import chris from "../media/chris.jpg";
import jennifer from "../media/jennifer.jpg";

import bill from "../media/bill.jpg";
import queen from "../media/queen.jpg";
import trump from "../media/trump.jpg";
import bush from "../media/bush.jpg";
import obama from "../media/obama.jpg";

const people = [
  obama,
  bush,
  trump,
  queen,
  bill,
  jobs,
  kendal,
  kim,
  sharon,
  robert,
  rihanna,
  will,
  chris,
  jennifer
];

export const fetchPosts = () => dispatch => {
  console.log("Fetching...");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(json => {
      console.log("mapping json");
      let obj = json.forEach(x => {
        x.img = people[Math.floor(Math.random() * 14)];
      });
      console.log(obj);
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
