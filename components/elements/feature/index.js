import React from "react";
import Image from "next/image";

// Styles
import styles from "./feature.module.scss";

const FeatureCard = ({ image, name, content }) => {
  return (
    <div className={styles.featureCard__Wrapper}>
      <div className={styles.imageBox}>
        <Image src={image} alt={name} />
      </div>
      <div className={styles.contentBox}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.text}>{content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
