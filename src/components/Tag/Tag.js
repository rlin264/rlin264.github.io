import React from "react";
import styles from "./tag.module.css";
function Tag(props) {
  return (
    <span className={styles.tag}>
      {props.tag}
    </span>
  );
}

export default Tag