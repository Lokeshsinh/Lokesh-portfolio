import React, { useState, useEffect, useMemo } from 'react'
import styles from './About.module.css'
import { motion, AnimatePresence } from "motion/react";
import user from '../../assets/Slider/comma.png'

const aboutMe = [
    <>
        Hi, <span style={{ color: "#208F63", fontWeight: "550" }}>
            I'm Lokesh
        </span>, a passionate <span style={{ color: "#208F63", fontWeight: "550" }}>Full Stack Developer with 1.5+ years of internship
            experience</span> in developing modern, responsive, and user-friendly web
        applications. I enjoy turning ideas into functional digital experiences
        with clean design and efficient code.
    </>,
    <>
        I specialize in <span style={{ color: "#208F63", fontWeight: "550" }}> React.js, JavaScript, Node.js, Express.js, MongoDB,
            and Shopify</span>. I also work with Figma to create <span style={{ color: "#208F63", fontWeight: "550" }}> UI/UX designs</span> and build
        responsive websites, including e-commerce, business, and educational
        platforms.
    </>,
    <>
        I'm always excited to explore new technologies, improve my
        <span style={{ color: "#208F63", fontWeight: "550" }}>problem-solving skills</span>, and take on challenging projects. I believe
        in continuous learning, writing reusable code, and creating meaningful
        digital solutions that deliver great user experiences.
    </>
];
function About() {
    const [current, setCurrent] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrent((prev) => (prev + 1) % aboutMe.length);
    //     }, 3000)

    //     console.log(current)

    //     return () => clearInterval(interval)
    // }, [current]);

    const handlerPrev = () => {
        setCurrent((prev) => (prev - 1 + aboutMe.length) % aboutMe.length)
    }


    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % aboutMe.length)
    }

    return (
        <>
            <section className={styles.aboutSec}>
                <div className={styles.aboutFlex}>
                    {/* ABout me */}
                    <div className={styles.aboutText}>
                        <div className={styles.aboutHead}>
                            <h3>About Me</h3>
                            <h1>Code Meets  <span>Creativity</span>.</h1>
                        </div>

                        <div>
                            <div className={styles.aboutPara} >
                                <AnimatePresence mode='wait'>
                                    <motion.p key={current}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.5 }}>{aboutMe[current]}</motion.p>
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className={styles.aboutBottom}>
                            <p>Javarikapishan Lokesh</p>

                            <div className={styles.arrowButton}>
                                <button className={styles.arrowBtn} onClick={handlerPrev}>‹</button>
                                <button className={styles.arrowBtn} onClick={handleNext}>›</button>
                            </div>
                        </div>
                    </div>
                    {/* Id card */}
                </div>
            </section>
        </>
    );
}

export default About;