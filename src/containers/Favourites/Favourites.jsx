import React from "react";
import BreadcrumbComponent from "../../components/Breadcrumb/Breadcrumb";
import Card from "../../components/Card/Card";
import Empty from "../../components/Empty/Empty";
import empty from "../../assets/images/favourites/empty_favourites.png";
import { useNavigate } from "react-router-dom";
import styles from "./Favourites.module.css";

const Favourites = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.favourites}>
        <div className={styles.favouritesContainer}>
          <BreadcrumbComponent
            crumbs={[
              { path: "/", name: "Главная" },
              { path: "/account", name: "Личный кабинет" },
              { path: "", name: "Избранное" },
            ]}
          />
          <h2>Избранное</h2>
          <div className={styles.favouritesGrid}>{/* <Card /> */}</div>

          <Empty
            isBtn={true}
            empty={empty}
            text="В Вашем избранном пока что пусто"
            btnText="Перейти в каталог"
            btnWidth="250px"
            lineHeightBtn="50px"
            onClickBtn={() => navigate("/catalog")}
          />
        </div>
      </div>
    </>
  );
};

export default Favourites;
