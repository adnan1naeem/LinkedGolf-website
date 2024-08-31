import React from "react";
import Link from "next/link";
import Image from "next/image";

import LinkedGolf from "../../../assets/images/LinkedGolfLogo.png";

// Styles
import styles from "./header.module.scss";
import { SocialMediaPlatforms } from "../../../mocks/socialMediaPlatforms";

const Header = () => {
  return (
    <header className={styles.header__wrapper}>
      <div className={styles.header__container}>
        <div className={styles.logoBox}>
          <Image src={LinkedGolf} alt="LinkedGolf Logo" />
        </div>
        <div className={styles.rightCol}>
          <div className={styles.socialMediaPlatforms}>
            {SocialMediaPlatforms.map((link) => (
              <Link href={link.link} key={link.alt}>
                <a target="_blank">
                  <span className={styles.socialMediaPlatform__Image}>
                    <Image src={link.image} alt={link.alt} />
                  </span>
                </a>
              </Link>
            ))}
          </div>
          <p className={styles.txt}>
            Help us get the word out. Linked
            <span className={styles.highlightedText}>Golf</span> is here!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
