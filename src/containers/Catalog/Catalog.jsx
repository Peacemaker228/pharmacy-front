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
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import ModalCustom from "../../components/Modal/Modal";
import { Form, Input, Select, Spin } from "antd";
import styles from "./Catalog.module.css";
import { useParams } from "react-router-dom";
import CustomPagination from "../../components/Pagination/Pagination";
import { GetCountryList } from "../../services/Country/GetCountryList";
import classNames from "classnames";

const Catalog = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const { Option } = Select;
  const { category_id } = useParams();
  const [modalType, setModalType] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(1);
  const [products, setProducts] = useState([]);
  const [basketId, setBasketId] = useState(-1);
  const [category, setCategory] = useState(category_id);
  const [click, setClick] = useState(false);
  const [fav, setFav] = useState([]);
  const [currentList, setCurrentList] = useState(1);
  const [categories, setCategories] = useState([]);
  const [country, setCountry] = useState([]);

  const getProducts = async (filters) => {
    try {
      const { data } = await GetListProduct(category, currentList, 12, filters);

      setTotal(data.total_records);
      setProducts(data.records);
    } catch (e) {
      throw new Error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [currentList]);

  useEffect(() => {
    if (isAuth) {
      GetListFavorites().then((res) => setFav(res.data));
      GetActiveBasket().then((res) => setBasketId(res.data.basket.ID));
    }
  }, [isAuth, click]);

  useEffect(() => {
    GetMainCategories().then((res) => {
      setCategories(res.data.filter((el) => el.name !== "Пустая категория"));
    });

    GetCountryList()
      .then((res) => setCountry(res.data))
      .catch((e) => {
        throw new Error(e);
      });
  }, []);

  const options = country.map((el, index) => {
    return (
      el.Country && (
        <Option key={index} value={el.Country}>
          {el.Country}
        </Option>
      )
    );
  });

  const categoriesOption = categories.map((el) => {
    return (
      <Option key={el.ID} value={el.ID}>
        {el.name}
      </Option>
    );
  });

  const onFinish = (values) => {
    delete values.category;
    getProducts(values);
  };

  return (
    <>
      <div className={classNames(styles.catalog, "loaderContainer")}>
        <div className={styles.catalogContainer}>
          <BreadcrumbComponent
            crumbs={[
              { path: "/", name: "Главная" },
              { path: "", name: "Каталог" },
            ]}
          />
          <h2>Каталог</h2>

          <div className={styles.catalogForm}>
            <Form className={styles.form} onFinish={onFinish}>
              <Form.Item className={styles.formItem} name="category">
                <Select
                  className={styles.select}
                  placeholder="Категория препарата"
                  onChange={(val) => setCategory(val)}
                  allowClear
                >
                  {categoriesOption}
                </Select>
              </Form.Item>

              <Form.Item className={styles.formItem} name="substance">
                <Input
                  placeholder="Действующее вещество"
                  className={styles.modalInput}
                />
              </Form.Item>

              <Form.Item className={styles.formItem} name="country">
                <Select
                  className={styles.select}
                  placeholder="Страна, производитель"
                  allowClear
                >
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
          {loading ? (
            <Spin className="loader" />
          ) : (
            <>
              {products.length !== 0 ? (
                <>
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
                  <CustomPagination
                    style={{ margin: "40px 0 20px", textAlign: "center" }}
                    pageSize={12}
                    page={currentList}
                    total={total}
                    setVal={setCurrentList}
                  />
                </>
              ) : (
                <Empty empty={empty} text="Нет подходящих результатов" />
              )}
            </>
          )}
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

export default Catalog;
