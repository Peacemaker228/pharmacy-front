import React from "react";
import styles from "./Account.module.css";
import { useNavigate } from "react-router-dom";
const Account = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.account}>
      <div className={styles.accountContainer}>
        <h2>Личный кабинет</h2>
        <div className={styles.blocks}>
          <button
            onClick={() => navigate("/myorder")}
            className={styles.titleBtn}
          >
            <p>Мои заказы</p>
          </button>
          <button
            onClick={() => navigate("/favourites")}
            className={styles.titleBtn}
          >
            <p>Избранное</p>
          </button>
          <button onClick={() => navigate("/edit")} className={styles.titleBtn}>
            <p>Изменить личные данные</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
