import React from "react";

import styles from "./Header.module.css";
import { CButton } from "./Button";

export const Header = () => {
  const [count, useCount] = React.useState(0);

  return (
    <div className={styles.container}>
      <h3>Soy el Microfront1</h3>
      <p>Vamos a ver como funciona esto con su css y todo</p>
      <div className={styles.countContainer}>
        <p>{count}</p>
        <CButton useCount={useCount} count={count} />
      </div>
    </div>
  );
};
