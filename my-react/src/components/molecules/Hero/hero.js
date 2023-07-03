import React from 'react';
import img from "../../atoms/assets/hero.jpg"
import Button from '../../atoms/Button/button';
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.wraper}>
        <div className={styles.img_container}>
        <img src={img} alt='hero'/>
        </div>

<div className={styles.text}>
    <h1>"take care of Your <span style={{color: "red"}}>Body</span>.<br></br>
        It is only Place You <br></br>
         have to <span style={{color: "red"}}>live</span>"
        <Button name="Join With Us"/>
        </h1>
</div>
    </div>
  )
}

export default Hero