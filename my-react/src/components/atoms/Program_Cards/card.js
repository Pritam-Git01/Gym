import React from 'react';
import styles from "./card.module.css";

const Card = ({data}) => {
    const {image,text} = data;
  return (
    <div className={styles.wraper}>
        <img src={image} alt='yoga'/>
       
       <h2>{text}</h2>
    </div>
  )
}

export default Card;