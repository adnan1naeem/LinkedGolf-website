import React from "react";
import Image from "next/image";
import EachFeature from "./eachFeature";

// Images
import FirstFeature from "../../../assets/images/features/firstFeature.png";
import SecondFeature from "../../../assets/images/features/secondFeature.png";
import ThirdFeature from "../../../assets/images/features/thirdFeature.png";
import DottedIllustration from "../../../assets/images/features/dots.png";

// Styles
import styles from "./features.module.scss";

const FeaturesSection = () => {
  return (
    <section id="features-section" className={styles.featuresSection__wrapper}>
      <div className={styles.featuresSection__container}>
        <div className={styles.dottedIllustration}>
          <Image src={DottedIllustration} alt="Dotted Illustrations" />
        </div>
        <div className={styles.featureSecPosition}>
          <EachFeature
            name="Golf Buddies Fore-Life"
            description="Okay, that was a bad joke but we couldn’t help ourselves. The point to be made is that building your golf network in the Linked Golf app allows you to maintain friendships over a lifetime. Think of how much golf can be played! Or think about how much golf you could be missing out on by not having the Linked Golf app. Just saying."
            img={FirstFeature}
          />
          <div className={styles.dottedIllustration__first}>
            <Image src={DottedIllustration} alt="Dotted Illustrations" />
          </div>
        </div>
        <div className={styles.featureSecPosition}>
          <EachFeature
            name="Designed to help you fill out your foreee-some."
            description="Opps! We did it again. But, seriously that’s what this app is all about. We’re golfers ourselves. All we want to do is golf more and help other people golf more. It’s that simple."
            img={SecondFeature}
            flip={true}
            color="lightBlue"
          />
          <div className={styles.dottedIllustration__second}>
            <Image src={DottedIllustration} alt="Dotted Illustrations" />
          </div>
          <div className={styles.dottedIllustration__third}>
            <Image src={DottedIllustration} alt="Dotted Illustrations" />
          </div>
        </div>
        <div className={styles.eachHorizontalFeature__Wrapper}>
          <div className={styles.contentCol}>
            <div className={styles.contentBox}>
              <h1 className={styles.featureName}>
                Don’t want to be the one to schedule an event?
              </h1>
              <p className={styles.featureDescription}>
                That’s cool, all you have to do is request to join an open
                outing.
              </p>
            </div>

            <div className={styles.imageBox}>
              <Image
                src={ThirdFeature}
                alt="Don’t want to be the one to schedule an event?"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
