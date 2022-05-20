import React from "react";
import Logo from "../../components/Logo/Logo";
import back from "../../assets/images/admin/admin_back.png";
import styles from "./Admin.module.css";

const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.adminContainer}>
        <Logo metaType="true" />
        <h2>Заказы</h2>
        <div className={styles.adminGrid}></div>
      </div>
      <img src={back} alt="back" />
    </div>
  );
};

export default Admin;
