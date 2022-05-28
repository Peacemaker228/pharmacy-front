import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./CardAdmin.module.css";

const CardAdmin = ({
  pic,
  onClick,
  title,
  dose,
  name,
  surname,
  patronymic,
  address,
  quantity,
  status,
  price,
  date,
  text,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.cardAdminContainer}>
      <div className={styles.adminMain}>
        <div className={styles.adminLeft}>
          <h3 onClick={() => navigate("/product")}>{title}</h3>
          <span>{dose}</span>
          <p>
            <span>Дата совершения заказа: </span>
            {date}
          </p>
          <p>
            <span>ФИО клиента: </span>
            {name} {surname} {patronymic}
          </p>
          <p>
            <span>Адрес выбранной аптеки: </span>
            {address}
          </p>
          <p>
            <span>Статус: </span>
            {status}
          </p>
          <Button
            type="submit"
            width="170px"
            text="Сменить статус"
            lineHeight="33px"
            fontSize="16px"
            onClick={onClick}
          />
        </div>
        <div className={styles.adminRight}>
          <img onClick={() => navigate("/product")} src={pic} alt="" />
          <h3>{price}</h3>
          <p>{quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default CardAdmin;
