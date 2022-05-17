import React from "react";
import styles from "../Feedback/Feedback.module.css";

const Feedback = ({ nickname, date, text }) => {
  return (
    <div className={styles.feedback}>
      <div className={styles.info}>
        <h3 className={styles.nickname}>{nickname}</h3>
        <p className={styles.date}>{date}</p>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Feedback;
