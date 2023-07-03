import React from "react";
import styles from "./navbar.module.css";
import Button from "../../atoms/Button/button";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";



const Navbar = ({prRef,trRef,hmRef, snRef}) => {
    const navigate = useNavigate();
    
  
  return (
    <div  className={styles.wraper}>
      <div className={styles.container}>
        <h1 style={{ marginLeft: "2.4rem", color : "white" , fontSize: "22px" }}>Fitness Gym</h1>
        
          
            <nav className={styles.nav_container}>
            
              <li onClick={() => hmRef.current.scrollIntoView()}>Home</li>
              <li  onClick={() => navigate("/about")}>About Us</li>
              <li onClick={() => trRef.current.scrollIntoView()}>Trainers</li>
              <li onClick={() => prRef.current.scrollIntoView()}>Program</li>
            </nav>

            <div onClick={() => snRef.current.scrollIntoView()} className={styles.btn}>
              <Button  name="Join Us"/>
            </div>
          
        
          <div className={styles.hamburger}>
            <HiOutlineMenuAlt3 />
          </div>
        
      </div>
    </div>
  );
};

export default Navbar;
