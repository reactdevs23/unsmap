import React from "react";
import {
  FaTelegramPlane,
  FaDiscord,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

import styles from "./FixedSocialBar.module.css";

const FixedSocialBar = () => {
  const socialMedia = [
    { icon: <FaTelegramPlane />, link: "https://t.me/uns_token" },
    { icon: <FaDiscord />, link: "https://discord.com/invite/wjFHg94mAW" },
    { icon: <FaTwitter />, link: "https://twitter.com/_unsofficial_" },
    { icon: <AiFillInstagram />, link: "https://bit.ly/3ptgQth" },
    {
      icon: <AiFillFacebook />,
      link: "https://www.facebook.com/profile.php?id=100085407069571",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/company/uns-digital-technologies-private-limited/",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/channel/UCgkR5Guy3kNWSESdD_NfAeg",
    },
  ];
  return (
    <div className={styles.fixedSocialMediaBar}>
      {socialMedia.map((el, i) => (
        <a
          href={el.link}
          target="_blank"
          rel="noreferrer"
          key={i}
          className={styles.icon}
        >
          {el.icon}
        </a>
      ))}
    </div>
  );
};

export default FixedSocialBar;
