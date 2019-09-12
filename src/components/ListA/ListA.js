import React, { Fragment } from "react";

import styles from "./ListA.module.scss";

const ListA = props => {
  return (
    <Fragment>
      <div className={`${styles.ListA} ${styles[props.color]}`}>
        {props.children}
      </div>
    </Fragment>
  );
};

export default ListA;
