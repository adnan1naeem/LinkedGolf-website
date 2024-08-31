import React from "react";
import Image from "next/image";
import Link from "next/link";

import Header from "../../elements/header";

// Images
import HeroImage from "../../../assets/images/hero/main-image.png";
import Dots from "../../../assets/images/hero/dots.png";

import AppStoreDownloadButton from "../../../assets/icons/app-store-download-button.svg";
import GooglePlayDownloadButton from "../../../assets/icons/google-play-download-button.svg";

// Styles
import styles from "./hero.module.scss";
import { Features } from "../../../mocks/features";
import FeatureCard from "../../elements/feature";

const HeroSection = () => {
  return (
    <section id="hero-section" className={styles.heroSection__Wrapper}>
      <div className={styles.dottedIllustration__Image}>
        <Image src={Dots} alt="LinkedGolf - Hero illustration" />
      </div>
      <div className={styles.heroSection__Container}>
        <Header />
        <div className={styles.contentWrapper}>
          <div className={styles.imageBox}>
            <Image src={HeroImage} alt="LinkedGolf - Hero main image" />
          </div>
          <div className={styles.textBox}>
            <h1 className={styles.title}>Got Golf Buddies?</h1>
            <p className={styles.paragraph}>
              LinkedGolf is an app designed to help you build your golf network.
              Get out on the course more often by scheduling outings with your
              buddies whose golf availability matches yours.
            </p>
            <div className={styles.downloadButtons}>
              <div className={styles.platformButtonBox}>
                <Link href="https://apps.apple.com/us/app/linked-golf/id1619093321">
                  <a>
                    <Image
                      src={AppStoreDownloadButton}
                      alt="Download for IOS - App Store"
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.platformButtonBox}>
                <Link href="https://play.google.com/store/apps/details?id=com.linkedgolfapp.mobile">
                  <a>
                    <Image
                      src={GooglePlayDownloadButton}
                      alt="Download for Android - Google Play Store"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.featuresWrapper}>
          <div className={styles.container}>
            {Features.map((f) => (
              <div className={styles.box} key={f.name}>
                <FeatureCard
                  image={f.image}
                  name={f.name}
                  content={f.content}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
