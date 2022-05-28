import React, { useEffect, useState } from "react";
import { Popover, Row, Col } from "antd";
import { GetMainCategories } from "../../services/Catalog/GetMainGategories";
import classNames from "classnames";
import styles from "./Catalog.module.css";

const CatalogContent = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    GetMainCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div className={styles.catContainer}>
      <Row gutter={[20, 20]}>
        {categories.map((el) => {
          return (
            <Col key={el.ID} span={6}>
              <h3>{el.name}</h3>
              <Row>
                {el.categories.map((elem) => {
                  return (
                    <Col key={elem.ID} span={24}>
                      <p onClick={""}>{elem.name}</p>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

const Catalog = ({ type }) => {
  return (
    <Popover
      align={15}
      placement="bottom"
      content={<CatalogContent />}
      trigger="click"
      className={classNames(
        styles.items,
        type === "header" && styles.catalog,
        styles.link,

        type === "header" ? styles.blue : styles.white
      )}
    >
      Каталог
    </Popover>
  );
};

export default Catalog;
