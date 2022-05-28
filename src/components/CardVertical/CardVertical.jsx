import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import basket from "../../assets/images/cart/basket.png";
import styles from "./CardVertical.module.css";

const CardVertical = ({
  pic,
  title,
  dose,
  text,
  status,
  price,
  date,
  amount,
}) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.cardMini}>
        <img onClick={() => navigate("/product")} src={pic} alt="" />
        <div className={styles.main}>
          <h3 onClick={() => navigate("/product")}>{title}</h3>
          <span>{dose}</span>
        </div>
        <span className={styles.price}>{price}</span>
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
        <span className={styles.amount}>{amount}</span>
        <button className={styles.amounTrash}>
          <img src={basket} alt="basket" />
        </button>
      </div>
    </>
  );
};

export default CardVertical;
