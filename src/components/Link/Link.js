import React, { Fragment } from "react";

import styles from "./Link.module.scss";

const Paragraph = props => {
  return (
    <Fragment>
      <a
        href={props.href}
        className={`${styles.Link} ${styles[props.className]}`}
      >
        {props.children}
      </a>
    </Fragment>
  );
};

export default Paragraph;
