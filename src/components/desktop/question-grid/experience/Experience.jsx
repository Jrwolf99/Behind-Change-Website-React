import React from 'react'
import styles from './Experience.module.css'

import "../../../../globalstyles/typography.css";
import Card from '../card/Card';

export default function Experience() {
    return (
        <Card className={styles['experience']}>
            <div className={`${styles["text"]}`}>
                <h1>6</h1>
                <h2> Years</h2>
                <p className="inter-500">
                    Combined
                    <br /> Experience
                </p>
            </div>
        </Card>)
}
