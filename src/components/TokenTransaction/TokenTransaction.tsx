import React from 'react';
import styles from './TokenTransaction.module.css';
import Arrow from '../../assets/Arrow 2.svg'
const TokenTransaction: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                
                <span className={styles.title}>Token Transaction</span>
                <div className={styles.chainIcon}>Chain Icon</div>

                <span className={styles.time}>4 Hours Ago</span>
                <span className={styles.amount}>500 USDC</span>
                <div className={styles.tokenIcon}>Token Icon</div>

                <span className={styles.address_container}>

                <span className={styles.address}>0x01BaCde...F331dE</span>
                <div className={styles.arrow}>
                        <img src={Arrow}/>
                </div>
                <span className={styles.address}>0x01BaCde...F331dE</span>
                </span>

                <span className={styles.fee_container}>
                    <span className={styles.feesTitle}>Fees</span>
                    <span className={styles.fees}>0.00124 ETH</span>
                </span>
               
            </div>
        </div>
    );
};

export default TokenTransaction;
