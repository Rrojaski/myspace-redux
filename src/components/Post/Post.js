import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../../actions/postActions";

import styles from "./Post.module.scss";
import Paragraph from "../Paragraph/Paragraph";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  componentDidMount() {}
  render() {
    return (
      <Fragment>
        <div className={`${styles.Post}`}>
          <div className={`${styles.post__header}`}>
            <Paragraph>Post Status</Paragraph>
          </div>

          <form onSubmit={this.onSubmit} className={`${styles.post__form}`}>
            <label className={`${styles.post__label}`}>Title</label>
            <input
              max="25"
              className={`${styles.post__input}`}
              name="title"
              onChange={this.handleChange}
              type="text"
              value={this.state.title}
              required
            />
            <label className={`${styles.post__label}`}>Body</label>
            <textarea
              max="50"
              className={`${styles.post__input} ${styles.post__input__textarea}`}
              name="body"
              onChange={this.handleChange}
              type="text"
              value={this.state.body}
              required
            />
            <button className={`${styles.post__button}`}>Submit</button>
          </form>
        </div>
      </Fragment>
    );
  }
}
/*

removed due to typo

Post.PropTypes = {
  createPost: PropTypes.func.isRequired
};
*/
export default connect(
  null,
  { createPost }
)(Post);
