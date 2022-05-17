import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import photo from "../../assets/images/main_page/Фото.png";
import anaferon from "../../assets/images/main_page/anaferon.png";
import loc from "../../assets/images/main_page/Локация.png";
import best from "../../assets/images/main_page/Лучшая.png";
import head from "../../assets/images/main_page/Наушники.png";
import Card from "../../components/Card/Card";
import styles from "../MainPage/MainPage.module.css";
import Feedback from "../../components/Feedback/Feedback";
import Button from "../../components/Button/Button";

const MainPage = () => {
  return (
    <div>
      <Header type="header" />
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
          {/*  */}
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardContainer}>
          <Card
            pic={anaferon}
            title="Название препарата 1"
            text="Название препарата 1"
            span="100 мг, 10 таб"
            price="280,90 ₽"
          />
          <Card
            pic={anaferon}
            title="Название препарата 1"
            text="Название препарата 1"
            span="100 мг, 10 таб"
            price="280,90 ₽"
          />
          <Card
            pic={anaferon}
            title="Название препарата 1"
            text="Название препарата 1"
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
            suscipit varius pellentesque purus sed gravida et mauris. Netus sed
            arcu integer tincidunt a felis, diam eu. Imperdiet porta volutpat
            lobortis diam velit pellentesque in nisl. Donec faucibus lacus dui
            turpis ullamcorper lacus risus at.
          </p>
          <div className={styles.grid}>
            <div className={styles.gridContainer}>{/*  */}</div>
          </div>
        </div>
      </div>
      <div className={styles.feedback}>
        <div className={styles.feedbackContainer}>
          <h2 className={styles.commonTitle}>Отзывы</h2>
          <div className={styles.feedbackGrid}>
            <Feedback
              nickname="hk.123MN"
              date="12.01.2020"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget est suscipit varius pellentesque purus sed gravida et mauris."
            />
            <Feedback
              nickname="hk.123MN"
              date="12.01.2020"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget est suscipit varius pellentesque purus sed gravida et mauris."
            />
            <Feedback
              nickname="hk.123MN"
              date="12.01.2020"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget est suscipit varius pellentesque purus sed gravida et mauris."
            />
            <Feedback
              nickname="hk.123MN"
              date="12.01.2020"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget est suscipit varius pellentesque purus sed gravida et mauris."
            />
            <Feedback
              nickname="hk.123MN"
              date="12.01.2020"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget est suscipit varius pellentesque purus sed gravida et mauris."
            />
            <Feedback
              nickname="hk.123MN"
              date="12.01.2020"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget est suscipit varius pellentesque purus sed gravida et mauris."
            />
          </div>
          <Button
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
      <Footer />
    </div>
  );
};

export default MainPage;
