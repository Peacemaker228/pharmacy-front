import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import picMain from "../../assets/images/product/loratadin.png";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import pic1 from "../../assets/images/product/teva.png";
import pic2 from "../../assets/images/product/klaritin.png";
import pic3 from "../../assets/images/product/erius.png";
import styles from "./Product.module.css";

const Product = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.product}>
        <div className={styles.productContainer}>
          <img src={picMain} alt="picMain" />
          <div className={styles.description}>
            <h2 className={styles.title}>{"Лоратадин-Вертекс"}</h2>
            <h3 className={styles.dose}>{"10 мг, 30 таб"}</h3>
            <p className={styles.text}>
              Производитель: <span>{"Вертекс, Россия"}</span>
            </p>
            <p className={styles.text}>
              Действующее вещество: <span>{"Лоратадин"}</span>
            </p>
            <p className={styles.text}>
              Форма выпуска:
              <span>
                {"Таблетки плоскоциллиндрические, белого цвета, с фаской"}
              </span>
            </p>
            <p className={styles.text}>
              Условия отпуска из аптек: <span>{"Без рецепта"}</span>
            </p>
          </div>
          <button className={styles.btnHeart} onClick={() => ""}>
            <svg
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.501219 6.41641L0.501218 6.41639C0.450801 3.54372 1.96528 1.52254 4.00884 0.798268C6.0535 0.0736021 8.75449 0.606055 11.1366 3.12718L11.5 3.51184L11.8635 3.12717C14.2451 0.606374 16.9459 0.0736557 18.9905 0.798025C21.034 1.522 22.5487 3.5428 22.4988 6.41558C22.4535 9.02096 20.6701 11.7126 18.3108 14.0944C16.0736 16.3531 13.4034 18.2485 11.5 19.4152C9.59674 18.2487 6.92672 16.3535 4.68952 14.095C2.33034 11.7133 0.546818 9.02183 0.501219 6.41641Z"
                stroke="#ABABAB"
              />
            </svg>
          </button>
          <div className={styles.buy}>
            <h2 className={styles.price}>{"33,00 ₽"}</h2>
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
              // onClick={() => {
              //   setModalType(isAuth ? "feedback" : "auth");
              //   setVisible(true);
              // }}
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
              <span>Количество в упаковке: </span>10 шт.
            </p>
            <p className={styles.mainText}>
              <span>Производитель: </span>Вертекс, Россия
            </p>
          </div>
          <div className={styles.structure}>
            <h2 className={styles.mainTitle}>Состав</h2>
            <p className={styles.mainText}>1 таб.:</p>
            <p className={styles.mainText}>
              <span>Активные вещества: </span>лоратадин 10 мг
            </p>
            <p className={styles.mainText}>
              <span>Вспомогательные вещества: </span>лактоза, кальция стеарат,
              кремния диоксид коллоидный (аэросил), лудипресс.
            </p>
          </div>
          <div className={styles.farm}>
            <h2 className={styles.mainTitle}>Фармакологическое действие</h2>
            <p className={styles.mainText}>
              Фармгруппа: противоаллергическое средство - Н1-гистаминовых
              рецепторов блокатор. Фармдействие: Лоратадин - блокатор Н1
              -гистаминовых рецепторов (длительного действия). Ингибирует
              высвобождение гистамина и лейкотриена С4 из тучных клеток.
              Предупреждает развитие и облегчает течение аллергических реакций.
              <br />
              Обладает антигистаминным, противоаллергическим, противозудным и
              противоэкссудативным действием. Уменьшает проницаемость
              капилляров, предупреждает развитие отека тканей, снимает спазм
              гладкой мускулатуры. <br />
              Противоаллергический эффект развивается через 30 мин, достигает
              максимума через 8 -12 ч и длится 24 ч. Не влияет на ЦНС и не
              вызывает привыкания (т.к. не проникает через гематоэнцефалический
              барьер)
            </p>
          </div>
          <div className={styles.farm}>
            <h2 className={styles.mainTitle}>Показания</h2>
            <ul className={styles.farmList}>
              <li className={styles.listItems}>
                <p className={styles.mainText}>
                  — сезонный и круглогодичный аллергический ринит (в т.ч.
                  поллиноз);
                </p>
              </li>
              <li className={styles.listItems}>
                <p className={styles.mainText}>— аллергический конъюнктивит;</p>
              </li>
              <li className={styles.listItems}>
                <p className={styles.mainText}>
                  — крапивница (в т.ч. хроническая идиопатическая);
                </p>
              </li>
              <li className={styles.listItems}>
                <p className={styles.mainText}>— отек Квинке; </p>
              </li>
              <li className={styles.listItems}>
                <p className={styles.mainText}>
                  — аллергические зудящие дерматозы;
                </p>
              </li>
              <li className={styles.listItems}>
                <p className={styles.mainText}>
                  — псевдоаллергические реакции;
                </p>
              </li>
              <li className={styles.listItems}>
                <p className={styles.mainText}>
                  — аллергические реакции на укусы насекомых;
                </p>
              </li>
              <li className={styles.listItems}>
                <p className={styles.mainText}>— зуд различной этиологии.</p>
              </li>
            </ul>
          </div>
          <div className={styles.course}>
            <h2 className={styles.mainTitle}>Показания</h2>
            <p className={styles.mainText}>
              Внутрь. Взрослым и детям старше 12 лет: по 10 мг (1 таблетка) 1
              раз/сут. Суточная доза 10 мг.
            </p>
            <p className={styles.mainText}>
              Детям от 3-х до 12-ти лет по 5 мг (1/2 таблетки) 1 раз/сут.
              Суточная доза - 5 мг.
            </p>
            <p className={styles.mainText}>
              Детям с массой тела более 30 кг - по 10 мг препарата 1 раз/сут.
              Суточная доза - 10 мг.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.analog}>
        <div className={styles.analogContainer}>
          <h2 className={styles.mainTitle}>
            Аналоги препарата Лоратадин-Вертекс
          </h2>
          <div className={styles.analogCard}>
            <Card
              pic={pic1}
              title="Название препарата 1"
              text="Краткое описание товара Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
              span="100 мг, 10 таб"
              price="280,90 ₽"
            />
            <Card
              pic={pic1}
              title="Название препарата 1"
              text="Краткое описание товара Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
              span="100 мг, 10 таб"
              price="280,90 ₽"
            />
            <Card
              pic={pic1}
              title="Название препарата 1"
              text="Краткое описание товара Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
              span="100 мг, 10 таб"
              price="280,90 ₽"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
