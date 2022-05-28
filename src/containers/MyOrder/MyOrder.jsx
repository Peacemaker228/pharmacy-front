import React from "react";
import CardMini from "../../components/CardMini/CardMini";
import pic from "../../assets/images/my_order/anafMini.png";
import BreadcrumbComponent from "../../components/Breadcrumb/Breadcrumb";
import Empty from "../../components/Empty/Empty";
import empty from "../../assets/images/my_order/empty_order.png";
import { useNavigate } from "react-router-dom";
import styles from "./MyOrder.module.css";

const MyOrder = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.order}>
      <div className={styles.orderContainer}>
        <BreadcrumbComponent
          crumbs={[
            { path: "/", name: "Главная" },
            { path: "/account", name: "Личный кабинет" },
            { path: "", name: "Мои заказы" },
          ]}
        />
        <h2>Мои заказы</h2>
        <div className={styles.orderGrid}>
          <CardMini
            isMyOrder={true}
            position="1"
            pic={pic}
            dose="100 мг, 10 таб"
            title="Название препарата 1"
            text="100 мг, 10 таб"
            quantity="1 шт."
            price="280,90 ₽"
            date="06.01.2022"
            status="Ожидает оплаты"
          />
          <CardMini
            isMyOrder={true}
            pic={pic}
            title="Название препарата 1"
            dose="100 мг, 10 таб"
            quantity="1 шт."
            price="280,90 ₽"
            date="06.01.2022"
            status="Ожидает оплаты"
          />
          <CardMini
            isMyOrder={true}
            pic={pic}
            title="Название препарата 1"
            dose="100 мг, 10 таб"
            quantity="1 шт."
            price="280,90 ₽"
            date="06.01.2022"
            status="Ожидает оплаты"
          />{" "}
          <CardMini
            isMyOrder={true}
            pic={pic}
            title="Название препарата 1"
            dose="100 мг, 10 таб"
            quantity="1 шт."
            price="280,90 ₽"
            date="06.01.2022"
            status="Ожидает оплаты"
          />{" "}
          <CardMini
            isMyOrder={true}
            pic={pic}
            title="Название препарата 1"
            dose="100 мг, 10 таб"
            quantity="1 шт."
            price="280,90 ₽"
            date="06.01.2022"
            status="Ожидает оплаты"
          />{" "}
          <CardMini
            isMyOrder={true}
            pic={pic}
            title="Название препарата 1"
            dose="100 мг, 10 таб"
            quantity="1 шт."
            price="280,90 ₽"
            date="06.01.2022"
            status="Ожидает оплаты"
          />
        </div>

        <Empty
          isBtn={true}
          empty={empty}
          text="У Вас пока что не было ни одного заказа"
          btnText="Перейти в каталог"
          btnWidth="250px"
          lineHeightBtn="50px"
          onClickBtn={() => navigate("/catalog")}
        />
      </div>
    </div>
  );
};

export default MyOrder;
