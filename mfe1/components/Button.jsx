import React from "react";

import styles from "./Button.module.css";

export const CButton = ({useCount, count}) => {
  return (
    <button className={styles.customButton} onClick={() => useCount(count + 1)}>
      Contador 4 the lulz
    </button>
  );
};
