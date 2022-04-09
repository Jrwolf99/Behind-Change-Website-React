import React from 'react'

import styles from './InnerGrid.module.css'
import "../../../../globalstyles/typography.css";


export default function InnerGrid() {
    return (
        <div className={styles['inner-grid']}>
            <div className={styles["q1"]}>+ How long does the process take?</div>
            <div className={styles["q2"]}>+ Is your service Really free?</div>
            <div className={styles["q3"]}>
                + Who owns the rights to the website once it’s finished?
            </div>
            <div className={styles["q4"]}>
                + What happens if I dislike the design?
            </div>
        </div>)
}
