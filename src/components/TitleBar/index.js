import React from 'react'
import styles from './TitleBar.module.scss'



const logo = require('../../img/prefare_logo.svg')

const TitleBar = () => {
    return (
        <div className={styles.navigationContainer}>
            <div className={styles.logoContainer}>
                <img src= {logo} alt='Prefare Logo' />                
            </div>
            <div className={styles.navigationList}>
                <ul>
                    <li>MEAL PLANS</li>
                    <li>ABOUT US</li>
                    <li>FAQ</li>
                    <li>LOGIN</li>
                    <li>SIGN UP</li>
                </ul>
            </div>
        </div>
    )
}
export default TitleBar