import React from "react";
import Image from "next/image";

// Images
import DownloadAppImage from "../../../assets/images/features/download-app.png";
import DottedFirstImage from "../../../assets/images/features/download-app-dottedPattern-one.png";
import DottedSecondImage from "../../../assets/images/features/download-app-dottedPattern-two.png";

// Styles
import styles from "./downloadApp.module.scss";

const DownloadAppSection = () => {
  return (
    <section id="download-app" className={styles.downloadAppSection__Wrapper}>
      <div className={styles.firstDottedImage}>
        <Image src={DottedFirstImage} alt="Download the application" />
      </div>
      <div className={styles.secondDottedImage}>
        <Image src={DottedSecondImage} alt="Download the application" />
      </div>
      <div className={styles.downloadAppSection__container}>
        <h2 className={styles.headingText}>What are you waiting for?</h2>
        <h3 className={styles.taglineText}>
          Download the app. Tell your golf buddies. Let’s Golf!
        </h3>
      </div>
      <div className={styles.illustrationBox}>
        <Image src={DownloadAppImage} alt="Download App" />
      </div>
    </section>
  );
};

export default DownloadAppSection;
