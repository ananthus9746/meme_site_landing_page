import React from 'react';
import styles from './HeroSection.module.css';
import { FaUserAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';  // Example of using react-icons
import Carousels from '../Carousels/Carousels';

const HeroSection = () => {
    return (
        <>
            <section 
                className={styles.section}
            >
               
                <div className={styles.heroContent}>
                    <h1>Build Your Meme Coin Website at <span className={styles.highlight}>Lightning</span>  Speed</h1>
                    <p className={styles.description}>
                        In the fast-paced world of meme coins, speed and creativity matter. At Ready2Meme, we specialize in crafting eye-catching, engaging websites designed specifically for meme coin projects.
                    </p>
                    <div className={styles.buttonSection}>
                        <button className={styles.getStarted}>Get Started</button>
                    </div>
                </div>
              
            </section>
        </>

    );
};

export default HeroSection;
