import React from 'react'
import styles from './Cost.module.css'
import "../../../../globalstyles/typography.css";
import Card from '../card/Card';

export default function Cost() {
    return (

        <Card className={styles['cost']}>
            <div className={`${styles["text"]} inter-300`}>
                <h1>$0</h1>
                <p className="inter-500">Cost</p>
            </div>
        </Card>)
}
