import React from 'react';
import styles from './Header.module.css';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>READY2.MEME</div>
            <nav className={styles.nav}>
                
                <button className={styles.freeTrial}>Contact Now</button>
            </nav>
        </header>
    );
};

export default Header;
