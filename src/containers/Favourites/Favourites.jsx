import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Favourites.module.css";

const Favourites = () => {
  return (
    <div className={styles.favourites}>
      <div className={styles.favouritesContainer}>
        <h2>Избранное</h2>
        <div className={styles.grid}>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Favourites;
