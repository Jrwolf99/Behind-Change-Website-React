import React from 'react'



import styles from './WebUsage.module.css'
import "../../../../globalstyles/typography.css";

import graph from "../../../../assets/images/graph.png"
import Card from '../card/Card';


export default function WebUsage() {
    return (
        <Card className={styles['webusage']}>
            <p>Stat on web usage</p>
            <img src={graph} alt="a graph" />
        </Card>)
}
