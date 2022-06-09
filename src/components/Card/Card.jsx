import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavourite } from "../../hooks/useFavourite";
import Button from "../Button/Button";
import styles from "../Card/Card.module.css";

const Card = ({
  pic,
  title,
  text,
  price,
  onClick,
  id,
  click,
  iconClick,
  favProduct,
  setClick,
}) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const fav = useFavourite(id, favProduct, click, setClick, iconClick);

  return (
    <>
      <div className={styles.card}>
        {fav}
        <img
          className={styles.pic}
          src={pic}
          alt="top_pic"
          onClick={() => navigate(`/product/${id}`)}
        />
        <h3 className={styles.title} onClick={() => navigate("/product")}>
          {title}
        </h3>
        <p className={styles.text}>{text.substr(0, 100)}...</p>
        <p className={styles.price}>{price.toFixed(2)} ₽</p>
        <div className={styles.buttons}>
          <Button
            onClick={onClick}
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
    </>
  );
};

export default Card;
