import React from 'react';
import styles from './Roadmap.module.css';
import { FaRocket, FaCog, FaCode, FaCheckCircle, FaHandsHelping } from 'react-icons/fa';

const Roadmap = () => {
    const steps = [
        {
            icon: <FaRocket className={styles.icon} />,
            title: 'Instant Project Request (0-5 Minutes)',
            description: 'Client submits project details and receives an AI-powered design preview.',
            time: '0-5 Minutes',
        },
        {
            icon: <FaCog className={styles.icon} />,
            title: 'Rapid Concept Finalization (5-10 Minutes)',
            description: 'Quick review session and client approval of the final design.',
            time: '5-10 Minutes',
        },
        {
            icon: <FaCode className={styles.icon} />,
            title: 'High-Speed Development (10-40 Minutes)',
            description: 'Automated code generation and instant deployment for testing.',
            time: '10-40 Minutes',
        },
        {
            icon: <FaCheckCircle className={styles.icon} />,
            title: 'Live Product Delivery (40-60 Minutes)',
            description: 'Final review and immediate delivery of the live product.',
            time: '40-60 Minutes',
        },
        {
            icon: <FaHandsHelping className={styles.icon} />,
            title: 'Post-Launch Support (Optional)',
            description: 'Quick post-launch support for minor tweaks or updates.',
            time: 'Optional',
        },
    ];

    return (
        <>
            <h1 className={styles.h1_tag}>Delivering Your Product in Less Than <span className={styles.highlight}>1 Hour</span></h1>

            <div className={styles.roadmapContainer}>
                {steps.map((step, index) => (
                    <div key={index} className={styles.step}>
                        {step.icon}
                        <div>
                            <div className={styles.title}>{step.title}</div>
                            <div className={styles.description}>{step.description}</div>
                            <div className={styles.time}>{step.time}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
};

export default Roadmap;
