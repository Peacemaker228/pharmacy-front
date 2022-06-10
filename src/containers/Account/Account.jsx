import { Badge } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadcrumbComponent from "../../components/Breadcrumb/Breadcrumb";
import { GetActiveBasket } from "../../services/Basket/GetActiveBasket";
import { GetListFavorites } from "../../services/Favorites/GetListFavorites";
import styles from "./Account.module.css";
const Account = () => {
  const navigate = useNavigate();
  const [fav, setFav] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    GetListFavorites().then((res) => setFav(res.data));
    GetActiveBasket().then((res) =>
      setProducts(res.data.basket.basket_contents)
    );
  }, []);

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
          <Badge
            count={products.length}
            size="large"
            showZero
            color="#136EEF"
            offset={[-25, 0]}
          >
            <button
              onClick={() => navigate("/myorder")}
              className={styles.titleBtn}
            >
              <p>Мои заказы</p>
            </button>
          </Badge>
          <Badge
            count={fav.length}
            size="large"
            showZero
            color="#136EEF"
            offset={[-25, 0]}
          >
            <button
              onClick={() => navigate("/favourites")}
              className={styles.titleBtn}
            >
              <p>Избранное</p>
            </button>
          </Badge>

          <button onClick={() => navigate("/edit")} className={styles.titleBtn}>
            <p>Изменить личные данные</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
