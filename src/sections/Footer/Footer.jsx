import React from "react";
import styles from "./FooterStyles.module.css";
import twitterIconLight from "./../../assets/twitter-light.svg";
import twitterIconDark from "./../../assets/twitter-dark.svg";
import linkdinIconLight from "./../../assets/linkedin-light.svg";
import linkdinIconDark from "./../../assets/linkedin-dark.svg";
import githubIconLight from "./../../assets/github-light.svg";
import githubIconDark from "./../../assets/github-dark.svg";
import { useTheme } from "../../common/ThemeContext";



function Footer() {
  const {theme} = useTheme();
    const twitterIcon = theme === "light" ? twitterIconLight : twitterIconDark;
    const githubIcon = theme === "light" ? githubIconLight : githubIconDark;
    const linkdinIcon = theme === "light" ? linkdinIconLight : linkdinIconDark;
  return (
    <section id="footer" className={styles.container}>
       <span>
          <a href="https://www.twitter.com" target="_blank">
            <img src={twitterIcon} alt="twitter icon" />
          </a>
          <a href="https://www.github.com" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://www.linkdin.com" target="_blank">
            <img src={linkdinIcon} alt="linkdin icon" />
          </a>
        </span>
      <p>
        &copy; 2025 Alex Carter .  All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;
