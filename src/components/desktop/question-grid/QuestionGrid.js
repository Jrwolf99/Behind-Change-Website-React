import React from "react";

import { Link } from "react-router-dom";

import styles from "./QuestionGrid.module.css";
import "../../../globalstyles/typography.css";

import planet from "../../../assets/images/planet.png";
import webbing from "../../../assets/images/webbing.png";
import tools from "../../../assets/images/tools.png";
import graph from "../../../assets/images/graph.png";

export default function QuestionGrid() {
  return (
    <div className={styles["questions-grid"]}>
      <div
        className={`${styles["card"]} ${styles["one"]} ${styles["grid-text"]}`}
      >
        <p>
          The solutions you <br />
          <strong>require.</strong>
        </p>
      </div>
      <div className={`${styles["card"]} ${styles["two"]}`}>
        <div className={styles["webbing"]}>
          <img src={webbing} alt="a planet's background webbing" />
        </div>
        <div className={styles["top-of-webbing"]}>
          <p>
            Increase your <br />
            <strong>reach.</strong>
          </p>
          <div className={styles["planet"]}>
            <img src={planet} alt="a planet" />
          </div>
        </div>
      </div>

      <div className={`${styles["card"]} ${styles["three"]}`}>
        <img src={tools} alt="tools used to build behind change websites" />
        <p>
          An <strong>abundance</strong>
          <br /> of tools at your <br /> disposal.
        </p>
      </div>

      <div className={`${styles["card"]} ${styles["four"]}`}>
        <p>Stat on web usage</p>
        <img src={graph} alt="a graph" />
      </div>
      <div className={`${styles["card"]} ${styles["five"]}`}>
        <p className={`${styles["htmlstyle"]} monospace-400`}>
          <h1>&lt;</h1>
          <h2>body</h2>
          <h1>&gt;</h1>
          <br />
          <h1>&lt;</h1>
          <h2>img </h2>
          src<h1>=”</h1>accessibility.jpg<h1>”</h1> <br />
          alt<h1>=”</h1>
          <h3>
            when a picture can’t be <br />
            worth a thousand words, <br />
            we ensure our descriptions are <br />
            worth a thousand pictures
          </h3>
          <h1>”</h1> <h1>/&gt;</h1> <br />
          <h1>&lt;/</h1>
          <h2>body</h2>
          <h1>&gt;</h1> <br />
        </p>
        <p className={`${styles["built-text"]}`}>
          Built with <br /> <strong>acccesibility</strong> in mind.
        </p>
      </div>
      <div className={`${styles["card"]} ${styles["six"]}`}>
        <div className={`${styles["text"]}`}>
          <h1>6</h1>
          <h2> Years</h2>
          <p className="inter-500">
            Combined
            <br /> Experience
          </p>
        </div>
      </div>
      <div className={`${styles["card"]} ${styles["seven"]}`}>
        <div className={`${styles["text"]} inter-300`}>
          <h1>$0</h1>
          <p className="inter-500">Cost</p>
        </div>
      </div>

      <div className={`${styles["card"]} ${styles["eight"]} inter-400`}>
        <p>
          Still not <strong>convinced?</strong>
        </p>
        <Link className={`${styles["link"]}  inter-400`} to="/portfolio">
          &nbsp;Browse our previous projects to see what you’re missing &gt;
        </Link>
      </div>

      <div
        className={`${styles["card"]} ${styles["nine"]} ${styles["grid-text"]}`}
      >
        <p>
          Common <strong>Questions.</strong>
        </p>
      </div>
      <div className={styles["inner-grid"]}>
        <div className={styles["q1"]}>+ How long does the process take?</div>
        <div className={styles["q2"]}>+ Is your service Really free?</div>
        <div className={styles["q3"]}>
          + Who owns the rights to the website once it’s finished?
        </div>
        <div className={styles["q4"]}>
          + What happens if I dislike the design?
        </div>
      </div>
    </div>
  );
}
