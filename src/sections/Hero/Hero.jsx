import styles from "./HeroSyles.module.css";
import heroImg from "./../../assets/hero-img.png";
import sun from "./../../assets/sun.svg";
import moon from "./../../assets/moon.svg";

import CV from "./../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;


  return (
    <section id="hero" className={styles.container}>
      <div className={styles.info}>
        <h1>Alex Carter</h1>
        <h2>Graphic Designer and Illustrator</h2>
      </div>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="profile picture of Alex Carter"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <a href="#contact">
        <button className="hover" download>
          Start Conversation
        </button>
      </a>
    </section>
  );
}

export default Hero;
