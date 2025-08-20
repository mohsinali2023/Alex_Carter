import React from "react";
import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "./../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="section-title">Skills</h1>
      <div className={styles.skillsList}>
        <SkillList src={checkMarkIcon} skill="Adobe Indesign" />
        <SkillList src={checkMarkIcon} skill="Adobe Photoshop" />
        <SkillList src={checkMarkIcon} skill="Adobe Illustrator" />
        <SkillList src={checkMarkIcon} skill="Figma" />
        <SkillList src={checkMarkIcon} skill="Typography" />
      </div>
      <hr />
      <div className={styles.skillsList}>
        <SkillList src={checkMarkIcon} skill="Design Principles" />
        <SkillList src={checkMarkIcon} skill="Idea Generation" />
        <SkillList src={checkMarkIcon} skill="Branding" />
        <SkillList src={checkMarkIcon} skill="Desgning  for print" />
        <SkillList src={checkMarkIcon} skill="Portfolio Management" />
      </div>
      <hr />
      <div className={styles.skillsList}>
        <SkillList src={checkMarkIcon} skill="Non Technical Skills" />
        <SkillList src={checkMarkIcon} skill="Strong Communicaton" />
        <SkillList src={checkMarkIcon} skill="Logo Design" />
        <SkillList src={checkMarkIcon} skill="Package Design" />
        <SkillList src={checkMarkIcon} skill="Product Design" />
      </div>
    </section>
  );
}

export default Skills;
