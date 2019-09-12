import React, { Fragment } from "react";

import styles from "./Paragraph.module.scss";

const Paragraph = props => {
  return (
    <Fragment>
      <p
        className={`${styles.Paragraph} ${styles[props.color]} ${styles[props.size]} ${
          styles[props.className]
        } `}
      >
        {props.children}
      </p>
    </Fragment>
  );
};

export default Paragraph;
