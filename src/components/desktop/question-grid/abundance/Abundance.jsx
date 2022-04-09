import React from 'react'
import styles from './Abundance.module.css'


import tools from '../../../../assets/images/tools.png'
import "../../../../globalstyles/typography.css";
import Card from '../card/Card';

export default function Abundance() {
    return (
        <Card className={styles['abundance']}>
            <img src={tools} alt="tools used to build behind change websites" />
            <p>
                An <strong>abundance</strong>
                <br /> of tools at your <br /> disposal.
            </p>
        </Card>)
}
