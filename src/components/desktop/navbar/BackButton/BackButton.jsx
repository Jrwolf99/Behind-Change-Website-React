import React from 'react'

import styles from "./BackButton.module.css";

import { motion } from "framer-motion";

import { useToggle } from '../../../../hooks/useToggle';


export default function BackButton() {
    const [isHovered, toggleHover, setIsHovered] = useToggle();
    return (
        <motion.div
            onMouseOver={() => { setIsHovered(true) }}
            onMouseLeave={() => setIsHovered(false)}
            exit={{ opacity: 0 }}
        >
            <motion.div
                animate={isHovered ? { rotate: -45 } : {}}
                className={`${styles['bar']}`} />
            <motion.div
                animate={isHovered ? { rotate: 225, x: 0, y: -13 } : {}}
                className={`${styles['bar']}`} />
            <motion.p
                animate={isHovered ? { scale: 1.1 } : {}}
                className={`${styles['text']}`}>Back To<br />Home</motion.p>
        </motion.div>
    )
}
