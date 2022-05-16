import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../components/Logo/Logo.module.css";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")}>
      <div className={styles.logo}>
        <svg
          width="163"
          height="60"
          viewBox="0 0 163 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M73.1011 22V36H74.8011V22H73.1011ZM79.2811 29C79.2811 29.8133 79.0811 30.5 78.6811 31.06C78.2811 31.6067 77.7278 32.02 77.0211 32.3C76.3144 32.5667 75.5011 32.7 74.5811 32.7H73.3211C72.4011 32.7 71.5878 32.5667 70.8811 32.3C70.1744 32.02 69.6211 31.6067 69.2211 31.06C68.8211 30.5 68.6211 29.8133 68.6211 29C68.6211 28.1733 68.8211 27.4867 69.2211 26.94C69.6211 26.3933 70.1744 25.9867 70.8811 25.72C71.5878 25.44 72.4011 25.3 73.3211 25.3H74.5811C75.5011 25.3 76.3144 25.44 77.0211 25.72C77.7278 25.9867 78.2811 26.3933 78.6811 26.94C79.0811 27.4867 79.2811 28.1733 79.2811 29ZM80.9811 29C80.9811 27.8667 80.7011 26.9 80.1411 26.1C79.5944 25.3 78.8344 24.6867 77.8611 24.26C76.9011 23.82 75.8078 23.6 74.5811 23.6H73.3211C72.0944 23.6 70.9944 23.82 70.0211 24.26C69.0611 24.6867 68.3011 25.3 67.7411 26.1C67.1944 26.9 66.9211 27.8667 66.9211 29C66.9211 30.12 67.1944 31.0867 67.7411 31.9C68.3011 32.7 69.0611 33.32 70.0211 33.76C70.9944 34.1867 72.0944 34.4 73.3211 34.4H74.5811C75.8078 34.4 76.9011 34.1867 77.8611 33.76C78.8344 33.32 79.5944 32.7 80.1411 31.9C80.7011 31.0867 80.9811 30.12 80.9811 29ZM84.0052 33.3C84.0052 32.9267 84.0918 32.6067 84.2652 32.34C84.4385 32.0733 84.6985 31.8667 85.0452 31.72C85.4052 31.5733 85.8518 31.5 86.3852 31.5C86.9718 31.5 87.4985 31.58 87.9652 31.74C88.4318 31.8867 88.8918 32.12 89.3452 32.44V31.5C89.2518 31.38 89.0785 31.2267 88.8252 31.04C88.5718 30.84 88.2318 30.6667 87.8052 30.52C87.3918 30.36 86.8918 30.28 86.3052 30.28C85.5052 30.28 84.8118 30.4067 84.2252 30.66C83.6385 30.9 83.1852 31.2467 82.8652 31.7C82.5452 32.1533 82.3852 32.7067 82.3852 33.36C82.3852 33.9867 82.5252 34.5133 82.8052 34.94C83.0985 35.3533 83.4852 35.6667 83.9652 35.88C84.4452 36.0933 84.9718 36.2 85.5452 36.2C86.1852 36.2 86.7652 36.0933 87.2852 35.88C87.8052 35.6533 88.2185 35.3333 88.5252 34.92C88.8452 34.4933 89.0052 33.9867 89.0052 33.4L88.6852 32.4C88.6852 32.9733 88.5652 33.4333 88.3252 33.78C88.0985 34.1267 87.7785 34.38 87.3652 34.54C86.9518 34.7 86.4785 34.78 85.9452 34.78C85.5852 34.78 85.2585 34.7267 84.9652 34.62C84.6718 34.5 84.4385 34.3333 84.2652 34.12C84.0918 33.8933 84.0052 33.62 84.0052 33.3ZM84.0052 28.96C84.1518 28.8533 84.3518 28.7267 84.6052 28.58C84.8718 28.42 85.1852 28.2867 85.5452 28.18C85.9052 28.06 86.3052 28 86.7452 28C87.2518 28 87.6985 28.12 88.0852 28.36C88.4852 28.5867 88.6852 28.9333 88.6852 29.4V36H90.2852V29.4C90.2852 28.8 90.1318 28.2933 89.8252 27.88C89.5318 27.4667 89.1185 27.1533 88.5852 26.94C88.0652 26.7133 87.4518 26.6 86.7452 26.6C85.9185 26.6 85.2118 26.7267 84.6252 26.98C84.0385 27.2333 83.5718 27.4867 83.2252 27.74L84.0052 28.96ZM94.4922 40.4V26.8H92.8922V40.4H94.4922ZM102.192 31.4C102.192 30.4 101.986 29.5467 101.572 28.84C101.159 28.12 100.606 27.5667 99.9122 27.18C99.2322 26.7933 98.4722 26.6 97.6322 26.6C96.8722 26.6 96.1989 26.7933 95.6122 27.18C95.0389 27.5667 94.5855 28.12 94.2522 28.84C93.9322 29.5467 93.7722 30.4 93.7722 31.4C93.7722 32.3867 93.9322 33.24 94.2522 33.96C94.5855 34.68 95.0389 35.2333 95.6122 35.62C96.1989 36.0067 96.8722 36.2 97.6322 36.2C98.4722 36.2 99.2322 36.0067 99.9122 35.62C100.606 35.2333 101.159 34.68 101.572 33.96C101.986 33.24 102.192 32.3867 102.192 31.4ZM100.572 31.4C100.572 32.1067 100.426 32.7067 100.132 33.2C99.8522 33.6933 99.4722 34.0667 98.9922 34.32C98.5255 34.5733 98.0055 34.7 97.4322 34.7C96.9655 34.7 96.5055 34.5733 96.0522 34.32C95.5989 34.0667 95.2255 33.6933 94.9322 33.2C94.6389 32.7067 94.4922 32.1067 94.4922 31.4C94.4922 30.6933 94.6389 30.0933 94.9322 29.6C95.2255 29.1067 95.5989 28.7333 96.0522 28.48C96.5055 28.2267 96.9655 28.1 97.4322 28.1C98.0055 28.1 98.5255 28.2267 98.9922 28.48C99.4722 28.7333 99.8522 29.1067 100.132 29.6C100.426 30.0933 100.572 30.6933 100.572 31.4ZM113.138 36H114.938L112.538 26.1L111.638 28.7L113.138 36ZM108.338 34.62L108.938 36.62L112.738 29.3L112.538 26.1L108.338 34.62ZM108.938 36.62L109.538 34.62L105.398 26.1L105.198 29.3L108.938 36.62ZM102.998 36H104.798L106.298 28.7L105.398 26.1L102.998 36ZM117.267 33.3C117.267 32.9267 117.354 32.6067 117.527 32.34C117.7 32.0733 117.96 31.8667 118.307 31.72C118.667 31.5733 119.114 31.5 119.647 31.5C120.234 31.5 120.76 31.58 121.227 31.74C121.694 31.8867 122.154 32.12 122.607 32.44V31.5C122.514 31.38 122.34 31.2267 122.087 31.04C121.834 30.84 121.494 30.6667 121.067 30.52C120.654 30.36 120.154 30.28 119.567 30.28C118.767 30.28 118.074 30.4067 117.487 30.66C116.9 30.9 116.447 31.2467 116.127 31.7C115.807 32.1533 115.647 32.7067 115.647 33.36C115.647 33.9867 115.787 34.5133 116.067 34.94C116.36 35.3533 116.747 35.6667 117.227 35.88C117.707 36.0933 118.234 36.2 118.807 36.2C119.447 36.2 120.027 36.0933 120.547 35.88C121.067 35.6533 121.48 35.3333 121.787 34.92C122.107 34.4933 122.267 33.9867 122.267 33.4L121.947 32.4C121.947 32.9733 121.827 33.4333 121.587 33.78C121.36 34.1267 121.04 34.38 120.627 34.54C120.214 34.7 119.74 34.78 119.207 34.78C118.847 34.78 118.52 34.7267 118.227 34.62C117.934 34.5 117.7 34.3333 117.527 34.12C117.354 33.8933 117.267 33.62 117.267 33.3ZM117.267 28.96C117.414 28.8533 117.614 28.7267 117.867 28.58C118.134 28.42 118.447 28.2867 118.807 28.18C119.167 28.06 119.567 28 120.007 28C120.514 28 120.96 28.12 121.347 28.36C121.747 28.5867 121.947 28.9333 121.947 29.4V36H123.547V29.4C123.547 28.8 123.394 28.2933 123.087 27.88C122.794 27.4667 122.38 27.1533 121.847 26.94C121.327 26.7133 120.714 26.6 120.007 26.6C119.18 26.6 118.474 26.7267 117.887 26.98C117.3 27.2333 116.834 27.4867 116.487 27.74L117.267 28.96ZM132.654 25.16L136.554 35.4H138.354L132.654 21.3L126.954 35.4H128.754L132.654 25.16ZM138.254 36V38.2H139.754V34.4H125.554V38.2H127.054V36H138.254ZM141.352 31.4C141.352 32.32 141.559 33.1467 141.972 33.88C142.399 34.6 142.972 35.1667 143.692 35.58C144.412 35.9933 145.219 36.2 146.112 36.2C147.019 36.2 147.826 35.9933 148.532 35.58C149.252 35.1667 149.819 34.6 150.232 33.88C150.659 33.1467 150.872 32.32 150.872 31.4C150.872 30.4667 150.659 29.64 150.232 28.92C149.819 28.2 149.252 27.6333 148.532 27.22C147.826 26.8067 147.019 26.6 146.112 26.6C145.219 26.6 144.412 26.8067 143.692 27.22C142.972 27.6333 142.399 28.2 141.972 28.92C141.559 29.64 141.352 30.4667 141.352 31.4ZM142.972 31.4C142.972 30.76 143.106 30.1933 143.372 29.7C143.652 29.1933 144.026 28.8 144.492 28.52C144.972 28.24 145.512 28.1 146.112 28.1C146.712 28.1 147.246 28.24 147.712 28.52C148.192 28.8 148.566 29.1933 148.832 29.7C149.112 30.1933 149.252 30.76 149.252 31.4C149.252 32.04 149.112 32.6067 148.832 33.1C148.566 33.5933 148.192 33.9867 147.712 34.28C147.246 34.56 146.712 34.7 146.112 34.7C145.512 34.7 144.972 34.56 144.492 34.28C144.026 33.9867 143.652 33.5933 143.372 33.1C143.106 32.6067 142.972 32.04 142.972 31.4ZM154.01 31.9H160.81V30.4H154.01V31.9ZM159.77 26.8V36H161.37V26.8H159.77ZM153.07 26.8V36H154.67V26.8H153.07Z"
            fill="#001732"
          />
          <line x1="56.5" y1="2.18557e-08" x2="56.5" y2="60" stroke="#001732" />
          <path
            d="M6.9 31L0 32L8.28 33.5L11.5 28.5L18.4 46L26.68 21.5L33.12 40L38.18 33.5L46 32L37.26 31L34.04 35L26.68 14L18.4 39L11.96 23L6.9 31Z"
            fill="#001732"
          />
        </svg>
      </div>
    </div>
  );
};

export default Logo;