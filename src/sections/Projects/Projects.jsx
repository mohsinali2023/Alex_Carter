import styles from "./ProjectStyles.module.css";
import viberr from "./../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import FreshBurger from "../../assets/fresh-burger.png";
import Hipsster from "./../../assets/hipsster.png";
import FlitLift from "./../../assets/fitlift.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <div >
        <h1 className="section-title">My Recent Work</h1>
        <p className="section-tagline">
          Here are few past design project I have worked on. Want to see more.
          <a>Email me</a>
        </p>
      </div>

      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={FreshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Fresh burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={Hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={FlitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FlitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
