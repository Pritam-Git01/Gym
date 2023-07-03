import React from "react";
import styles from "./price.module.css";
import { data, plansIncluded } from "./priceData";


const Price = () => {

  const priceData = data;
  return (
    <>
      <section className={styles.priceSection}>
        <div className={styles.row}>
          <div className={styles.leftUpperRow}>
            {priceData.map((price) => (
              <div key={price.id} className={`${styles.card}`}>
                <div className={`${styles.header}`}>
                  <span className={`${styles.title}`}>{price.title}</span>
                  <span className={`${styles.price}`}>
                    ${price.price}
                    <span className={`${styles.month}`}> /month</span>
                  </span>
                </div>
                <p className={`${styles.desc}`}>{price.description}</p>
                <ul className={`${styles.lists}`}>
                  {price.access.map((accessfesility, index) => (
                    <li key={index} className={`${styles.list}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>{accessfesility}</span>
                    </li>
                  ))}
                </ul>
                <button type="button" className={`${styles.action}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className={styles.rightupperRow}>
            <h5>Member ship</h5>
            <h2>From Punch Pass to Monthely or Annual</h2>
            <p>
              <span className={styles.childText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </span>
            </p>
            <h5>Each Plane Included</h5>
            {/* <button className={styles.learnMore}>Learn more</button> */}
            <div>
              <ul className={`${styles.lists}`}>
                {plansIncluded.map((plan, index) => (
                  <li
                    key={index}
                    className={`${styles.list} ${styles.childText}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>{plan}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
