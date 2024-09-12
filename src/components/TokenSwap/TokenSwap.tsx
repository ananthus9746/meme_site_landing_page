import React from 'react';
import styles from './TokenSwap.module.css';
import Arrow from '../../assets/Arrow 2.svg'
import Arrow4 from '../../assets/Group 4.svg'

const TokenSwap: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <span className={styles.title}>Token Swap</span>
                <div className={styles.chainIcon}>Chain Icon</div>
                <div className={styles.tokenIcon}>Token Icon</div>

                <span className={styles.time}>4 Hours Ago</span>

                <span className={styles.address}>0x01BaCde...F331dE</span>

                <span className={styles.amount}>500 USDC</span>
                <div className={styles.icon_container_and_arrow}>

                    <div className={styles.icon_container}>
                        <div className={styles.chainIcon}>Chain Icon</div>
                        <img src={Arrow4} className={styles.arrow_reverse} />

                        <div className={styles.tokenIcon}>Token Icon</div>
                    </div>

                </div>



                <span className={styles.address}>69,696,696...PEPE</span>


                <span className={styles.fee_container}>
                    <span className={styles.feesTitle}>Fees</span>
                    <span className={styles.fees}>0.00124 ETH</span>
                </span>

            </div>
        </div>
    );
};

export default TokenSwap;
