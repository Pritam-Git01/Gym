import React from "react";
import style from "./footer.module.css";
import { Link } from "react-router-dom";
import { ImFacebook2, ImYoutube } from "react-icons/im";

import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.footer_title}>
          <h2>
            <span>The Fitness Gym</span>
          </h2>
          <p style={{margin: "0.6rem 0"}}>Your Body Temple</p>

          <div className={style.social_icons}>
            <Link to={"https://www.facebook.com/"}>
              <ImFacebook2 className={style.icons} />
            </Link>
            <Link to={"https://twitter.com/"}>
              <ImWhatsapp className={style.icons} />
            </Link>
            <Link to={"https://www.youtube.com/"}>
              <ImYoutube className={style.icons} />
            </Link>
          </div>
        </div>

        <div className={style.footer_content}>
          <hr />
          <ul>
            <h3>
              <span style={{textAlign: "center"}}>The Fitness Gym</span>
            </h3>
            <Link to="/home">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/training">Traning</Link>
          </ul>

          <ul>
            <h3>
              <span style={{marginLeft: "1rem"}}>Services</span>
            </h3>
            <Link to="/">Apply Online</Link>
            <Link>Available Positions</Link>
          </ul>

          <ul>
            <h3>
              <span style={{marginLeft: "1rem"}}>About Us</span>
            </h3>
            <Link to="/trainer">Meet Our Team</Link>
            <Link>Our Responsibilities</Link>
            <Link>Our Codes</Link>
            <Link>Our Values</Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;