import React, { Fragment } from "react";
import styles from "./Header.module.scss";
// Components
import { Row, Col } from "../../components/Grid/Grid";
import Paragraph from "../../components/Paragraph/Paragraph";
import Link from "../../components/Link/Link";
import ListA from "../../components/ListA/ListA";
import Search from "../../components/Search/Search";

const Head = props => {
  return (
    <Fragment>
      <div className={`${styles.Header}`}>
        <div className={`${styles.header__top}`}>
          <Row>
            <Col size="col-1-of-4">
              <ListA>
                <Link href="#">
                  <span>MySpace</span>
                </Link>
                <Link href="#">
                  <span>Home</span>
                </Link>
              </ListA>
            </Col>
            <Col size="col-2-of-4">
              <Search />
            </Col>
            <Col size="col-1-of-4">
              <ListA>
                <Link href="#">
                  <span>Help</span>
                </Link>
                <Link href="#">
                  <span>SignOut</span>
                </Link>
              </ListA>
            </Col>
          </Row>
        </div>
        <div className={`${styles.header__bottom}`}>
          <Row>
            <ListA color="black">
              <Link>Home</Link>
              <Link>Browse</Link>
              <Link>Search</Link>
              <Link>Invite</Link>
              <Link>Film</Link>
              <Link>Mail</Link>
              <Link>Blog</Link>
              <Link>Favorites</Link>
              <Link>Forum</Link>
              <Link>Groups</Link>
              <Link>Events</Link>
              <Link>Videos</Link>
              <Link>Music</Link>
              <Link>Comedy</Link>
              <Link>Classifieds</Link>
            </ListA>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default Head;
