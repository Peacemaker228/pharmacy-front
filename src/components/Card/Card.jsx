import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "../Card/Card.module.css";

const Card = ({ pic, title, text, span, price }) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <button className={styles.btnHeart} onClick={() => ""}>
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.501219 6.41641L0.501218 6.41639C0.450801 3.54372 1.96528 1.52254 4.00884 0.798268C6.0535 0.0736021 8.75449 0.606055 11.1366 3.12718L11.5 3.51184L11.8635 3.12717C14.2451 0.606374 16.9459 0.0736557 18.9905 0.798025C21.034 1.522 22.5487 3.5428 22.4988 6.41558C22.4535 9.02096 20.6701 11.7126 18.3108 14.0944C16.0736 16.3531 13.4034 18.2485 11.5 19.4152C9.59674 18.2487 6.92672 16.3535 4.68952 14.095C2.33034 11.7133 0.546818 9.02183 0.501219 6.41641Z"
            stroke="#ABABAB"
          />
        </svg>
      </button>
      <img
        className={styles.pic}
        src={pic}
        alt="top_pic"
        onClick={() => navigate("/product")}
      />
      <h3 className={styles.title} onClick={() => navigate("/product")}>
        {title}
      </h3>
      <p className={styles.text}>{text}</p>
      <span className={styles.dose}>{span}</span>
      <p className={styles.price}>{price}</p>
      <div className={styles.buttons}>
        <Button
          // onClick={() => {
          //   setModalType(isAuth ? "feedback" : "auth");
          //   setVisible(true);
          // }}
          isBasket="true"
          type="submit"
          width="140px"
          text="В корзину"
          lineHeight="37px"
          color="#FFFFFF"
          border="none"
          background="#136EEF "
        />
        <div className={styles.counter}>
          <button
            className={styles.counterBtn}
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
          >
            -
          </button>
          <span className={styles.counterText}>{count}</span>
          <button
            className={styles.counterBtn}
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
