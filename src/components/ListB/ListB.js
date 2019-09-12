import React, { Fragment } from "react";

import styles from "./ListB.module.scss";

const Listb = props => {
  return (
    <Fragment>
      <div className={`${styles.ListB} ${styles[props.color]}`}>
        {props.children}
      </div>
    </Fragment>
  );
};

export default Listb;
