import React from "react";
import styles from "./about.module.css";
import Navbar from "../../molecules/Navbar/navbar";
import ReactPlayer from "react-player"
import Button from "../../atoms/Button/button";

function About() {
  return (
    <>

    <Navbar/>
    <div className={styles.wraper}>
      <div className={styles.first_container}>
        <div className={styles.video_player}>
        <ReactPlayer style={{paddingTop: "1rem"}} height={"16rem"} width={"22.6rem"} controls url={"https://www.youtube.com/watch?v=HnoPHqrdXQ8&pp=ygUdZ3ltIHZpZGVvIHdpdGggc29vdGhpbmcgYXVkaW8%3D"}/>

        </div>
        
        <div className={styles.about_text}>
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, obcaecati! Perspiciatis iste numquam et excepturi iusto ipsam exercitationem placeat dignissimos tempore nihil, quo debitis, corporis doloremque, maxime minus voluptatibus nemo.</p>
            <Button name="Learn More"/>
        </div>
      </div>
      <div className={styles.second_container}>
        <div className={styles.about_text}>
            <h1>Why Choose Us?</h1>
            <li>Consulation with Expert</li>
            <p className={styles.para}>Lorem ipsum dolor sit amet consec Nobis odit repellat accusamus fugit beatae maxime, fuga nesciunt.</p>
            <li>Best Workout Facilities</li>
            <p className={styles.para}>Lorem ipsum dolor sit amet ullam recusandae facilis nulla! Neque id, itaque magni alias facere voluptas.</p>

        </div>
        <div className={styles.video_player}>
        <ReactPlayer style={{paddingTop: "1rem"}} height={"16rem"} width={"22.6rem"} controls url={"https://www.youtube.com/watch?v=HnoPHqrdXQ8&pp=ygUdZ3ltIHZpZGVvIHdpdGggc29vdGhpbmcgYXVkaW8%3D"}/>
        </div>
        
      </div>
    </div>
    </>
  );
}

export default About;
