import React from "react";
import Link from "next/link";

// Styles
import styles from "./button.module.scss";

const Button = ({ title, link = "/" }) => {
  return (
    <Link href={link}>
      <a target="_blank">
        <button className={styles.button__wrapper}>{title}</button>
      </a>
    </Link>
  );
};

export default Button;
