import React from "react";
import Image from "next/image";

// Images
import GolfCommunity from "../../../assets/images/features/golfCommunity.png";

// Styles
import styles from "./golfCommunitySection.module.scss";

const GolfCommunitySection = () => {
  return (
    <section
      id="golf-community"
      className={styles.golfCommunitySection__Wrapper}
    >
      <div className={styles.GolfCommunitySection__container}>
        <h2 className={styles.headingText}>
          Meet new golf buddies by joining golf communities based on your
          location & favorite golf courses.
        </h2>
        <h3 className={styles.analyticText}>
          15,000 Courses | 100,000+ Golfers
        </h3>
      </div>
      <div className={styles.illustrationBox}>
        <Image src={GolfCommunity} alt="Golf Community" />
      </div>
    </section>
  );
};

export default GolfCommunitySection;
