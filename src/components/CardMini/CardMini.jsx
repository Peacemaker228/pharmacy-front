import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CardMini.module.css";

const CardMini = ({ pic, title, dose, text, count, status, price, date }) => {
  return (
    <div className={styles.cardMiniContainer}>
      <div className={styles.main}>
        <div className={styles.left}>
          <h3>{title}</h3>
          <span>{dose}</span>
        </div>
        <div className={styles.right}>
          <img src={pic} alt="" />
        </div>
      </div>
      <div className={styles.about}>
        <p>{count}</p>
        <h3>{price}</h3>
      </div>
      <div className={styles.status}>
        <p>
          <span>Дата совершения заказа: </span>
          {date}
        </p>
        <p>
          <span>Статус: </span>
          {status}
        </p>
      </div>
    </div>
  );
};

export default CardMini;
