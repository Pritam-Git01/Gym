import React from "react";
import styles from "./navbar.module.css";
import Button from "../../atoms/Button/button";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  
  return (
    <div className={styles.wraper}>
      <div className={styles.container}>
        <h1 style={{ marginLeft: "2.4rem", color : "white" , fontSize: "22px" }}>Fitness Gym</h1>
        
          
            <nav className={styles.nav_container}>
              <a href="/">Home</a>
              <a href="/">About Us</a>
              <a href="/">Trainers</a>
              <a href="/">Program</a>
            </nav>

            <div className={styles.btn}>
              <Button name="Join Us"/>
            </div>
          
        
          <div className={styles.hamburger}>
            <HiOutlineMenuAlt3 />
          </div>
        
      </div>
    </div>
  );
};

export default Navbar;
