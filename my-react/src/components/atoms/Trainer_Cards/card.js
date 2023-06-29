import React from 'react';
import styles from "./card.module.css"

const Card = ({data}) => {
    const {image,name,profession} = data;
  return (
    <div className={styles.wraper}>
        <img src={image} alt='loop'/>
        <h3>
            {name}
        </h3>
        <p>{profession}</p>

    </div>
  )
}

export default Card