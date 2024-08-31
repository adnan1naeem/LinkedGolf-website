import React from "react";
import Image from "next/image";

// Styles
import styles from "./eachFeature.module.scss";

const EachFeature = ({ name, description, img, flip = false, color }) => {
  return (
    <div
      className={`${styles.eachFeature__wrapper} ${
        flip === true && styles.flipSection
      }`}
    >
      <div
        className={`
          ${styles.contentCol} 
          ${
            color && color === "lightBlue"
              ? styles.lightBlueBG
              : styles.darkBlue
          }
        `}
      >
        <div className={styles.contentBox}>
          <h1 className={styles.featureName}>{name}</h1>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
      <div className={styles.imageCol}>
        <div className={styles.imageBox}>
          <Image src={img} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default EachFeature;
