import React from "react";
import CardMini from "../../components/CardMini/CardMini";
import pic from "../../assets/images/my_order/anafMini.png";
import styles from "./MyOrder.module.css";

const MyOrder = () => {
  return (
    <div className={styles.order}>
      <div className={styles.orderContainer}>
        <h2>Мои заказы</h2>
        <div className={styles.grid}>
          <CardMini
            pic={pic}
            dose="100 мг, 10 таб"
            title="Название препарата 1"
            text="100 мг, 10 таб"
            count="1 шт."
            price="280,90 ₽"
            date="06.01.2022"
            status="Ожидает оплаты"
          />
          <CardMini
            pic={pic}
            title="Название препарата 1"
            text="100 мг, 10 таб"
            count="1 шт."
            price="280,90 ₽"
            date="06.01.2022"
            status="Ожидает оплаты"
          />
          <CardMini
            pic={pic}
            title="Название препарата 1"
            text="100 мг, 10 таб"
            count="1 шт."
            price="280,90 ₽"
            date="06.01.2022"
            status="Ожидает оплаты"
          />{" "}
          <CardMini
            pic={pic}
            title="Название препарата 1"
            text="100 мг, 10 таб"
            count="1 шт."
            price="280,90 ₽"
            date="06.01.2022"
            status="Ожидает оплаты"
          />{" "}
          <CardMini
            pic={pic}
            title="Название препарата 1"
            text="100 мг, 10 таб"
            count="1 шт."
            price="280,90 ₽"
            date="06.01.2022"
            status="Ожидает оплаты"
          />{" "}
          <CardMini
            pic={pic}
            title="Название препарата 1"
            text="100 мг, 10 таб"
            count="1 шт."
            price="280,90 ₽"
            date="06.01.2022"
            status="Ожидает оплаты"
          />
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
