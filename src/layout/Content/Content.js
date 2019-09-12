import React, { Fragment } from "react";
import styles from "./Content.module.scss";
// Components
import { Row, Col } from "../../components/Grid/Grid";
import Paragraph from "../../components/Paragraph/Paragraph";
import Link from "../../components/Link/Link";
import ListB from "../../components/ListB/ListB";
import Post from "../../components/Post/Post";
import Stream from "../../components/Stream/Stream";
import Avatar from "../../components/Avatar/Avatar";
import Today from "../../components/Today/Today";

// Media
import apple from "../../media/apple.png";

const Content = props => {
  return (
    <Fragment>
      <div className={`${styles.Content}`}>
        <Row>
          <Col size="col-2-of-3">
            <Paragraph size="lg">Hello, Tom!</Paragraph>
          </Col>
          <Col size="col-1-of-3">
            <Paragraph>
              <strong>Last Login:&nbsp;</strong>
              Wed 09/12/07
            </Paragraph>
          </Col>
        </Row>
        <Row>
          <Col size="col-2-of-3">
            <Paragraph>
              My URL <Link>myspace.com/tom</Link>
              <Link>[edit profile]</Link>
            </Paragraph>
          </Col>
          <Col size="col-1-of-3">
            <ListB>
              <Link>Profile</Link>
              <Link>Pics</Link>
              <Link>Videos</Link>
              <Link>Blog</Link>
              <Link>Comments</Link>
              <Link>Friends</Link>
              <Link>more &#709;</Link>
            </ListB>
          </Col>
        </Row>
        <Row>
          <Col size="col-1-of-6">
            <Avatar />
            <Post />
          </Col>
          <Col size="col-3-of-6">
            <Stream />
          </Col>
          <Col size="col-2-of-6">
            <Today />
            <img style={{ marginTop: "2rem" }} width="100%" src={apple} />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Content;
