import React from "react";
import BreadcrumbComponent from "../../components/Breadcrumb/Breadcrumb";
import Empty from "../../components/Empty/Empty";
import empty from "../../assets/images/catalog/empty_catalog.png";
import { Form, Input, Select } from "antd";
// import { Option } from "antd/lib/mentions";
import styles from "./Catalog.module.css";
import Button from "../../components/Button/Button";

const Catalog = () => {
  const { Option } = Select;

  return (
    <>
      <div className={styles.catalog}>
        <div className={styles.catalogContainer}>
          <BreadcrumbComponent
            crumbs={[
              { path: "/", name: "Главная" },
              { path: "", name: "Каталог" },
            ]}
          />
          <h2>Каталог</h2>
          <div className={styles.catalogForm}>
            <Form className={styles.form} onFinish={"onFinish"}>
              <Form.Item
                className={styles.formItem}
                name="category"
                // rules={[{ required: true, message: "Выберите адрес" }]}
              >
                <Select
                  className={styles.select}
                  placeholder="Категория препарата"
                  allowClear
                >
                  <Option className={styles.option} value="Анестезия">
                    Анестезия
                  </Option>
                  <Option value="Антибиотики">Антибиотики</Option>
                  <Option value="Боль, температура">Боль, температура</Option>
                </Select>
              </Form.Item>

              <Form.Item
                className={styles.formItem}
                name="substance"
                // rules={[{ required: true, message: "Введите отчество" }]}
              >
                <Input
                  placeholder="Действующее вещество"
                  className={styles.modalInput}
                />
              </Form.Item>

              <Form.Item
                className={styles.formItem}
                name="country"
                // rules={[{ required: true, message: "Выберите адрес" }]}
              >
                <Select
                  className={styles.select}
                  placeholder="Страна, производитель"
                  allowClear
                >
                  <Option className={styles.option} value="Россия">
                    Россия
                  </Option>
                  <Option value="Германия">Германия</Option>
                  <Option value="Великобритания">Великобритания</Option>
                </Select>
              </Form.Item>
              <Button
                type="submit"
                text="Применить"
                lineHeight="45px"
                width="150px"
              />
            </Form>
          </div>
          <div className={styles.catalogGrid}></div>

          <Empty empty={empty} text="Нет подходящих результатов" />
        </div>
      </div>
    </>
  );
};

export default Catalog;
