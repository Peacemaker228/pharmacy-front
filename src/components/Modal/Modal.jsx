import React, { useCallback, useEffect } from "react";
import { Form, Input, message, Modal, notification, Typography } from "antd";
import Button from "../Button/Button";
import styles from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Login,
  Registration,
  resetNotificationConfig,
} from "../../store/reducers/AuthReducer";

const AuthModal = ({ switchType, closeModal }) => {
  const { errorLogin, errorStatus, loginSuccess } = useSelector(
    (state) => state.auth
  );

  const { Text } = Typography;
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginSuccess) {
      message.success("Вы успешно вошли!");
      closeModal();
    }
  }, [loginSuccess]);

  const onFinish = (values) => {
    dispatch(Login(values));
  };

  return (
    <div className={styles.modal}>
      <h3 className={styles.modalTitle}>Вход</h3>
      <Form onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Введите e-mail" },
            { type: "email", message: "Не соответствует типу e-mail" },
          ]}
        >
          <Input placeholder="E-mail" className={styles.modalInput} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Введите пароль" }]}
        >
          <Input.Password placeholder="Пароль" className={styles.modalInput} />
        </Form.Item>
        {errorLogin && (
          <Form.Item>
            <Text type="danger">
              {errorStatus === 401 && "Неверный e-mail или пароль"}
            </Text>
          </Form.Item>
        )}
        <Form.Item>
          <Button type="submit" width="300px" lineHeight="48px" text="Войти" />
        </Form.Item>
      </Form>

      <span className={styles.modalText} onClick={() => switchType("reg")}>
        Создать аккаунт
      </span>
    </div>
  );
};

const RegModal = ({ switchType, closeModal }) => {
  const dispatch = useDispatch();
  const { message, type } = useSelector((state) => state.auth);

  const openNotificationWithIcon = useCallback(
    (notificationType) => {
      notification[notificationType]({
        message: "Registation status",
        description: message,
      });
    },
    [message]
  );

  useEffect(() => {
    if (type !== "info") {
      openNotificationWithIcon(type);
    }

    if (type === "success") {
      closeModal();
    }
  }, [openNotificationWithIcon, type]);

  const onFinish = (values) => {
    delete values["confirm"];
    dispatch(Registration(values));
    dispatch(resetNotificationConfig());
  };

  return (
    <div className={styles.modal}>
      <h3 className={styles.modalTitle}>Регистрация</h3>
      <Form onFinish={onFinish}>
        <Form.Item
          name="login"
          rules={[{ required: true, message: "Введите логин" }]}
        >
          <Input placeholder="Логин" className={styles.modalInput} />
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
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Введите пароль" }]}
        >
          <Input.Password placeholder="Проль" className={styles.modalInput} />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Повторите пароль" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Пароли не совпадают"));
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Повторите пароль"
            className={styles.modalInput}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="submit"
            width="300px"
            lineHeight="48px"
            text="Зарегистрироваться"
          />
        </Form.Item>
      </Form>

      <span className={styles.modalText} onClick={() => switchType("auth")}>
        Уже есть аккаунт?
      </span>
    </div>
  );
};

const FeedbackModal = () => {
  return (
    <div className={styles.modal}>
      <h3 className={styles.modalTitle}>Оставить отзыв</h3>
      <Form>
        <Form.Item name="login">
          <Input placeholder="Логин" className={styles.modalInput} />
        </Form.Item>
        <Form.Item name="title">
          <Input.TextArea placeholder="Введите текст" />
        </Form.Item>

        <Form.Item>
          <Button
            type="submit"
            width="300px"
            lineHeight="48px"
            text="Отправить"
          />
        </Form.Item>
      </Form>
    </div>
  );
};

const ModalCustom = ({ visible, type, switchType, onCancel, closeModal }) => {
  const content = () => {
    switch (type) {
      case "auth":
        return <AuthModal switchType={switchType} closeModal={closeModal} />;
      case "reg":
        return <RegModal switchType={switchType} closeModal={closeModal} />;
      case "feedback":
        return <FeedbackModal />;
      default:
        return;
    }
  };

  return (
    <Modal
      visible={visible}
      width={type === "feedback" ? 600 : 550}
      footer={false}
      onCancel={onCancel}
      destroyOnClose
    >
      {content()}
    </Modal>
  );
};

export default ModalCustom;
