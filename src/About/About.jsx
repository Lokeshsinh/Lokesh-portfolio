import React from 'react'
import styles from './About.module.css'
function About() {
    return (
        <>
            <section className={styles.aboutSec}>
                <div className={styles.aboutFlex}>
                    {/* ABout me */}
                    <div className={styles.aboutText}>
                        <div className={styles.aboutHead}>
                            <h1>Passionate About Code. <br /> <span> Driven by Creativity.</span></h1>
                            <div className={styles.aboutPara}>
                                <p>Hi, <span>I'm Lokesh,</span> a passionate Full Stack Developer with  <span>1.5+ years of internship
                                    experience</span> in developing modern, responsive, and user-friendly <span>web applications</span>.
                                    I enjoy turning ideas into functional digital experiences with clean design and efficient code.</p>
                                <p>I specialize in <span>React.js, JavaScript, Node.js, Express.js, MongoDB, and Shopify</span>. I also work with Figma to
                                    create <span>UI/UX</span> designs and build responsive websites, including e-commerce, business, and educational platforms.</p>
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