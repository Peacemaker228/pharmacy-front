import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "../../components/Header/Header.module.css";
import Button from "../Button/Button";
import classNames from "classnames";

const Header = ({ type }) => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <Logo type={type} />
        <nav className={styles.menu}>
          <ul className={styles.list}>
            <li className={styles.items}>
              <NavLink
                to=""
                className={classNames(
                  styles.link,
                  type === "header" ? styles.blue : styles.white
                )}
              >
                Каталог
              </NavLink>
            </li>
            <li className={styles.items}>
              <NavLink
                to=""
                className={classNames(
                  styles.link,
                  type === "header" ? styles.blue : styles.white
                )}
              >
                О нас
              </NavLink>
            </li>
            <li className={styles.items}>
              <NavLink
                to=""
                className={classNames(
                  styles.link,
                  type === "header" ? styles.blue : styles.white
                )}
              >
                Отзывы
              </NavLink>
            </li>
            <li className={styles.items}>
              <NavLink
                to=""
                className={classNames(
                  styles.link,
                  type === "header" ? styles.blue : styles.white
                )}
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
        {type === "header" && (
          <nav className={styles.profile}>
            <ul className={styles.profileList}>
              <li className={styles.profileItems}>
                <NavLink to="" className={styles.profileLink}>
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.50189 17L16.4339 10.1484C18.6307 7.97709 19.4737 5.48438 18.7424 3.31312C18.1558 1.56903 16.643 0.317915 14.7954 0.0526698C12.867 -0.224371 10.9719 0.59955 9.49952 2.33433C8.02949 0.602023 6.13435 -0.224186 4.2036 0.0526698C2.35355 0.317919 0.84077 1.56903 0.256684 3.31312C-0.472353 5.48668 0.368335 7.97713 2.56512 10.1484L9.50189 17ZM1.38457 3.67905C1.82871 2.35756 2.97572 1.41147 4.37684 1.20977C4.56204 1.1839 4.74493 1.16981 4.93014 1.16981C6.431 1.16981 7.89391 2.04301 9.01488 3.62979L9.50172 4.31763L9.98628 3.62996C11.2449 1.84835 12.9358 0.968114 14.6244 1.20997C16.0281 1.41185 17.1751 2.35776 17.6167 3.67925C18.201 5.4163 17.4623 7.4725 15.5934 9.31739L9.50189 15.3428L3.40574 9.31949C1.5391 7.47208 0.80061 5.41588 1.38491 3.67883L1.38457 3.67905Z"
                      fill="#064D8D"
                    />
                  </svg>
                </NavLink>
              </li>
              <li className={styles.profileItems}>
                <NavLink to="" className={styles.profileLink}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 9H17.21L12.83 2.44C12.64 2.16 12.32 2 12 2C11.68 2 11.36 2.16 11.17 2.45L6.79 9H2C1.45 9 1 9.45 1 10C1 10.09 1 10.18 1.04 10.27L3.58 19.54C3.81 20.38 4.58 21 5.5 21H18.5C19.42 21 20.19 20.38 20.43 19.54L22.97 10.27L23 10C23 9.45 22.55 9 22 9ZM12 4.8L14.8 9H9.2L12 4.8ZM18.5 19H5.5L3.31 11H20.7L18.5 19ZM12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13Z"
                      fill="#064D8D"
                    />
                  </svg>
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
        <div className={styles.buttons}>
          <Button
            type="submit"
            width="70px"
            text="Войти"
            lineHeight="30px"
            margin="0 15px 0 0"
          />
          <Button
            type="submit"
            width="120px"
            text="Регистрация"
            lineHeight="30px"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
