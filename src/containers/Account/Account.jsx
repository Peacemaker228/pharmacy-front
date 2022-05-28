import { Badge } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import BreadcrumbComponent from "../../components/Breadcrumb/Breadcrumb";
import styles from "./Account.module.css";
const Account = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.account}>
      <div className={styles.accountContainer}>
        <BreadcrumbComponent
          crumbs={[
            { path: "/", name: "Главная" },
            { path: "", name: "Личный кабинет" },
          ]}
        />
        <h2>Личный кабинет</h2>
        <div className={styles.blocks}>
          <Badge count={5} size="large" color="#136EEF" offset={[-25, 0]}>
            <button
              onClick={() => navigate("/myorder")}
              className={styles.titleBtn}
            >
              <p>Мои заказы</p>
            </button>
          </Badge>
          <Badge count={5} size="large" color="#136EEF" offset={[-25, 0]}>
            <button
              onClick={() => navigate("/favourites")}
              className={styles.titleBtn}
            >
              <p>Избранное</p>
            </button>
          </Badge>
          <Badge count={5} size="large" color="#136EEF" offset={[-25, 0]}>
            <button
              onClick={() => navigate("/edit")}
              className={styles.titleBtn}
            >
              <p>Изменить личные данные</p>
            </button>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Account;
