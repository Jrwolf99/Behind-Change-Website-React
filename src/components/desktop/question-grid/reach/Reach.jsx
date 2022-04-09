import React from 'react'

import styles from './Reach.module.css'
import "../../../../globalstyles/typography.css";

import webbing from "../../../../assets/images/webbing.png"
import planet from "../../../../assets/images/planet.png"
import Card from '../card/Card';

export default function Reach() {
    return (
        <div className={styles["reach"]}>
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
    )
}
