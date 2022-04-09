import React from 'react'
import styles from './Accessibility.module.css'
import "../../../../globalstyles/typography.css";
import Card from '../card/Card';

export default function Accessibility() {
    return (
        <Card className={styles['accessibility']}>
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
        </Card>)
}
