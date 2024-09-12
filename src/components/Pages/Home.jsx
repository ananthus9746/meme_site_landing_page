import React from 'react';
import styles from './Home.module.css'
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import Carousels from '../Carousels/Carousels';
import Roadmap from '../Roadmap/Roadmap';
import PricingCard from '../PricingCard/PricingCard';

function Home() {
    return (
        <section className={styles.hero}>
            <div className={styles.gradient1}></div>
            <div className={styles.gradient2}></div>

            <Header />
            <HeroSection/>
            <Carousels/>
            <Roadmap/>
            <PricingCard/>
        </section>
    );
}

export default Home;