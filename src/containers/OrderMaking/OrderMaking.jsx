import { Form, Input, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React, { useState } from "react";
import BreadcrumbComponent from "../../components/Breadcrumb/Breadcrumb";
import location from "../../assets/images/order_making/location.png";
import time from "../../assets/images/order_making/time.png";
import Button from "../../components/Button/Button";
import ModalCustom from "../../components/Modal/Modal";
import CardMini from "../../components/CardMini/CardMini";
import pic from "../../assets/images/order_making/anafMini.png";
import styles from "./OrderMaking.module.css";

const OrderMaking = () => {
  const { Option } = Select;
  const [visible, setVisible] = useState(false);
  const [modalType, setModalType] = useState("");

  // как здесь с опшионом?

  return (
    <>
      <div className={styles.orderMaking}>
        <div className={styles.orderMakingContainer}>
          <BreadcrumbComponent
            crumbs={[
              { path: "/", name: "Главная" },
              { path: "/catalog", name: "Каталог" },
              { path: "/cart", name: "Корзина" },
              { path: "", name: "Оформление заказа" },
            ]}
          />
          <h2>Введите Ваши данные</h2>
        </div>
      </div>
      <div className={styles.mainForm}>
        <Form className={styles.form} onFinish={"onFinish"}>
          <Form.Item
            name="surname"
            rules={[{ required: true, message: "Введите фамилию" }]}
          >
            <Input placeholder="Фамилия" className={styles.modalInput} />
          </Form.Item>

          <Form.Item
            name="name"
            rules={[{ required: true, message: "Введите имя" }]}
          >
            <Input placeholder="Имя" className={styles.modalInput} />
          </Form.Item>

          <Form.Item
            name="patronymic"
            // rules={[{ required: true, message: "Введите отчество" }]}
          >
            <Input placeholder="Отчество" className={styles.modalInput} />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[{ required: true, message: "Введите номер телефона" }]}
          >
            <Input placeholder="Телефон" className={styles.modalInput} />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Введите e-mail" },
              { type: "email", message: "Не соответствует типу e-mail" },
            ]}
          >
            <Input placeholder="E-mail" className={styles.modalInput} />
          </Form.Item>
        </Form>

        <Form className={styles.form} onFinish={"onFinish"}>
          <Form.Item
            name="adress"
            rules={[{ required: true, message: "Выберите адрес" }]}
          >
            <Select
              className={styles.select}
              placeholder="Выберите аптеку для доставки"
              allowClear
            >
              <Option className={styles.option} value="ул. Казаков, 85">
                ул. Казаков, 85
              </Option>
              <Option value="бульв. Ворошилова, 44">
                бульв. Ворошилова, 44
              </Option>
              <Option value="ул. Игровая, 74">ул. Игровая, 74</Option>
            </Select>
          </Form.Item>
        </Form>
      </div>
      <div className={styles.composition}>
        <div className={styles.compositionContainer}>
          <h2>Проверьте состав заказа</h2>
          <div className={styles.compGrid}>
            <CardMini
              pic={pic}
              title="Название препарата 1"
              dose="100 мг, 10 таб"
              price="280,90 ₽"
              quantity="1 шт."
            />
            <CardMini
              pic={pic}
              title="Название препарата 1"
              dose="100 мг, 10 таб"
              price="280,90 ₽"
              quantity="1 шт."
            />
            <CardMini
              pic={pic}
              title="Название препарата 1"
              dose="100 мг, 10 таб"
              price="280,90 ₽"
              quantity="1 шт."
            />
          </div>
          <p>
            Итоговая стоимость заказа: <span>1552 ₽</span>
          </p>
          <div className={styles.compDeliver}>
            <h2>Мы доставим заказ сюда:</h2>
            <div className={styles.deliverDetails}>
              <div className={styles.deliverAdress}>
                <img src={location} alt="location" />
                <p>пр. Тельмана, 110</p>
              </div>
              <div className={styles.deliverAdress}>
                <img src={time} alt="time" />
                <p>Пн-Вс 9:00-21:00</p>
              </div>
            </div>
            <Button
              type="submit"
              width="228px"
              text="Оформить заказ"
              lineHeight="50px"
              onClick={() => {
                setModalType("order");
                setVisible(true);
              }}
              fontSize="22px"
            />
          </div>
        </div>
      </div>
      <ModalCustom
        closeModal={() => {
          setModalType("");
          setVisible(false);
        }}
        visible={visible}
        type={modalType}
        switchType={setModalType}
        onCancel={() => {
          setModalType("");
          setVisible(false);
        }}
      />
    </>
  );
};

export default OrderMaking;
