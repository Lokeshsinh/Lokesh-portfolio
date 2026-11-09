import React from 'react'
import styles from './slider.module.css'
import { motion } from "motion/react";
import html from '../assets/Slider/html.png'
import css from '../assets/Slider/css.png'
import java from '../assets/Slider/java.png'
import react from '../assets/Slider/react.png'
import node from '../assets/Slider/node.png'
import python from '../assets/Slider/python.png'
import django from '../assets/Slider/django.png'
import shopify from '../assets/Slider/shopify.png'
import figma from '../assets/Slider/figma.png'
import mongoDB from '../assets/Slider/mongoDB.png'
import sql from '../assets/Slider/sql.png'
function Slider() {

    const skils = [
        {
            image: html,
            tool: "HTML",
        },

        {
            image: css,
            tool: "CSS",
        },
        {
            image: java,
            tool: "Javascript"
        },
        {
            image: react,
            tool: "ReactJS"
        },
        {
            image: node,
            tool: "NodeJS"
        },

        {
            image: python,
            tool: "Python"
        },
        {
            image: django,
            tool: "Django"
        },

        {
            image: shopify,
            tool: "Shopify"
        },

        {
            image: figma,
            tool: "Figma"
        },

        {
            image: mongoDB,
            tool: "MongoDB"
        },

        {
            image: sql,
            tool: "SQL"
        },
    ]

    return (
        <>
            <div className={styles.SliderMar}>
                <div className={styles.MaequeeSlide}>
                    {[...skils, ...skils, ...skils].map((item, index) => (
                        <div className={styles.marqueBox} key={index}>
                            <div className={styles.ImageCircle}>
                                <img src={item.image} alt={item.tool} />
                            </div>
                            <span>{item.tool}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Slider;