import React from "react";
import BreadcrumbComponent from "../../components/Breadcrumb/Breadcrumb";
import CardVertical from "../../components/CardVertical/CardVertical";
import pic from "../../assets/images/my_order/anafMini.png";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Empty from "../../components/Empty/Empty";
import empty from "../../assets/images/add_to_cart/empty_cart.png";
import styles from "./AddToCart.module.css";

const AddToCart = ({ finalAmount }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>
        <BreadcrumbComponent
          crumbs={[
            { path: "/", name: "Главная" },
            { path: "/catalog", name: "Каталог" },
            { path: "", name: "Корзина" },
          ]}
        />
        <h2>Корзина</h2>
        <div className={styles.list}>
          <CardVertical
            pic={pic}
            title="Название препарата 1"
            dose="100 мг, 10 таб"
            price="350,55 ₽"
            amount="280,90 ₽"
          />
        </div>
        {/* это будет здесь? */}
        <div className={styles.create}>
          <p>
            Итоговая стоимость заказа: <span>1552 ₽</span>
          </p>
          <div className={styles.buttons}>
            <Button
              type="submit"
              width="228px"
              text="Оформить заказ"
              fontSize="20px"
              lineHeight="48px"
              onClick={() => navigate("/ordermaking")}
            />
            <Button
              type="submit"
              width="280px"
              text="Продолжить покупки"
              fontSize="20px"
              lineHeight="48px"
              onClick={() => navigate("/catalog")}
              white={true}
              margin="0 0 0 30px"
            />
          </div>
        </div>
        <Empty
          isBtn={true}
          empty={empty}
          text="Ваша корзина пуста"
          btnText="Вернуться к покупкам"
          btnWidth="290px"
          lineHeightBtn="50px"
          onClickBtn={() => navigate("/catalog")}
        />
      </div>
    </div>
  );
};

export default AddToCart;
