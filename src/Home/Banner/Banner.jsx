import React, { useEffect, useState } from 'react'
import styles from './Banner.module.css'

const developer = [
    "Frontend Developer",
    "Full Stack Developer",
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
                            <h1>{developer[store]}</h1>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Banner;