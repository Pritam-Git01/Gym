import React from 'react';
import styles from "./button.module.css";

const Button = ({name}) => {
  return (
    <div className={styles.btn_container}>
        <button className={styles.btn}>{name}</button>
    </div>
  )
}

export default Button