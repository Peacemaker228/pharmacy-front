import React, { useEffect, useState } from "react";
import { GetListProduct } from "../../services/Product/GetListProduct";
import { useSelector } from "react-redux";
import { GetListFavorites } from "../../services/Favorites/GetListFavorites";
import { GetActiveBasket } from "../../services/Basket/GetActiveBasket";
import { GetMainCategories } from "../../services/Catalog/GetMainGategories";
import { AddProduct } from "../../services/Product/AddProduct";
import BreadcrumbComponent from "../../components/Breadcrumb/Breadcrumb";
import Empty from "../../components/Empty/Empty";
import empty from "../../assets/images/catalog/empty_catalog.png";
// import { Option } from "antd/lib/mentions";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import ModalCustom from "../../components/Modal/Modal";
import { Form, Input, Pagination, Select } from "antd";
import styles from "./Catalog.module.css";
import { useParams } from "react-router-dom";
import { current } from "@reduxjs/toolkit";

const Catalog = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const { Option } = Select;
  const { category_id } = useParams();
  const [modalType, setModalType] = useState("");
  const [visible, setVisible] = useState(false);
  const [total, setTotal] = useState(1);
  const [products, setProducts] = useState([]);
  const [basketId, setBasketId] = useState(-1);
  const [category, setCategory] = useState(category_id);
  const [click, setClick] = useState(false);
  const [fav, setFav] = useState([]);
  const [currentList, setCurrentList] = useState(1);
  const [categories, setCategories] = useState([]);

  // const [country, setCountry] = useState();

  const getProducts = async () => {
    const { data } = await GetListProduct(category, 1, 12);

    // console.log(category);

    setTotal(data.total_records);
    setProducts(data.records);
  };

  useEffect(() => {
    getProducts();
  }, [category, currentList]);

  useEffect(() => {
    GetListFavorites().then((res) => setFav(res.data));
    GetActiveBasket().then((res) => setBasketId(res.data.basket.ID));
  }, [isAuth, click]);

  useEffect(() => {
    GetMainCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  const uniq = [...new Set(products.map((el) => JSON.stringify(el)))];

  const res = Array.from(uniq).map((e) => JSON.parse(e));

  const options = res.map((el) => {
    return (
      <Option key={el.ID} value={el.ID}>
        {el.country}
      </Option>
    );
  });

  console.log(options);

  const categoriesOption = categories.map((el) => {
    return (
      <Option key={el.ID} value={el.ID}>
        {el.name}
      </Option>
    );
  });

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
                  {/* <Option className={styles.option} value="Анестезия">
                    Анестезия
                  </Option>
                  <Option value="Антибиотики">Антибиотики</Option>
                  <Option value="Боль, температура">Боль, температура</Option> */}
                  {categoriesOption}
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
                  {/* <Option className={styles.option} value="Россия">
                    Россия
                  </Option>
                  <Option value="Германия">Германия</Option>
                  <Option value="Великобритания">Великобритания</Option> */}
                  {options}
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
          <div className={styles.catalogGrid}>
            {products.map((el) => {
              return (
                <Card
                  key={el.ID}
                  id={el.ID}
                  favProduct={fav.map((el) => el.product_id)}
                  onClick={() => {
                    if (isAuth) {
                      AddProduct(basketId, el.ID);
                    } else {
                      setModalType("auth");
                      setVisible(true);
                    }
                  }}
                  click={click}
                  iconClick={() => {
                    setModalType("auth");
                    setVisible(true);
                  }}
                  setClick={setClick}
                  pic={el.img_href}
                  title={el.name}
                  text={el.description}
                  price={el.price}
                />
              );
            })}
          </div>
          <Pagination
            style={{ margin: "40px 0 0", textAlign: "center" }}
            pageSize={12}
            total={total}
            onChange={(value) => setCurrentList(value)}
          />
        </div>
        <Empty empty={empty} text="Нет подходящих результатов" />
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

export default Catalog;
