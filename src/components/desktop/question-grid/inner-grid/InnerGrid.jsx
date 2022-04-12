import React, { useState } from 'react'

import styles from './InnerGrid.module.css'
import "../../../../globalstyles/typography.css";

import { motion } from 'framer-motion';

export default function InnerGrid() {


    const [buttonFlip1, setButtonFlip1] = useState(true);
    const [buttonFlip2, setButtonFlip2] = useState(true);
    const [buttonFlip3, setButtonFlip3] = useState(true);
    const [buttonFlip4, setButtonFlip4] = useState(true);

    return (
        <div className={styles['inner-grid']}>
            <motion.button className={styles["q1"]} onClick={() => setButtonFlip1(!buttonFlip1)}>
                {buttonFlip1 ? (<p>
                    + How long does the process take?</p>)
                    : (<p>Anywhere from 2 weeks to 3 months,
                        respectively. Every project is different,
                        with varying levels of complexity and
                        size.</p>)}
            </motion.button>
            <motion.button className={styles["q2"]} onClick={() => setButtonFlip2(!buttonFlip2)}>
                {buttonFlip2 ? (<p>
                    + Is your service Really free?</p>)
                    : (<p>Yes! There are no hidden fees for
                        contacting or utilizing our services.
                        We want to build a portfolio
                        that helps others and (hopefully)
                        creates positive change!</p>)}
            </motion.button>
            <motion.button className={styles["q3"]} onClick={() => setButtonFlip3(!buttonFlip3)}>
                {buttonFlip3 ? (<p>
                    + Who owns the rights to the website once it’s finished?</p>)
                    : (<p>
                        You! While we will ask for the
                        right to share your website within
                        our portfolio, you will have complete
                        control over every aspect of your
                        site once we’re finished.
                    </p>)}
            </motion.button>
            <motion.button className={styles["q4"]} onClick={() => setButtonFlip4(!buttonFlip4)}>
                {buttonFlip4 ? (<p>
                    + What happens if I dislike the design?</p>)
                    : (<p>
                        We’ll change it!
                        We don’t begin developing
                        your website until after you’ve
                        approved the design. It’s likely
                        that your site will go through
                        5 to 20 iterations before a design
                        is finalized. Don’t hesitate
                        to critique! This is your website!
                    </p>)}
            </motion.button>
        </div>)
}
