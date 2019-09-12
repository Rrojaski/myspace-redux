import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";

import styles from "./Stream.module.scss";
import Paragraph from "../Paragraph/Paragraph";
import Link from "../../components/Link/Link";

class Stream extends Component {
  componentWillMount() {
    this.props.fetchPosts();
    console.log("props...");
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  componentDidMount() {}
  render() {
    const postItems = this.props.posts.map(x => {
      return (
        <div className={`${styles.stream__post}`} key={x.id}>
          <h3>{x.title}</h3>
          <p>{x.body}</p>
        </div>
      );
    });
    return (
      <Fragment>
        <div className={`${styles.Stream}`}>
          <div className={`${styles.stream__header}`}>
            <Paragraph>Friend Status</Paragraph>
            <Link>view all</Link>
          </div>
          <div className={`${styles.stream__status}`}>{postItems}</div>
        </div>
      </Fragment>
    );
  }
}

Stream.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Stream);
