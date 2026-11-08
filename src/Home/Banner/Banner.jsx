import React, { useEffect, useState } from 'react'
import styles from './Banner.module.css'

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

        console.log(store)
        return () => clearTimeout(inteval)
    }, [store])

    const words = developer[store].split(" ");
    const newWords = words[0]
    const newOther = words[1]

    return (
        <>
            <section className={styles.bannerUser}>
                <div className={styles.bannerFlex}>
                    <div className={styles.bannerText}>
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
                    </div>
                </div>
            </section>

        </>
    );
}

export default Banner;