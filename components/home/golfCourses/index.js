import React from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import GolfCourses from "../../../assets/images/features/golfCourses.png";

// Styles
import styles from "./golfCourses.module.scss";
import Button from "../../elements/button";

const GolfCoursesSection = () => {
  return (
    <>
      <section id="golf-courses" className={styles.golfCoursesSection__Wrapper}>
        <div className={styles.golfCoursesSection__Container}>
          <div className={styles.dFlex}>
            <div className={styles.imageBox}>
              <Image src={GolfCourses} alt="Golf Courses" />
            </div>
            <div className={styles.contentBox}>
              <h1 className={styles.headingtext}>
                Find new golf courses or get rewarded for being a loyal
                customer.
              </h1>
              <p className={styles.descriptionText}>
                Okay, that was a bad joke but we couldn’t help ourselves. The
                point to be made is that building your golf network in the
                Linked Golf app allows you to maintain friendships over a
                lifetime. Think of how much golf can be played! Or think about
                how much golf you could be missing out on by not having the
                Linked Golf app. Just saying..
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.golfCourse__ProfileRibbon}>
        <div className={styles.container}>
          <p className={styles.contentText}>
            Are you a golf course owner or the one who is responsible for
            attracting new golfers to the course?
          </p>
          <div className={styles.buttonBox}>
            <Button
              link="https://forms.gle/2BDXLSqKNyvG7PrK8"
              title="Claim your golf course profile"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default GolfCoursesSection;
