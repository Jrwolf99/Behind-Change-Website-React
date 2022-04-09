import React, { useEffect } from 'react'


import styles from './Solutions.module.css'
import "../../../../globalstyles/typography.css";


export default function Solutions() {
    return (
        <div
            className={` ${styles["solutions"]}`}
        >
            <p>
                The solutions you <br />
                <strong>require.</strong>
            </p>
        </div>


    )
}
