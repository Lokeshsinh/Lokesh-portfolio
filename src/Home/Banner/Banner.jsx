import React, { useEffect, useState } from 'react'
import styles from './Banner.module.css'
import banner from '../../assets/Logo/banner.png'
import { motion } from "motion/react";
const developer = [
    "Frontend Developer",
    "FullStack Developer",
    "UI/UX Designer",
    "Shopify Developer",
    "Software Developer"
]

function Banner() {
    const [store, setStore] = useState(0);
    useEffect(() => {
        const inteval = setTimeout(() => {
            setStore((prev) => (prev + 1) % developer.length)
        }, 2000)


        return () => clearTimeout(inteval)
    }, [store])

    const words = developer[store].split(" ");
    const newWords = words[0]
    const newOther = words[1]

    return (
        <>
            <section className={styles.bannerUser}>
                <div className={styles.bannerBackText}>
                    <h1>Portfoloio</h1>
                </div>
                <div className={styles.bannerFlex}>
                    {/* text */}
                    <motion.div className={styles.bannerText}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}>
                        <div className={styles.bannerName}>
                            <h2>I'<span>M</span></h2>
                            <h1>Javarikapishan <br /><span>Lokesh</span></h1>
                        </div>
                        <div className={styles.bannerSlide}>
                            <h1 key={store}>
                                <span className={styles.firstWord}>{newWords}</span>{" "}
                                <span className={styles.secondWord}>{newOther}</span>
                            </h1>
                        </div>

                        <div className={styles.BannerButton}>
                            <button className={styles.FirstButton}>See my work</button>
                            <button className={styles.secondButton}>Get in Touch</button>
                        </div>
                    </motion.div>

                    {/* Middle image */}

                    <motion.div className={styles.middleImage} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}>
                        <img src={banner} alt="banner" />
                    </motion.div>

                    {/* text Decreations */}
                    <motion.div className={styles.lastText} initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}>
                        <p>I design interfaces in <span>Figma</span>, then build them in <span>React</span>, <span>Node</span> and <span>Shopify.</span></p>
                        <div className={styles.styleBox}>

                            <div className={styles.styleBoxes}>
                                <div className={styles.stylesUser}>
                                    <h3>1.5+</h3>
                                    <span>Years Experience</span>
                                </div>

                                <div className={styles.stylesUser}>
                                    <h3>3+</h3>
                                    <span>Internships</span>
                                </div>

                                <div className={styles.stylesUser}>
                                    <h3>7+</h3>
                                    <span>Projects Built</span>
                                </div>

                                <div className={styles.stylesUser}>
                                    <h3>10+</h3>
                                    <span>Technologies</span>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </section>

        </>
    );
}

export default Banner;