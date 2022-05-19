import React, { Children } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header type="header" />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default Wrapper;
