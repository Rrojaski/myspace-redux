import React, { Fragment } from "react";

import styles from "./Avatar.module.scss";

// Media
import tom from "../../media/tom.jpg";
import Paragraph from "../../components/Paragraph/Paragraph";

const Avatar = props => {
  return (
    <Fragment>
      <div
        style={props.style}
        className={`${styles.Avatar} ${props.className}`}
      >
        <img src={tom} className={`${styles.avatar__img}`} />
        <Paragraph>
          Profile Views: <span>612,234,249</span>
        </Paragraph>
        {props.children}
      </div>
    </Fragment>
  );
};

export default Avatar;
