import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";

import styles from "./Stream.module.scss";
import Paragraph from "../Paragraph/Paragraph";
import Link from "../../components/Link/Link";


// Media
import tom from '../../media/tom.jpg';
import bill from '../../media/bill.jpg';
import queen from '../../media/queen.jpg';
import trump from '../../media/trump.jpg';
import bush from '../../media/bush.jpg';
import obama from '../../media/obama.jpg';

const people = [obama, bush, trump, queen, bill];

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

  componentDidMount() { }
  render() {
    const postItems = this.props.posts.map(x => {
      if (x.id > 100) {
        return (
          <div className={`${styles.stream__post}`} key={x.id}>
            <img className={`${styles.stream__img}`} src={tom} />
            <h3>{x.title}</h3>
            <p>{x.body}</p>
          </div>
        )
      } else {
        return (
          <div className={`${styles.stream__post}`} key={x.id}>
            <img className={`${styles.stream__img}`} src={people[Math.floor(Math.random() * 5)]} />
            <h3>{x.title}</h3>
            <p>{x.body}</p>
          </div>
        );
      }
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
      </Fragment >
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
