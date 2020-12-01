import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <a href="mailto: rlin264@gmail.com" title="rlin264@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
      </a>
      <a href="https://github.com/rlin264" title="github.com/rlin264">
        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
      </a>

      <a href="https://linkedin.com/in/raymond-lin-330877130" title="linkedin.com/in/raymond-lin-330877130">
        <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
      </a>
    </div>
  );
}

export default Footer;
