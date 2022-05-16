import React, { useState } from "react";
import styles from "../Card/Card.module.css";
import Button from "../Button/Button";

const Card = ({ pic, title, text, span, price }) => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.card}>
      <button className={styles.btnHeart}>
        <svg
          width="23"
          height="21"
          viewBox="0 0 23 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5023 20.4902L19.8937 12.4295C22.5529 9.87504 23.5735 6.94244 22.6881 4.38802C21.978 2.33615 20.1468 0.864252 17.9103 0.552199C15.5759 0.226269 13.2818 1.19559 11.4994 3.23651C9.7199 1.1985 7.4258 0.226486 5.08857 0.552199C2.84903 0.864257 1.01777 2.33615 0.310723 4.38802C-0.571796 6.94515 0.44588 9.87509 3.10515 12.4295L11.5023 20.4902ZM1.67606 4.81852C2.2137 3.26383 3.60219 2.15078 5.29828 1.91349C5.52247 1.88305 5.74386 1.86649 5.96806 1.86649C7.78489 1.86649 9.55578 2.89378 10.9127 4.76057L11.5021 5.5698L12.0887 4.76077C13.6123 2.66477 15.6591 1.62919 17.7033 1.91373C19.4024 2.15124 20.7909 3.26407 21.3255 4.81876C22.0328 6.86235 21.1386 9.28141 18.8762 11.4519L11.5023 18.5406L4.12273 11.4543C1.86312 9.28091 0.969159 6.86186 1.67647 4.81827L1.67606 4.81852Z"
            fill="#ABABAB"
          />
        </svg>
      </button>
      <img className={styles.pic} src={pic} alt="top_pic" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <span className={styles.dose}>{span}</span>
      <p className={styles.price}>{price}</p>
      <div className={styles.buttons}>
        <Button
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
