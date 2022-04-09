import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Convinced.module.css'
import "../../../../globalstyles/typography.css";

export default function Convinced() {
    return (
        <div className={styles['convinced']}>
            <p className='inter-400'>
                Still not <strong>convinced?</strong>
            </p>
            <Link className={`${styles["link"]}  inter-400`} to="/portfolio">
                &nbsp;Browse our previous projects to see what you’re missing &gt;
            </Link>
        </div>)
}
