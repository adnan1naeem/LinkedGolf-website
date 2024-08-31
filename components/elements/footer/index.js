import React from "react";
import Link from "next/link";
import Image from "next/image";

import { SocialMediaPlatforms } from "../../../mocks/socialMediaPlatforms";

import styles from "./footer.module.scss";
import Logo from "../../../assets/images/LinkedGolfLogo__dark.png";
import DottedIllustrationImage from "../../../assets/images/hero/dots__footer.png";
import QRCodeScanner from "../../../assets/images/qr-code.svg";
import AppStoreDownloadButton from "../../../assets/icons/app-store-download-button.svg";
import GooglePlayDownloadButton from "../../../assets/icons/google-play-download-button.svg";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footerSection__wrapper}>
      <div className={styles.dottedIllustration}>
        <Image src={DottedIllustrationImage} alt="Dotted illustration" />
      </div>
      <div className={styles.footerSection__container}>
        <div className={styles.dFlex}>
          <div className={styles.colOne}>
            <div className={styles.logoBox}>
              <Image src={Logo} alt="LinkedGolf - Logo" />
            </div>
            <p className={styles.questionText}>Got golf buddies?</p>
            <p className={styles.helpingText}>
              Help us get the word out. Linked
              <span className={styles.highlightedText}>Golf</span> is here!
            </p>
            <div className={styles.socialMediaPlatformsIcons}>
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
          </div>
          <div className={styles.colSecond}>
            <div className={styles.linksBox}>
              <Link href="/deleteAccount">
                <a target="_blank">
                  <p className={styles.linkText}>Delete Account</p>
                </a>
              </Link>
              <Link href="https://forms.gle/N59P3CSKaNw793118">
                <a target="_blank">
                  <p className={styles.linkText}>Contact Us</p>
                </a>
              </Link>
              <Link href="https://forms.gle/VFYgHpNcWkafjZvX7">
                <a target="_blank">
                  <p className={styles.linkText}>Report a Problem</p>
                </a>
              </Link>
              <Link href="https://linkedgolfapp.com/privacy">
                <a target="_blank">
                  <p className={styles.linkText}>Privacy Policy</p>
                </a>
              </Link>
            </div>
            <p className={styles.copyright_Text}>Copyright 2023</p>
          </div>
          <div className={styles.colthree}>
            <div className={styles.qrScanner__cardBox}>
              <div className={styles.qrScanner__container}>
                <p className={styles.downloadText}>Download the app today!</p>
                <div className={styles.qrCodeWrapper}>
                  <Image
                    src={QRCodeScanner}
                    alt="Download LinkedGolf -- QR Scanner"
                  />
                </div>
                <div className={styles.downloadButtons}>
                  <div className={styles.platformButtonBox}>
                    <Link href="/">
                      <a>
                        <Image
                          src={AppStoreDownloadButton}
                          alt="Download for IOS - App Store"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className={styles.platformButtonBox}>
                    <Link href="/">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
