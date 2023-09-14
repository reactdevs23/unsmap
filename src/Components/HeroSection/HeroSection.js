import React from "react";
import mapImage from "../../images/mapImage.png";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.mapContainer}>
      <img src={mapImage} alt="#" className={styles.mapImage} />
      <button className={styles.button}>Apply Now</button>
    </div>
  );
};

export default HeroSection;
