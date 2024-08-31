import React from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import GolfCommunityMobileImg from "../../../assets/images/hero/aboutGolfCommunity.png";
import AboutGolfCommunityllustration from "../../../assets/images/features/aboutGolfCommunity.png";
import CloudsIllustration from "../../../assets/images/clouds-illustration.svg";
import Fire from "../../../assets/images/fire.svg";

// Styles
import styles from "./aboutGolferCommunitySection.module.scss";

const AboutGolferCommunitySection = () => {
  return (
    <section className={styles.aboutGolferCommunitySection__wrapper}>
      <div className={styles.cloudsIllustrations}>
        <Image src={CloudsIllustration} alt="Clouds Illustration" />
      </div>
      <div className={styles.aboutGolferCommunitySection__container}>
        <div className={styles.timmerWrapper}>
          <div className={styles.contentBox}>
            <span className={styles.fire}>
              <Image src={Fire} alt="Fire Illustration" />
            </span>
            <span className={styles.text}>
              Join the hottest golfer community right now.
            </span>
          </div>

          <div className={styles.timmerBox}>
            <span className={styles.timeBox}>1</span>
            <span className={styles.timeBox}>0</span>
            <span className={styles.timeBox}>3</span>
            <span className={styles.comma}>,</span>
            <span className={styles.timeBox}>1</span>
            <span className={styles.timeBox}>1</span>
            <span className={styles.timeBox}>6</span>
          </div>
        </div>
        <div className={styles.dFlex}>
          <div className={styles.imageBox}>
            <Image
              src={GolfCommunityMobileImg}
              alt="Build your golf profile. Build your network. Golf more."
            />
          </div>
          <div className={styles.contentBox}>
            <h1 className={styles.headingText}>
              Build your golf profile. Build your network. Golf more.
            </h1>
            <p className={styles.descriptionText}>
              Linked Golf makes it super easy to connect with people you
              naturally meet on the golf course when being paired up with other
              golfers. Users can do this by scanning a QR code. This allows
              people to expand their golf networks even further.
            </p>
            <p className={styles.descriptionText}>
              The more people in your network, the more often you can golf with
              a set of four because it’s easier to find people whose schedules
              coincide.
            </p>
            <p className={styles.descriptionText}>
              Plus it makes it fun to be able to switch up who you golf with
              every once in a while.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.aboutGolfCommunity__Illustration}>
        <Image
          src={AboutGolfCommunityllustration}
          alt="About Golf Community Image"
        />
      </div>
    </section>
  );
};

export default AboutGolferCommunitySection;
