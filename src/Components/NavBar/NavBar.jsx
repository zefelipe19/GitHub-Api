import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

import GitHubIcon from "../../assets/GitHubIcon.svg"

export default function NavBar() {
  return (
    <div>
      <ul className={styles.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="contact/">Contact</Link>
        </li>
        <li>
            <a href="https://github.com/zefelipe19/GitHub-Api" target="_blank"><img src={GitHubIcon} alt="GitHubIcon" /></a>
        </li>
      </ul>
    </div>
  );
}
