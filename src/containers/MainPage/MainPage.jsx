import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getFeedbackList } from "../../services/Feedback/getFeedbackList";
import { NavHashLink } from "react-router-hash-link";
import ModalCustom from "../../components/Modal/Modal";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Feedback from "../../components/Feedback/Feedback";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import photo from "../../assets/images/main_page/Фото.png";
import anaferon from "../../assets/images/main_page/anaferon.png";
import loc from "../../assets/images/main_page/Локация.png";
import best from "../../assets/images/main_page/Лучшая.png";
import head from "../../assets/images/main_page/Наушники.png";
import pic1 from "../../assets/images/main_page/portrait-of-female-pharmacist-in-drug-store-standing-in-front-of-shelves-with-medications 1.png";
import pic2 from "../../assets/images/main_page/close-up-of-cash-register-in-pharmacy 1.png";
import pic3 from "../../assets/images/main_page/high-angle-of-foils-of-pills 1.png";
import pic4 from "../../assets/images/main_page/medicine-pharmaceutics-health-care-and-people-concept-female-pharmacist-taking-medications-from-the-shelf 1.png";
import pic5 from "../../assets/images/main_page/woman-working-at-pharmacy-and-wearing-coat 1.png";
import pic6 from "../../assets/images/main_page/closeup-view-of-pharmacist-hand-taking-medicine-box-from-the-shelf-in-drug-store 1.png";
import pic7 from "../../assets/images/main_page/pharmacist-in-white-uniform-holding-medicines-for-cardiovascular-disease 1.png";
import pic8 from "../../assets/images/main_page/various-pills-on-wooden-spoon 1.png";
import { Space } from "antd";
import Search from "antd/lib/input/Search";
import { GetMainCategories } from "../../services/Catalog/GetMainGategories";
import styles from "../MainPage/MainPage.module.css";
import Filter from "../../components/Filter/Filter";

const MainPage = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const [modalType, setModalType] = useState("");
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(1);
  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState([]);

  const getFeedbacks = async () => {
    const { data } = await getFeedbackList(current);

    setCards(data.records);
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  useEffect(() => {
    GetMainCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  // const navigate = useNavigate();

  return (
    <>
      {/* <NavHashLink smooth to="/">
        OPOPOPOPOPOPOP
      </NavHashLink> */}
      <main>
        <div className={styles.mainContainer}>
          <div className={styles.description}>
            <h2 className={styles.title}>ФармаДон</h2>
            <p className={styles.textMain}>Ваша любимая сеть аптек</p>
            <div className={styles.textImage}>
              <img src={loc} alt="" />
              <p className={styles.text}>
                быстрая доставка препаратов в ближайшую к Вам аптеку нашей сети
              </p>
            </div>
            <div className={styles.textImage}>
              <img src={best} alt="" />
              <p className={styles.text}>
                демократичные цены на весь ассортимент
              </p>
            </div>
            <div className={styles.textImage}>
              <img src={head} alt="" />
              <p className={styles.text}>
                ответ оператора в течение 15-ти минут для подтверждения заказа
              </p>
            </div>
          </div>
          <img src={photo} alt="woman" />
        </div>
      </main>
      <div className={styles.filter}>
        <div className={styles.filterContainer}>
          <h2 className={styles.filterTitle}>Наши лучшие товары</h2>
          <div className={styles.filterCategory}>
            <h3>Категории/группы препаратов</h3>
            <Space direction="vertical">
              <Search
                className={styles.filterSearch}
                placeholder="Найти"
                // onSearch
                style={{ width: 200 }}
              />
            </Space>
          </div>
          <div className={styles.filterItems}>
            {categories.map((el) => (
              <Filter name={el.name} onClick={() => console.log("test")} />
            ))}
          </div>
          {/*  */}
        </div>
      </div>
      <div className={styles.backMain}>
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <Card
              onClick={() => {
                setModalType(isAuth && "status");
                setVisible(isAuth && true);
              }}
              pic={anaferon}
              title="Название препарата 1"
              text="Краткое описание товара Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
              span="100 мг, 10 таб"
              price="280,90 ₽"
            />
            <Card
              onClick={() => {
                setModalType(isAuth && "order");
                setVisible(isAuth && true);
              }}
              pic={anaferon}
              title="Название препарата 1"
              text="Краткое описание товара Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
              span="100 мг, 10 таб"
              price="280,90 ₽"
            />
            <Card
              onClick={() => {
                setModalType(!isAuth && "auth");
                setVisible(!isAuth && true);
              }}
              pic={anaferon}
              title="Название препарата 1"
              text="Краткое описание товара Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
              span="100 мг, 10 таб"
              price="280,90 ₽"
            />
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.aboutContainer}>
            <h2 className={styles.commonTitle}>О нас</h2>
            <p className={styles.aboutText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget est
              suscipit varius pellentesque purus sed gravida et mauris. Netus
              sed arcu integer tincidunt a felis, diam eu. Imperdiet porta
              volutpat lobortis diam velit pellentesque in nisl. Donec faucibus
              lacus dui turpis ullamcorper lacus risus at.
            </p>
            <div className={styles.grid}>
              <div className={styles.gridContainer}>
                <img className={styles.one} src={pic1} alt="pic1" />
                <img className={styles.two} src={pic2} alt="pic2" />
                <img className={styles.three} src={pic3} alt="pic3" />
                <img className={styles.four} src={pic4} alt="pic4" />
                <img className={styles.five} src={pic5} alt="pic5" />
                <img className={styles.six} src={pic6} alt="pic6" />
                <img className={styles.seven} src={pic7} alt="pic7" />
                <img className={styles.eight} src={pic8} alt="pic8" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.feedback}>
          <div className={styles.feedbackContainer}>
            <h2 className={styles.commonTitle}>Отзывы</h2>
            <div className={styles.feedbackGrid}>
              {cards.map((el) => (
                <Feedback
                  text={el.Title}
                  date={el.created}
                  nickname={el.Login}
                />
              ))}
            </div>
            <Button
              onClick={() => {
                //
                setModalType(isAuth ? "feedback" : "auth");
                setVisible(true);
              }}
              type="submit"
              width="190px"
              margin="30px 0 0 0"
              text="Оставить отзыв"
              lineHeight="40px"
            />
          </div>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contactsContainer}>
            <h2 className={styles.commonTitle}>Контакты</h2>
            {/*  */}
          </div>
        </div>
      </div>
      <ModalCustom
        getFeedbacks={getFeedbacks}
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

export default MainPage;
