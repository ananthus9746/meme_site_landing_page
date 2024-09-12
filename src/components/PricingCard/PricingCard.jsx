import React from 'react';
import styles from './PricingCard.module.css';
import { FaCheck } from 'react-icons/fa';

const PricingCard = () => {
    const plans = [
        {
            title: 'Basic',
            price: '$299',
            details: '1 yr Domain + hosting\n$75/yr after\nTemplate website\nTelegram setup',
        },
        {
            title: 'Standard',
            price: '$599',
            details: '1 yr domain + hosting\n$75/yr after\nTemplate website\nCustom template\nTelegram setup\nToken deployment\nLP creation',
        },
        {
            title: 'Premium',
            price: '$1999',
            details: '3 yr domain + hosting\n$75/yr after\nCustom website\nTelegram setup\nDiscord setup\nToken Deployment\nLP creation\n2 DEX listings',
        },
    ];

    return (
        <>
            <h1 className={styles.h1_tag}>Our Pricing <span className={styles.highlight}> Plans</span></h1>

            <div className={styles.pricingContainer}>
                {plans.map((plan, index) => (
                    <div key={index} className={styles.card}>
                        <div>
                            <div className={styles.cardHeader}>{plan.title}</div>
                            <div className={styles.price}>{plan.price}</div>
                            <div className={styles.list}>
                                {plan.details.split('\n').map((item, idx) => (
                                    <div key={idx} className={styles.listItem}>
                                        <FaCheck className={styles.checkmark} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* <button className={styles.purchaseButton}>Contact Now</button> */}
                    </div>
                ))}

            </div>
            <button className={styles.purchaseButton}>Contact Now</button>

        </>

    );
};

export default PricingCard;
