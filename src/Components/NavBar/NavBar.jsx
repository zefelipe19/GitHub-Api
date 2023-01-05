import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

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
            <a href="https://github.com/zefelipe19" target="_blank">GitHub</a>
        </li>
      </ul>
    </div>
  );
}
