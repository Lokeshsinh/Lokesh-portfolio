import React, { useState, useEffect, useMemo } from 'react'
import styles from './About.module.css'
import { motion, AnimatePresence } from "motion/react";
import user1 from '../../assets/User/user1.jpg'
import user2 from '../../assets/User/user2.jpg'
import user3 from '../../assets/User/user3.png'
import Idcard from '../../assets/User/Idcard.png'
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
        I'm always excited to explore new technologies, improve my <span style={{ color: "#208F63", fontWeight: "550" }}>problem-solving skills</span>, and take on challenging projects. I believe
        in continuous learning, writing reusable code, and creating meaningful
        digital solutions that deliver great user experiences.
    </>
];

const Developer = [
    "Software Developer",
    "Fullstack Developer",
    "Frontend Developer"
];

const imgesDev = [
    user1,
    user2,
    user3
]
function About() {
    const [current, setCurrent] = useState(0);
    const [secCurrent, setSecCurrent] = useState(0);
    const [secImge, setSecImage] = useState(0);
    const [rotate, setRotate] = useState({
        rotateX: 0,
        rotateY: 0,
    });


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrent((prev) => (prev + 1) % aboutMe.length);
    //         setSecCurrent((prev) => (prev + 1) % Developer.length);
    //         setSecImage((prev) => (prev + 1) % imgesDev.length);
    //     }, 3000)

    //     console.log(current)

    //     return () => clearInterval(interval)
    // }, [current]);

    const handlerPrev = () => {
        setCurrent((prev) => (prev - 1 + aboutMe.length) % aboutMe.length);
        setSecCurrent((prev) => (prev - 1 + Developer.length) % Developer.length);
        setSecImage((prev) => (prev - 1 + imgesDev.length) % imgesDev.length)
    }


    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % aboutMe.length);
        setSecCurrent((prev) => (prev + 1) % Developer.length);
        setSecImage((prev) => (prev + 1) % imgesDev.length)
    }

    const word = Developer[secCurrent].split(" ")
    const word1 = word[0];
    const word2 = word[1];



    // const handleMouseMove = (e) => {
    //     const rect = e.currentTarget.getBoundingClientRect();

    //     const x = e.clientX - rect.left;
    //     const y = e.clientY - rect.top;

    //     const centerX = rect.width / 2;
    //     const centerY = rect.height / 2;

    //     const rotateY = ((x - centerX) / centerX) * 15;
    //     const rotateX = -((y - centerY) / centerY) * 15;

    //     setRotate({
    //         rotateX,
    //         rotateY,
    //     });
    // };

    // const handleMouseLeave = () => {
    //     setRotate({
    //         rotateX: 0,
    //         rotateY: 0,
    //     });
    // };


    return (
        <>
            <section className={styles.aboutSec}>
                <div className={styles.aboutFlex}>
                    {/* ABout me */}
                    <div className={styles.aboutText}>
                        <div className={styles.aboutHead}>
                            <div className={styles.aboutLabel}>
                                <span className={styles.aboutSpan}>About Me</span>
                            </div>
                            <h1>Passionate About Code  <br /><span>Driven by Creativity</span>.</h1>
                        </div>

                        <div>
                            {/* <div className={styles.aboutPara} >
                                <AnimatePresence mode='wait'>
                                    <motion.p key={current}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.5 }}>{aboutMe[current]}</motion.p>
                                </AnimatePresence>
                            </div> */}
                        </div>

                        <div className={styles.aboutBottom}>

                            {/* <div className={styles.bottomCard}>
                                <AnimatePresence mode='wait'>
                                    <motion.div className={styles.bottomImg} key={secCurrent}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.5 }}>
                                        <img src={imgesDev[secImge]} alt="images" />
                                    </motion.div>
                                </AnimatePresence>
                                <AnimatePresence mode='wait'>
                                    <motion.p key={secCurrent}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.5 }}>
                                        <span className={styles.firstWord}>{word1}</span>{" "}
                                        <span className={styles.secondWord}>{word2}</span>
                                    </motion.p>
                                </AnimatePresence>
                            </div> */}

                            {/* <div className={styles.arrowButton}>
                                <button className={styles.arrowBtn} onClick={handlerPrev}></button>
                                <button className={styles.arrowBtn} onClick={handleNext}></button>
                            </div> */}
                        </div>
                    </div>
                    {/* Id card */}


                    <div className={styles.AboutIdcard}>
                        {/* <div className={styles.aboutIdimage}>
                            <motion.img
                                src={Idcard}
                                alt="Developer ID Card" />
                        </div> */}
                    </div>

                </div>
            </section>
        </>
    );
}

export default About;