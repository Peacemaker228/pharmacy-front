import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import ModalCustom from "../../components/Modal/Modal";
import { useSelector } from "react-redux";
import { GetOwnProduct } from "../../services/Product/GetOwnProduct";
import { useFavourite } from "../../hooks/useFavourite";
import styles from "./Product.module.css";
import { GetListFavorites } from "../../services/Favorites/GetListFavorites";

const Product = () => {
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const { isAuth } = useSelector((state) => state.auth);
  const [product, setProduct] = useState({});
  const [favProduct, setFavProduct] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (isAuth) {
      GetListFavorites()
        .then((res) => setFavProduct(res.data.map((el) => el.product_id)))
        .catch((e) => {
          throw new Error(e);
        });
    }
  }, [isAuth, click]);

  const fav = useFavourite(
    id,
    favProduct,
    click,
    setClick,
    () => {
      setModalType("");
      setVisible(false);
    }
  );

  const getProduct = async () => {
    try {
      const { data } = await GetOwnProduct(id);

      setProduct(data);
    } catch (e) {
      throw new Error(e);
    }
  };

  useLayoutEffect(() => {
    getProduct();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.product}>
        <div className={styles.productContainer}>
          <img
            src={product.img_href}
            alt="picMain"
            className={styles.picMain}
          />

          <div className={styles.description}>
            <h2 className={styles.title}>{product.name}</h2>
            <p className={styles.text}>
              Производитель:<span>{product.manufacturer}</span>
            </p>
            <p className={styles.text}>
              Действующее вещество:<span>{product.active_substance}</span>
            </p>
            <p className={styles.text}>
              Форма выпуска:
              <span>{product.release_form}</span>
            </p>
            <p className={styles.text}>
              Условия отпуска из аптек:<span>{product.conditions}</span>
            </p>
          </div>
          {fav}

          <div className={styles.buy}>
            <h2 className={styles.price}>{product.price} ₽</h2>
            <div className={styles.counter}>
              <button
                className={styles.counterBtn}
                onClick={() => {
                  if (count > 0) {
                    setCount(count - 1);
                  }
                }}
              >
                -
              </button>
              <span className={styles.counterText}>{count}</span>
              <button
                className={styles.counterBtn}
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
            <Button
              onClick={() => {
                setModalType(!isAuth && "auth");
                setVisible(!isAuth && true);
              }}
              margin="20px 0 20px 0"
              isBasket="true"
              type="submit"
              width="170px"
              text="В корзину"
              lineHeight="45px"
              color="#FFFFFF"
              border="none"
              background="#136EEF "
            />
            <p className={styles.available}>
              {"В наличии во всех аптеках сети"}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.about}>
            <h2 className={styles.mainTitle}>Описание</h2>
            <p className={styles.mainText}>
              Производитель:
              <span> {product.manufacturer}</span>
            </p>
          </div>
          <div className={styles.structure}>
            <h2 className={styles.mainTitle}>Состав</h2>
            <p className={styles.mainText}>
              Активные вещества:
              <span> {product.active_substance}</span>
            </p>
          </div>
          <div className={styles.farm}>
            <h2 className={styles.mainTitle}>Фармакологическое действие</h2>
            <p className={styles.mainText}>{product.pharmachologic_effect}</p>
          </div>
          <div className={styles.farm}>
            <h2 className={styles.mainTitle}>Показания</h2>
            <ul className={styles.farmList}>
              {product.indications?.split("\n").map((el) => {
                return el && <li className={styles.listItems}>{el}</li>;
              })}
            </ul>
          </div>
          <div className={styles.farm}>
            <h2 className={styles.mainTitle}>Курс приема и дозировка</h2>
            <p className={styles.farmText}>{product.dosage}</p>
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

export default Product;
