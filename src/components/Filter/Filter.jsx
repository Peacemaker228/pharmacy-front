import classNames from "classnames";
import React, { useState } from "react";
import styles from "./Filter.module.css";

const Filter = ({ name, onClick }) => {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => {
        onClick();
        setActive((prev) => !prev);
      }}
      className={classNames(styles.filter, active && styles.filterActive)}
    >
      {name}
    </button>
  );
};

export default Filter;
